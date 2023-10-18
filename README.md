<h1 align="center">Welcome to hexo-deployer-ftp-kx 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/hexo-deployer-ftp-kx" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/hexo-deployer-ftp-kx.svg">
  </a>
  <img src="https://img.shields.io/badge/node-%3E%3D16%20%7C%7C%2014%20%3E%3D14.17-blue.svg" />
  <a href="https://github.com/kongxiangyiren/hexo-deployer-ftp-kx#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/kongxiangyiren/hexo-deployer-ftp-kx/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/kongxiangyiren/hexo-deployer-ftp-kx/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/kongxiangyiren/hexo-deployer-ftp-kx" />
  </a>
</p>

> hexo ftp 上传文件

### 🏠 [Homepage](https://github.com/kongxiangyiren/hexo-deployer-ftp-kx#readme)

## Prerequisites

- node >=16 || 14 >=14.17

## Install

```sh
npm i hexo-deployer-ftp-kx
```

## 使用

```yaml
deploy:
  type: ftp-deploy-kx
  host: <host> # 服务器host 必填
  user: <user> # ftp用户名 必填
  password: <password> # ftp密码 必填
  # 以下为非必填项
  port: 21 #ftp port 默认21
  remoteRoot: / # 远程主机的根目录 默认/
  include: # 要上传的内容 默认public全部
    - '*'
    - '**/*'
  exclude: # 要排除的文件 默认[]
  deleteRemote: false # 是否删除[remoteRoot]下所有文件再上传 默认false
  forcePasv: false # 强制被动模式(不发送EPSV命令) 默认 false
  sftp: false # 是否使用sftp 默认false
```

## Author

👤 **空巷一人**

- Github: [@kongxiangyiren](https://github.com/kongxiangyiren)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kongxiangyiren/hexo-deployer-ftp-kx/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2023 [空巷一人](https://github.com/kongxiangyiren).<br />
This project is [MIT](https://github.com/kongxiangyiren/hexo-deployer-ftp-kx/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
