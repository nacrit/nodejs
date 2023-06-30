/**
 * TypeScript 程序由以下几个部分组成：
 * 模块
 * 函数
 * 变量
 * 语句和表达式
 * 注释
 *
 * 我们可以同时编译多个 ts 文件：
 * tsc file1.ts file2.ts file3.ts
 *
 * tsc 常用编译参数如下表所示： tsc --help
 * 空白和换行:TypeScript 会忽略程序中出现的空格、制表符和换行符。
 * TypeScript 区分大小写
 * 分号是可选的
 * TypeScript 注释: 单行，多行
 * TypeScript 与面向对象
 *
 *
 */
class Site {
    name(): void {
        console.log("bob")
    }
}
const site = new Site();
site.name()


//