---
title: 开发工具
date: 2024-06-02 09:07:54
order: 1
---

## MySQL 相关

### MySQL 连接 JDBC

::: code-group

```properties [jdbc.properties-MySQL8]
jdbc.driver=com.mysql.cj.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8&useSSL=false&serverTimezone=GMT%2B8
jdbc.username=root
jdbc.password=123456
```

```properties [jdbc.properties-MySQL5.7]
jdbc.drive=com.mysql.jdbc.Driver
jdbc.url=jdbc:mysql://localhost:3306/test?useUnicode=true&characterEncoding=UTF-8&useSSL=false
jdbc.username=root
jdbc.password=123456
```

:::

::: info 时区

- 世界标准时间（比北京时间慢八小时）：`UTC`
- 格林尼治标准时间：`GMT`
- 北京时间：`GMT%2B8`
- 上海时间：`Asia/Shanghai`

:::

### MySQL 修改用户权限

### MySQL 重置密码

::: code-group

```sh [记得登录密码]
# 修改密码，且以加密方式存储密码
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';

# 低于5.7新版本的使用这个命令
update user set password=password("123456") where user="root";

# 高于5.7版本的password字段已经变为了authentication_string
update user set authentication_string=password("123456") where user="root";
```

```sh [不记得登录密码-使用 CMD 命令]
# =============================================================================
# 1. 以管理员身份，打开一个 CMD 终端，然后在该终端中进行以下操作，操作完后不要关闭该终端
# 1.1 停止 MySQL 服务
net stop mysql
# 1.2 启动 MySQL 服务的时候跳过权限表认证
mysqld --console --skip-grant-tables --shared-memory
# =============================================================================
# 2. 以管理员身份，再打开一个 CMD 终端，然后在该终端中进行以下操作
# 2.1 登录 MySQL，并且当输入密码的时候，直接回车即可
mysql -uroot -p
# 2.2 使用 MySQL 数据表
use mysql;
# 2.3-1 将 root 用户的密码置为空（高于5.7）
update user set authentication_string="" where user="root";
# 2.3-2 将 root 用户的密码置为空（低于5.7）
update user set password=password("") where user="root";
# 2.4 退出此 MySQL 连接
quit;
# =============================================================================
# 3. 在第二个终端中，继续以空密码登录并修改密码
# 3.1 关闭第一个 CMD 终端（Ctrl+C 或者关闭命令行）
# 3.2 在第二个终端中输入代码，重新启动 mysql 服务
net stop mysql
net start mysql
# 3.3 在命令行中输入 mysql -uroot -p，然后按 enter 键，且密码为空
mysql -uroot -p
# 3.4 使用 MySQL 数据表
use mysql;
# 3.5 修改密码
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
# 3.6 退出后，使用新密码登录
quit;
```

:::

::: tip 注意：alter 和 update 命令均可修改密码，但是它们也是有区别的
`update` 修改后的密码存储在数据库中是明文；而 `alter` 存储的是加密后的数据。

`update` 命令保存的为明文是因为没有使用 `password()` 方法，而 `password()` 方法在 mysql5.7.6 版本以后已经废弃了，所以必须使用 `alter` 命令去修改密码了。

在免鉴权的情况下，直接使用 `alter` 命令去修改密码也是不可以的，会报错；所以必须先使用 `update` 命令清空密码，然后再使用 `alter` 命令修改密码。
:::
