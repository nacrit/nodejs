/**
 *  <h1>六、TypeScript 函数 </h1>
 *  * function 函数名(参数1:类型, 参数2?:类型): 返回值类型 {} // 参数2为可选参数类型
 *  * function 函数名(参数1:类型, 参数2:类型 = 默认值): 返回值类型 {} // 参数2有默认值
 *  * function 函数名(...参数:类型) {} // 可变参数
 *  * var 函数名 = function(参数:类型){} // 匿名函数
 *  * (function(){})() // 匿名函数自调用
 *  * var res = new Function (参数 ..., 函数体) // 内置构造函数定义函数
 *  * (参数) => 函数体 //Lambda 函数（箭头函数）
 * - 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
 *  * 定义函数重载需要定义重载签名和一个实现签名。
 *  * 重载签名定义函数的形参和返回类型，没有函数体。一个函数可以有多个重载签名(不可调用)
 */

console.log("函数重载 ---------------------------------------------")
let suits = ["hearts", "spades", "clubs", "diamonds"];
// 定义重载签名
function greet(person: string): string;
function greet(persons: string[]): string[];
// 定义实现签名
function greet(person: unknown): unknown {
    if (typeof person === 'string') {
        return `Hello, ${person}!`;
    } else if (Array.isArray(person)) {
        return person.map(name => `Hello, ${name}!`);
    }
    throw new Error('Unable to greet');
}
console.log(greet(suits[0]));
console.log(greet(suits));
/*
编译后：
var suits = ["hearts", "spades", "clubs", "diamonds"];
// 实现签名
function greet(person) {
    if (typeof person === 'string') {
        return "Hello, ".concat(person, "!");
    }
    else if (Array.isArray(person)) {
        return person.map(function (name) { return "Hello, ".concat(name, "!"); });
    }
    throw new Error('Unable to greet');
}
console.log(greet(suits[0]));
console.log(greet(suits));
 */
