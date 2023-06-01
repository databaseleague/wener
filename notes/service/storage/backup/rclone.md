---
title: rclone
---

# rclone

- [rclone/rclone](https://github.com/rclone/rclone)
  - https://rclone.org/
- 默认配置文件 `~/.config/rclone/rclone.conf`

:::caution

- 不支持 watch [#249](https://github.com/rclone/rclone/issues/249)
  - minio 的 mc 支持 mirror - 双向 watch
    - `mc mirror --watch --overwrite --remove`
  - 可以用 mount

:::

| flag                                 | desc                |
| ------------------------------------ | ------------------- |
| -P,--progress                        | 显示进度            |
| `--transfers <n:=4>`                 | 并行 数量           |
| --create-empty-src-dirs              | copy 创建空目录     |
| `-f,--filter <patterns>`             |
| --ignore-case                        | filter 大小写不敏感 |
| `--include <pattern>`                |
| `--exclude <pattern>`                |
| `--files-from <file>`                |
| `--min-size <size>`                  |
| `--max-size <size>`                  |
| `--max-age <age>`                    |
| --stats-one-line                     | 只显示一行状态      |
| --track-renames                      | 跟踪 rename         |
| `--track-renames-strategy <s:=hash>` | hash,modtime,leaf   |
| --delete-after                       | 默认                |
| --delete-before                      |
| --delete-during                      |
| --delete-excluded                    |

| command |
| ------- | ---------------------------------- |
| ls      | size,path - 默认递归 `--max-depth` |
| lsl     | mtime,size,path                    |
| lsd     | 目录                               |
| lsf     | 文件+目录 - 便于应用解析的格式     |
| lsjson  |
| copy    | 复制目录                           |
| copyto  | 复制单个文件                       |
| sync    | 同步 - 会删除额外的文件            |
| bisync  | 双向同步 - 会对比 mtime            |

```bash
brew install rclone # macOS

# Linux 安装
curl -O https://downloads.rclone.org/rclone-current-linux-amd64.zip
unzip rclone-current-linux-amd64.zip
cd rclone-*-linux-amd64
cp rclone /usr/local/bin/

# Commands
# ==========
rclone copy src:/src dst:/dst # 复制目录
rclone copyto                 # 复制单个文件

# 不创建配置的使用方式
rclone lsd --webdav-url http://192.168.1.1:8080 :webdav:
rclone lsd --sftp-host example.com :sftp:
rclone lsd --ftp-host 192.168.1.1 --ftp-port 21 --ftp-user anonymous --ftp-pass $(rclone obscure anonymous) :ftp:

rclone about gd:     # 使用情况
rclone reconnect gd: # Token 失效重连
```

- filter
  - https://rclone.org/filtering
  - `+ include-pattern`
  - `- exclude-pattern`
  - `!` - reset
- track-rename - [fs/sync/sync.go#L752-L789](https://github.com/rclone/rclone/blob/7a24c173f6669172d845221c7e37e5824fa13fb7/fs/sync/sync.go#L752-L789)
  - 先基于 size 找到可能 相同 的对象
  - 根据 hash 生成唯一 ID - 基于 ID 判断是否 相同 对象
  - track-renames-strategy 可指定多次
    - leaf 会要求只在相同目录下 rename - 添加 basedir 到 ID

## config

```bash
rclone config create svr s3 env_auth=true

rclone config create svr s3 provider=Minio endpoint=https://s3.example.com access_key_id=$USERNAME secret_access_key=$PASSWORD
cat ~/.config/rclone/rclone.conf
```

- remote 名字建议 `[a-z0-9][-a-z0-9_.]*`
- gcs
  - client_id
  - client_secret
  - project_number
- s3
  - access_key_id
  - secret_access_key
  - endpoint

**环境变量**

- 配置了环境变量可直接使用
- `RCLONE_CONFIG_<NAME>_TYPE=s3`
- `RCLONE_CONFIG_<NAME>_ACCESS_KEY_ID`
- `RCLONE_CONFIG_<NAME>_SECRET_ACCESS_KEY`
- `RCLONE_CONFIG_<NAME>_ENDPOINT`
- env_auth
  - s3
    - AWS_ACCESS_KEY_ID, AWS_ACCESS_KEY
    - AWS_SECRET_ACCESS_KEY, AWS_SECRET_KEY
    - AWS_SESSION_TOKEN
    - AWS_PROFILE - ~/.aws/credentials
    - AWS_SHARED_CREDENTIALS_FILE

**路径**

- /path/to/dir
- remove:path/to/dir - 基于 HOME 相对路径 - ftp,sftp,dropbox
- remove:/path/to/dir
- :backend:path/to/dir - 动态后端
  - `rclone lsd --http-url https://pub.rclone.org :http:`
  - `rclone lsd ":http,url='https://pub.rclone.org':"`
- `remote,parameter=value,parameter2=value2:path/to/dir`
- `:backend,parameter=value,parameter2=value2:path/to/dir`

```bash
# 覆盖配置
rclone copy "gdrive,shared_with_me:shared-file.txt" gdrive:

# flag 默认 true
rclone lsd :s3,env_auth:
```

## sftp


```bash
rclone config
```

## Web UI

```bash
# 会下载 https://github.com/rclone/rclone-webui-react/releases/download/v2.0.5/currentbuild.zip
# 到 ~/.cache/rclone/webgui/v2.0.5.zip]
rclone rcd --rc-web-gui --rc-addr :5572
```

## google drive

```bash
rclone mount gd: /tmp/gd \
  -vv --stats 30s --read-only --allow-other --rc --umask 0222 --attr-timeout 1s \
  --dir-cache-time 672h --vfs-cache-max-age 675h \
  --vfs-read-chunk-size 8M \
  --buffer-size 0 \
  --poll-interval 1m0s \
  --drive-v2-download-min-size 0
```

- https://rclone.org/drive/#making-your-own-client-id
- [#3625](https://github.com/rclone/rclone/issues/3625) - Add gdrive file id support
- [donwa/gclone](https://github.com/donwa/gclone)
  - 基于 rclone，支持替换 sa
- [xyou365/AutoRclone](https://github.com/xyou365/AutoRclone)
  - 切换 sa 上传

## one drive

- [#4062](https://github.com/rclone/rclone/issues/4062) Implement OneDrive shared with me
- https://rclone.org/webdav/#sharepoint-online

## mount

```bash
rclone mount s3:bucket /mnt/path --use-server-modtime
```

# FAQ

## ReadFileHandle.Read error: low level retry 1/10: unexpected EOF

## Failed to copy: mkdir permission denied

注意存储目录是不是没对，local 目录在 web 和操作的时候不一样

## 常用操作

```bash
# 下载失败可能会创建空文件
# 查看实际占用空间
du -hs . --apparent-size

apk add findutils
# 删除空文件
find . -type f -empty -delete
# 删除空目录
find . -type d -empty -delete
```

## 通过 alias 给 s3 指定 bucket 和前缀

```bash
export RCLONE_CONFIG_SVR_TYPE=s3
export RCLONE_CONFIG_SVR_PROVIDER=Minio
export RCLONE_CONFIG_SVR_ACCESS_KEY_ID=deployer
export RCLONE_CONFIG_SVR_SECRET_ACCESS_KEY=
export RCLONE_CONFIG_SVR_ENDPOINT=https://

export RCLONE_CONFIG_DST_TYPE=alias
export RCLONE_CONFIG_DST_REMOTE=SVR:artifacts/sites

rclone lsd DST:
```

## base64 decode failed when revealing password

```bash
export RCLONE_CONFIG_MYSFTP_PASS=`rclone obscure mypassword`
```