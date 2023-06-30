const msg: string = 'hello world';
console.log(msg)
/**
 * tsc 01_hello.ts 这时候在当前目录下（与 01_hello.ts 同一目录）就会生成一个 01_hello.js 文件，代码如下：
 * var msg = 'hello world';
 * console.log(msg);
 *
 * 运行js：node 01_hello.js
 */