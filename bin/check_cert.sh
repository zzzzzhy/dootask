DOOTASK_PATH=$1
APPID=$2
DOMAIN_RELATIVE="docker/nginx/site/ssl"
# 这里没有把多域名的情况考虑进去,如果有多域名的情况,需要修改脚本,更新证书倒是做了多域名更新
file=$(find ${DOOTASK_PATH}/${DOMAIN_RELATIVE} -type f -name "*.key"|head -n 1) 
domain=$(basename "$file" .key)
old_crt_md5=$(md5sum ${DOOTASK_PATH}/${DOMAIN_RELATIVE}/${domain}.crt| awk '{print $1}')
docker run -it --rm -v ${DOOTASK_PATH}/${DOMAIN_RELATIVE}:/work/${DOMAIN_RELATIVE} -v ${DOOTASK_PATH}/bin/:/update -v ${DOOTASK_PATH}/public:/work/public -e DOMAIN_PATH=/work/${DOMAIN_RELATIVE} nginx:alpine sh /update/renew_cert.sh
new_crt_md5=$(md5sum ${DOOTASK_PATH}/${DOMAIN_RELATIVE}/${domain}.crt| awk '{print $1}')
if [ "${old_crt_md5}" != "${new_crt_md5}" ]; then
    docker exec -it dootask-nginx-${APPID} "nginx -s reload"
fi