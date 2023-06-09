/**
 * 查看版本：npm -v
 * 升级：sudo npm install npm -g
 * 使用淘宝镜像：npm install -g cnpm --registry=https://registry.npmmirror.com
 * 安装pnpm：npm install pnpm -g
 * 
 * 安装模块：npm install <Module Name> -g
 * 卸载模块：npm uninstall <Module Namenpm search express> -g
 * 搜索模块：npm search <Module Name>
 * 创建模块：npm init
 * 
 * 如果出现以下错误：npm err! Error: connect ECONNREFUSED 127.0.0.1:8087，解决：npm config set proxy null
 * 
 * 查看安装目录：npm list -g
 * 查看某模块版本：npm list cnpm -g
 * 
 * 
 * ## 其他命令、
 *  -官方文档：https://www.npmjs.com/package/doc
 * 帮助命令：npm help
 * 在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
 * 使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
 * 使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版
 * 使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
 * 使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。
 * 
 * 
 */