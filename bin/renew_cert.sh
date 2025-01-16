#!/bin/bash
apk add --no-cache openssl socat
upgrade_cert(){
    curl https://get.acme.sh | sh
    if [[ 0 -ne $? ]]; then
        echo "安装证书更新脚本失败"
        echo $(date)":   安装证书更新脚本失败" >> /work/docker/nginx/site/ssl/update.log
        exit 1
    fi
    file=$1
    # find /work/docker/nginx/site/ssl -type f -name "*.key" | while read -r file; do
    domain=$(basename "$file" .key)  # 去掉路径和后缀
    # echo $domain
    # old_key_md5=$(md5sum /work/docker/nginx/site/ssl/${domain}.key| awk '{print $1}')
    old_crt_md5=$(md5sum /work/docker/nginx/site/ssl/${domain}.crt| awk '{print $1}')
    /root/.acme.sh/acme.sh --renew --standalone -d ${domain} --fullchainpath "/work/docker/nginx/site/ssl/${domain}.crt" --keypath "/work/docker/nginx/site/ssl/${domain}.key" --ecc --force
    # new_key_md5=$(md5sum /work/docker/nginx/site/ssl/${domain}.key| awk '{print $1}')
    new_crt_md5=$(md5sum /work/docker/nginx/site/ssl/${domain}.crt| awk '{print $1}')
    if [ "${old_key_md5}" == "${new_key_md5}" ]; then
        echo "${domain} 证书更新脚本失败"
        echo $(date)":   ${domain} 证书更新失败" >> /work/docker/nginx/site/ssl/update.log
        echo $(date)":   ${old_crt_md5} == ${new_crt_md5}" >> /work/docker/nginx/site/ssl/update.log
    else
        echo "${domain} 证书更新脚本成功"
        echo $(date)":   ${domain} 证书更新成功" >> /work/docker/nginx/site/ssl/update.log
    fi
    # done

}

find /work/docker/nginx/site/ssl -type f -name "*.key" | while read -r file; do
    CERT_PATH=$file
    expiry_date=$(openssl x509 -enddate -noout -in "$CERT_PATH" | cut -d= -f2)
    # 将过期时间转换为时间戳
    expiry_timestamp=$(date -d "$expiry_date" +%s)
    # 获取当前时间戳
    current_timestamp=$(date +%s)
    # 计算剩余天数
    days_remaining=$(( (expiry_timestamp - current_timestamp) / 86400 ))
    # 判断是否小于 30 天
    echo "剩余时间${days_remaining}天" >> /work/docker/nginx/site/ssl/update.log
    if [ "$days_remaining" -lt 30 ]; then
        upgrade_cert $file
    fi
done
