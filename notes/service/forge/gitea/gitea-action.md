---
title: Gitea Action
---

# Gitea Action

- [gitea/act_runner](https://gitea.com/gitea/act_runner)
  - 基于 [act](../act.md)
  - 类似 github action
- `/root/.cache/act/`
- 参考
  - 下载 https://dl.gitea.com/act_runner/
  - Docs https://docs.gitea.io/en-us/usage/usage/actions/act-runner/
  - [vegardit/docker-gitea-act-runner](https://github.com/vegardit/docker-gitea-act-runner)

:::tip

- 手动触发 [#23668](https://github.com/go-gitea/gitea/issues/23668)
- concurrency [#24769](https://github.com/go-gitea/gitea/issues/24769)
- cron [gitea#22751](https://github.com/go-gitea/gitea/pull/22751)
- 变量而不是密钥 [#23763](https://github.com/go-gitea/gitea/issues/23763)
- 日志清理 [#24256](https://github.com/go-gitea/gitea/issues/24256)
- 基于 Job 的 Token [#23642](https://github.com/go-gitea/gitea/issues/23642)
  - `docker login -u ${{github.repository_owner}} -p $GITEA_TOKEN`
  - github.actor

:::

**配置 Gitea**

```ini title="app.ini"
[actions]
ENABLED=true
```

- `https://gitea.example.com/admin/runners` 获取 Token

```bash
docker run --rm -it --entrypoint bash gitea/act_runner:nightly

act_runner generate-config > config.yaml

./act_runner register --instance http://192.168.8.8:3000 --token $TOKEN --no-interactive

docker run --rm -it \
  -e GITEA_INSTANCE_URL=http://192.168.8.18:3000 \
  -e GITEA_RUNNER_REGISTRATION_TOKEN=$TOKEN \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v $PWD/data:/data \
  --name my_runner gitea/act_runner:nightly
```

- 默认缓存位置 ~/.cache/actcache/

```yaml
log:
  # The level of logging, can be trace, debug, info, warn, error, fatal
  level: info

runner:
  # Where to store the registration result.
  file: .runner
  # Execute how many tasks concurrently at the same time.
  capacity: 1
  # Extra environment variables to run jobs.
  envs:
    A_TEST_ENV_NAME_1: a_test_env_value_1
    A_TEST_ENV_NAME_2: a_test_env_value_2
  # Extra environment variables to run jobs from a file.
  # It will be ignored if it's empty or the file doesn't exist.
  env_file: .env
  # The timeout for a job to be finished.
  # Please note that the Gitea instance also has a timeout (3h by default) for the job.
  # So the job could be stopped by the Gitea instance if it's timeout is shorter than this.
  timeout: 3h
  # Whether skip verifying the TLS certificate of the Gitea instance.
  insecure: false
  # The timeout for fetching the job from the Gitea instance.
  fetch_timeout: 5s
  # The interval for fetching the job from the Gitea instance.
  fetch_interval: 2s

cache:
  # Enable cache server to use actions/cache.
  enabled: true
  # The directory to store the cache data.
  # If it's empty, the cache data will be stored in $HOME/.cache/actcache.
  dir: ''
  # The host of the cache server.
  # It's not for the address to listen, but the address to connect from job containers.
  # So 0.0.0.0 is a bad choice, leave it empty to detect automatically.
  host: ''
  # The port of the cache server.
  # 0 means to use a random available port.
  port: 0

container:
  # Which network to use for the job containers. Could be bridge, host, none, or the name of a custom network.
  network_mode: bridge
  # Whether to use privileged mode or not when launching task containers (privileged mode is required for Docker-in-Docker).
  privileged: false
  # And other options to be used when the container is started (eg, --add-host=my.gitea.url:host-gateway).
  options:
  # The parent directory of a job's working directory.
  # If it's empty, /workspace will be used.
  workdir_parent:
```

## Docker

- /root/.cache/act

**默认 entrypoint**

```bash
#!/usr/bin/env bash

if [[ ! -d /data ]]; then
  mkdir -p /data
fi

cd /data

CONFIG_ARG=""
if [[ ! -z "${CONFIG_FILE}" ]]; then
  CONFIG_ARG="--config ${CONFIG_FILE}"
fi

# Use the same ENV variable names as https://github.com/vegardit/docker-gitea-act-runner

if [[ ! -s .runner ]]; then
  try=$((try + 1))
  success=0

  # The point of this loop is to make it simple, when running both act_runner and gitea in docker,
  # for the act_runner to wait a moment for gitea to become available before erroring out.  Within
  # the context of a single docker-compose, something similar could be done via healthchecks, but
  # this is more flexible.
  while [[ $success -eq 0 ]] && [[ $try -lt ${GITEA_MAX_REG_ATTEMPTS:-10} ]]; do
    act_runner register \
      --instance "${GITEA_INSTANCE_URL}" \
      --token "${GITEA_RUNNER_REGISTRATION_TOKEN}" \
      --name "${GITEA_RUNNER_NAME:-$(hostname)}" \
      --labels "${GITEA_RUNNER_LABELS}" \
      ${CONFIG_ARG} --no-interactive > /tmp/reg.log 2>&1

    cat /tmp/reg.log

    cat /tmp/reg.log | grep 'Runner registered successfully' > /dev/null
    if [[ $? -eq 0 ]]; then
      echo "SUCCESS"
      success=1
    else
      echo "Waiting to retry ..."
      sleep 5
    fi
  done
fi
# Prevent reading the token from the act_runner process
unset GITEA_RUNNER_REGISTRATION_TOKEN

act_runner daemon ${CONFIG_ARG}
```

```json title="/data/.runner"
{
  "WARNING": "This file is automatically generated by act-runner. Do not edit it manually unless you know what you are doing. Removing this file will cause act runner to re-register as a new runner.",
  "id": 1,
  "uuid": "",
  "name": "gitea-runner-0",
  "token": "",
  "address": "http://gitea",
  "labels": [
    "ubuntu-latest:docker://node:16-bullseye",
    "ubuntu-22.04:docker://node:16-bullseye",
    "ubuntu-20.04:docker://node:16-bullseye",
    "ubuntu-18.04:docker://node:16-buster"
  ]
}
```

```
GITEA_RUNNER_LABELS=ubuntu-latest:docker://node:16-bullseye,ubuntu-22.04:docker://node:16-bullseye,ubuntu-20.04:docker://node:16-bullseye,ubuntu-18.04:docker://node:16-buster
```

```
GITEA_RUNNER_LABELS=ubuntu-latest:docker://wener/node:18,alpine-latest:docker://wener/node:18,alpine-exec:host
```

- https://github.com/nektos/act/blob/master/IMAGES.md

```
cloning https://gitea.com/actions/setup-node to /root/.cache/act/actions-setup-node@v3
```

- https://gitea.com/actions
