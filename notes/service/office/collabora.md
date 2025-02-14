---
title: Collabora Online
---

# Collabora Online

- 服务端运行 Libreoffice
- 界面渲染到浏览器客户端
- 浏览器处理菜单、光标、文本选择等
- 弹出菜单和侧边栏也是由服务端渲染
- Collabora Online CODE 实现基于 LibreOffice Online LOOL (LOOLWSD)
  - 20 人限制，可自己编译取消限制
  - 两者区别并不大
  - [libreoffice/online](https://hub.docker.com/r/libreoffice/online) 镜像
- Collabora Online Development Edition (CODE)
- 参考
  - https://sdk.collaboraonline.com/contents.html

```bash
# https://www.collaboraoffice.com/code/docker/
# 管理
# http://collabora.localhost/loleaflet/dist/admin/admin.html
# -v $PWD/loolwsd.xml:/etc/loolwsd/loolwsd.xml
# -e "extra_params=--o:ssl.enable=false" 不启用 ssl
# 支持多个域名 'domain=collaboradomain\\.tld|nextclouddomain\\.tld'
# 域名为 nextcloud 的域名 - 访问者的域名
# 启动比较慢 - 会 link 很多资源
docker run --rm -it \
  -p 9980:9980 \
  -e "domain=collabora.localhost" \
  -e "username=admin" -e "password=S3cRet" \
  -e "extra_params=--o:ssl.enable=false --o:allowed_languages=zh_CN" \
  --cap-add MKNO \
  -e 'dictionaries=zh en' \
  --name collabora collabora/code

# 拷贝配置
docker cp collabora:/etc/loolwsd/loolwsd.xml loolwsd.xml
```

## CODE

- `https://<DOMAIN>/browser/dist/admin/admin.html`
  - 管理界面
  - 能看到内存和在线用户

## Docker

- https://sdk.collaboraonline.com/docs/installation/CODE_Docker_image.html?highlight=acceptable%20wopi%20hosts#setting-the-application-configuration-dynamically-via-environment-variables

## coolmount: Operation not permitted

## Explore The New Version

- 将 /usr/share/coolwsd/browser/dist/welcome 挂载为空目录

---

- Nextcloud app - repeatedly showing welcome screen [#5854](https://github.com/CollaboraOnline/online/issues/5854)
- https://github.com/CollaboraOnline/online/issues/4489
- `extra_params: --o:welcome.enable=false`
- https://github.com/nextcloud/richdocuments/issues/1034#issuecomment-726052204
- https://github.com/nextcloud/richdocuments/issues/1034#issuecomment-702742995

## Your Collabora Online server needs updating

- Menu/Tools/Options/LibreOffice/Online update options.
- https://wiki.documentfoundation.org/UserProfile
