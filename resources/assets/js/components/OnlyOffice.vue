<template>
    <div class="component-only-office">
        <Alert v-if="loadError" class="load-error" type="error" show-icon>{{$L('组件加载失败！')}}</Alert>
        <div :id="id" class="placeholder"></div>
        <div v-if="loadIng > 0" class="office-loading"><Loading/></div>
    </div>
</template>

<style lang="scss" scoped>
.component-only-office {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .placeholder {
        flex: 1;
        width: 100%;
        height: 100%;
    }

    .office-loading {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }
}
</style>
<style lang="scss">
.component-only-office {
    .load-error {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        padding: 8px;
        display: flex;
        align-items: center;

        .ivu-alert-icon {
            position: static;
            margin-right: 8px;
            margin-left: 4px;
        }
    }
}
</style>
<script>
import {mapState} from "vuex";
import {languageName} from "../language";

export default {
    name: "OnlyOffice",
    props: {
        id: {
            type: String,
            default: () => {
                return "office_" + Math.round(Math.random() * 10000);
            }
        },
        code: {
            type: String,
            default: ''
        },
        historyId: {
            type: Number,
            default: 0
        },
        value: {
            type: [Object, Array],
            default: function () {
                return {}
            }
        },
        readOnly: {
            type: Boolean,
            default: false
        },
        documentKey: Function
    },

    data() {
        return {
            loadIng: 0,
            loadError: false,

            docEditor: null,
        }
    },

    beforeDestroy() {
        if (this.docEditor !== null) {
            this.docEditor.destroyEditor();
            this.docEditor = null;
        }
    },

    computed: {
        ...mapState(['userInfo', 'themeName']),

        fileType() {
            return this.getType(this.value.type);
        },

        fileName() {
            return this.value.name;
        },

        fileUrl() {
            let codeId = this.code || this.value.id;
            let fileUrl
            if ($A.leftExists(codeId, "msgFile_")) {
                fileUrl = `dialog/msg/download/?msg_id=${$A.leftDelete(codeId, "msgFile_")}&token=${this.userToken}`;
            } else if ($A.leftExists(codeId, "taskFile_")) {
                fileUrl = `project/task/filedown/?file_id=${$A.leftDelete(codeId, "taskFile_")}&token=${this.userToken}`;
            } else {
                fileUrl = `file/content/?id=${codeId}&token=${this.userToken}`;
                if (this.historyId > 0) {
                    fileUrl += `&history_id=${this.historyId}`
                }
            }
            return fileUrl;
        }
    },

    watch: {
        'value.id': {
            handler(id)  {
                if (!id) {
                    return;
                }
                this.loadIng++;
                this.loadError = false;
                $A.loadScript($A.mainUrl("office/web-apps/apps/api/documents/api.js")).then(_ => {
                    if (!this.documentKey) {
                        this.handleClose();
                        return
                    }
                    const documentKey = this.documentKey();
                    if (documentKey && documentKey.then) {
                        documentKey.then(this.loadFile).catch(({msg})=>{
                            $A.modalError({content: msg});
                        });
                    } else {
                        this.loadFile();
                    }
                }).catch(_ => {
                    this.loadError = true
                }).finally(_ => {
                    setTimeout(_ => {
                        this.loadIng--;
                    }, 300)
                })
            },
            immediate: true,
        }
    },

    methods: {
        getType(type) {
            switch (type) {
                case 'word':
                    return 'docx';
                case 'excel':
                    return 'xlsx';
                case 'ppt':
                    return 'pptx'
            }
            return type;
        },

        async getUserData() {
            if (!this.userInfo.userid && this.userId && this.userToken) {
                this.$store.dispatch("showSpinner", 300).then(_ => {})
                try {
                    await this.$store.dispatch("getUserInfo");
                } catch (e) {
                    console.warn(e);
                } finally {
                    this.$store.dispatch("hiddenSpinner").then(_ => {})
                }
            }
            return {
                "id": String(this.userInfo.userid),
                "name": this.userInfo.nickname
            }
        },

        loadFile(keyAppend = '') {
            if (this.docEditor !== null) {
                this.docEditor.destroyEditor();
                this.docEditor = null;
            }
            //
            let lang = languageName;
            switch (languageName) {
                case 'zh-CHT':
                    lang = "zh-TW";
                    break;
            }
            //
            let codeId = this.code || this.value.id;
            let fileName = $A.strExists(this.fileName, '.') ? this.fileName : (this.fileName + '.' + (this.value.ext || this.fileType));
            let fileKey = `${this.fileType}-${keyAppend||codeId}`;
            if (this.historyId > 0) {
                fileKey += `-${this.historyId}`
            }
            (async _ => {
                const config = {
                    "document": {
                        "fileType": this.fileType,
                        "title": fileName,
                        "key": fileKey,
                        "url": `http://nginx/api/${this.fileUrl}`,
                    },
                    "editorConfig": {
                        "mode": "edit",
                        "lang": lang,
                        "user": await this.getUserData(),
                        "customization": {
                            "uiTheme": this.themeName === 'dark' ? "theme-dark" : "theme-classic-light",
                            "forcesave": true,
                            "help": false,
                        },
                        "callbackUrl": `http://nginx/api/file/content/office?id=${codeId}&dootask-token=${this.userToken}`,
                    },
                    "events": {
                        "onDocumentReady": this.onDocumentReady,
                    },
                };
                if (/\/hideenOfficeTitle\//.test(window.navigator.userAgent)) {
                    config.document.title = " ";
                }
                if (this.readOnly || this.historyId > 0) {
                    config.editorConfig.mode = "view";
                    config.editorConfig.callbackUrl = null;
                    if (!config.editorConfig.user.id) {
                        let officeViewer = await $A.IDBInt("officeViewer")
                        if (!officeViewer) {
                            officeViewer = $A.randNum(1000, 99999);
                            await $A.IDBSet("officeViewer", officeViewer)
                        }
                        config.editorConfig.user.id = "viewer_" + officeViewer;
                        config.editorConfig.user.name = "Viewer_" + officeViewer
                    }
                }
                this.$nextTick(() => {
                    this.$store.dispatch("call", {
                        url: 'file/office/token',
                        data: { config: config },
                    }).then(({data}) => {
                        config.token = data.token
                        this.docEditor = new DocsAPI.DocEditor(this.id, config);
                        //
                        if(this.readOnly){
                            var docEditorIframe = $("iframe[name='frameEditor']")[0];
                            docEditorIframe?.addEventListener("load", function() {
                                docEditorIframe.contentWindow.postMessage("disableDownload", "*")
                            });
                        }
                        //
                    }).catch(({msg}) => {
                        if (msg.indexOf("404 not found") !== -1) {
                            $A.modalInfo({
                                title: '版本过低',
                                content: '服务器版本过低，请升级服务器。',
                            })
                            return;
                        }
                        $A.modalError({content: msg});
                    });
                })
            })()
        },

        onDocumentReady() {
            this.$emit("on-document-ready", this.docEditor)
        }
    }
}
</script>
