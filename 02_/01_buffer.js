/**
 * Node.js Buffer(缓冲区)
 * JavaScript 语言自身只有字符串数据类型，没有二进制数据类型。Node.js为了处理二进制数据定义了Buffer类
 * 
 * Buffer 类是随 Node 内核一起发布的核心库。Buffer 库为 Node.js 带来了一种存储原始数据的方法，可以让 Node.js 处理二进制数据，
 * 每当需要在 Node.js 中处理I/O操作中移动的数据时，就有可能使用 Buffer 库。
 * 原始数据存储在 Buffer 类的实例中。一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
 * 
 * 在v6.0之前创建Buffer对象直接使用new Buffer()构造函数来创建对象实例，但是Buffer对内存的权限操作相比很大，可以直接捕获一些敏感信息，
 * 所以在v6.0以后，官方文档里面建议使用 Buffer.from() 接口去创建Buffer对象。
 */

// Buffer 与字符编码
// Buffer 实例一般用于表示编码字符的序列，比如 UTF-8 、 UCS2 、 Base64 、或十六进制编码的数据。 通过使用显式的字符编码，就可以在 Buffer 实例与普通的 JavaScript 字符串之间进行相互转换。
const buf = Buffer.from('runoob', 'utf8');

// buf hex 72756e6f6f62
console.log('buf hex ' + buf.toString('hex'));
// buf base64 cnVub29i
console.log('buf base64 ' + buf.toString('base64'));

/* 
Node.js 目前支持的字符编码包括：
ascii - 仅支持 7 位 ASCII 数据。如果设置去掉高位的话，这种编码是非常快的。
utf8 - 多字节编码的 Unicode 字符。许多网页和其他文档格式都使用 UTF-8 。
utf16le - 2 或 4 个字节，小字节序编码的 Unicode 字符。支持代理对（U+10000 至 U+10FFFF）。
ucs2 - utf16le 的别名。
base64 - Base64 编码。
latin1 - 一种把 Buffer 编码成一字节编码的字符串的方式。
binary - latin1 的别名。
hex - 将每个字节编码为两个十六进制字符。
*/

/* 
创建 Buffer 类
Buffer 提供了以下 API 来创建 Buffer 类：
Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
Buffer.allocUnsafeSlow(size)
Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例
*/
// 创建长度10 且 0填充的Buffer
const buf1 = Buffer.alloc(10);
console.log("buf1", buf1);
// 创建长度10 且 1填充的Buffer
const buf2 = Buffer.alloc(10, 1);
console.log("buf2", buf2);

// 创建长度10 且 未初始化的Buffer，可用full()或write()重写
// 这个方法调用更快，但返回的数据可能是旧数据
const buf3 = Buffer.allocUnsafe(10);
console.log("buf3", buf3);

// 创建一个包含 [1, 2, 3] 的Buffer
const buf4 = Buffer.from([1, 2, 3]);
console.log("buf4", buf4);
console.log("buf4 hex", buf4.toString('hex'));

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
const buf5 = Buffer.from("tést");
console.log("buf5", buf5);

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');

/* 
写入缓冲区
语法：写入 Node 缓冲区的语法如下所示：
buf.write(string[, offset[, length]][, encoding])
参数：描述如下：
string - 写入缓冲区的字符串。
offset - 缓冲区开始写入的索引值，默认为 0 。
length - 写入的字节数，默认为 buffer.length
encoding - 使用的编码。默认为 'utf8' 。
如果 buf 没有足够的空间保存整个字符串，则只会写入 string 的一部分。
返回：实际写入的大小。如果 buffer 空间不足， 则只会写入部分字符串。

实例：
*/
// 写入缓冲区
const buf7 = Buffer.alloc(16);
var len = buf7.write('www.baidu.com');
console.log('buf7 写入字节数=' + len, buf7)

/* 
从缓冲区读取数据
语法 读取 Node 缓冲区数据的语法如下所示：
buf.toString([encoding[, start[, end]]])
参数 参数描述如下：
encoding - 使用的编码。默认为 'utf8' 。
start - 指定开始读取的索引位置，默认为 0。
end - 结束位置，默认为缓冲区的末尾。
返回值 解码缓冲区数据并使用指定的编码返回字符串。

实例:
*/
// 从缓冲区读取数据
console.log("buf7 str", buf7.toString());

const buf8 = Buffer.alloc(26)
for(var i = 0; i < 26; i++) {
    buf8[i] = i + 97;
}
console.log('buf8 ascii', buf8.toString('ascii'));
console.log('buf8 ascii 0,5', buf8.toString('ascii', 0, 5));
console.log('buf8 ascii 5', buf8.toString('ascii', 5));
console.log('buf8 utf8 0,5', buf8.toString('utf8', 0, 5));
// 默认使用utf8
console.log('buf8', buf8.toString(undefined, 0, 5));

/* 
将 Buffer 转换为 JSON 对象
语法
buf.toJSON()
当字符串化一个 Buffer 实例时，JSON.stringify() 会隐式地调用该 toJSON()。

返回值：返回 JSON 对象。
*/
console.log("buf8 --> json", buf8.toJSON());
console.log("buf8 --> json2", JSON.stringify(buf8));

const buf8Copy = JSON.parse(JSON.stringify(buf8), (key, value) => value && value.type === 'Buffer' ? Buffer.from(value.data) : value);
console.log('buf8Copy', buf8.toString());


// TODO 缓冲区合并