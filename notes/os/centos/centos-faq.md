---
title: CentOS FAQ
---

# CentOS FAQ

## 使用 alpine 下依赖 musl 的二进制

```bash
cd /etc/yum.repos.d/
wget https://copr.fedorainfracloud.org/coprs/ngompa/musl-libc/repo/epel-7/ngompa-musl-libc-epel-7.repo
yum install musl-libc-static
```

## 修改网卡名为 eth* 的形式
* [Linux : How to rename the network interface in CentOS/RHEL7](http://www.itechlounge.net/2016/04/linux-how-to-rename-the-network-interface-in-centosrhel7/)

```bash
nano /etc/default/grub
# 在 GRUB_CMDLINE_LINUX 中添加 net.ifnames=0 biosdevname=0

# 从新生成配置
grub2-mkconfig -o /boot/grub2/grub.cfg

# 如果现在已经配置了网络, 可将 ifcfg-* 从命名为 ifcfg-eth0 的形式, 并修改配置中的 NAME 和 DEVICE
```