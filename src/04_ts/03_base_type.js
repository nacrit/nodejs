/**
 * <h1>一、TypeScript 基础类型</h1>
 * 任意类型(any): 声明为 any 的变量可以赋予任意类型的值。
 * 数字类型(number): 双精度 64 位浮点值。它可以用来表示整数和小数。
 * let binaryLiteral: number = 0b1010; // 二进制
 * let octalLiteral: number = 0o744;    // 八进制
 * let decLiteral: number = 6;    // 十进制
 * let hexLiteral: number = 0xf00d;    // 十六进制
 *
 * 字符串类型(string): 一个字符系列，使用单引号（'）或双引号（"）来表示字符串类型。反引号（`）来定义多行文本和内嵌表达式。
 * let name: string = "Hello World";
 * let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;
 *
 * 布尔类型(boolean): 表示逻辑值：true 和 false。
 * 数组类型: 声明变量为数组。
 * 元组: 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。
 * 枚举(enum): 枚举类型用于定义数值集合。
 * void(void): 用于标识方法返回值的类型，表示该方法没有返回值。
 * null(null): 表示对象值缺失。
 * undefined(undefined): 用于初始化变量为一个未定义的值
 * never(never): never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。
 * 注意：TypeScript 和 JavaScript 没有整数类型。
 *
 * <h1>二、JavaScript 数据类型</h1>
 * 值类型(基本类型)：字符串（String）、数字(Number)、布尔(Boolean)、空（Null）、未定义（Undefined）、Symbol。
 * 引用数据类型（对象类型）：对象(Object)、数组(Array)、函数(Function)，还有两个特殊的对象：正则（RegExp）和日期（Date）。
 * typeof "John"                // 返回 string
 * typeof 3.14                  // 返回 number
 * typeof false                 // 返回 boolean
 * typeof [1,2,3,4]             // 返回 object
 * typeof {name:'John', age:34} // 返回 object
 *
 * JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象。
 *
 * <h1>三、TypeScript 变量声明: </h1>
 * * 命名规则：包含字母、数字、_、$，不能以数字开头
 * * 声明变量并赋初始值：var [变量名] : [类型] = 值; 如：var str: string = "Hello";
 * * 声明变量并初始值，但不设置类型，该变量可以是任意类型：var [变量名] = 值; 如 var str = "Hello";
 * * 声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：var [变量名]; var str;
 *  类型断言（Type Assertion）：类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型，类型断言是一个编译时语法
 *   * 语法：<类型>值  或者  值 as 类型   例如：var str: number = <number> <any> 'hello';
 *
 * <h1>四、变量作用域</h1>
 *  * 全局作用域 − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
 *  * 类作用域 − 这个变量也可以称为 字段。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
 *  * 局部作用域 − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。
 *
 * <h1>五、TypeScript 运算符</h1>
 * 算术运算符、逻辑运算符、关系运算符、按位运算符、赋值运算符、三元/条件运算符、字符串运算符、类型运算符（typeof、instanceof）
 *
 * <h1>六、TypeScript 函数 </h1>
 *  * function 函数名(参数1:类型, 参数2?:类型): 返回值类型 {} // 参数2为可选参数类型
 *  * function 函数名(参数1:类型, 参数2:类型 = 默认值): 返回值类型 {} // 参数2有默认值
 *  * function 函数名(...参数:类型) {} // 可变参数
 *  * var 函数名 = function(参数:类型){} // 匿名函数
 *  * (function(){})() // 匿名函数自调用
 *  * var res = new Function (参数 ..., 函数体) // 内置构造函数定义函数
 *  * (参数) => 函数体 //Lambda 函数（箭头函数）
 *  - 重载是方法名字相同，而参数不同，返回类型可以相同也可以不同。
 *      * 定义函数重载需要定义重载签名和一个实现签名。
 *      * 重载签名定义函数的形参和返回类型，没有函数体。一个函数可以有多个重载签名(不可调用)
 *
 */
// 1. any
var a1 = 1;
a1 = "hello";
a1 = 1.1;
a1 = true;
a1 = [];
a1 = new Date();
var arr1 = [1, true, 'hello'];
arr1[1] = 100;
// 2. Null 和 Undefined
// null：在 JS 中 null 是一个只有一个值的特殊类型。表示一个空对象引用，用 typeof 检测 null 返回是 object。
// undefined：在 JS 中, undefined 是一个没有设置值的变量，typeof 一个没有值的变量会返回 undefined
// uull 和 undefined 是其他任何类型（包括 void）的子类型
console.log('typeof null' + typeof null); // object
console.log('typeof undefined:' + typeof undefined); // undefined
var uu2;
console.log('var uu2:' + typeof uu2); // undefined
// 在TypeScript中启用严格的空校验（--strictNullChecks）特性，就可以使得null 和 undefined 只能被赋值给 void 或本身对应的类型
// 启用 --strictNullChecks
var x1 = 1; // 编译正确
x1 = undefined; // 编译错误
x1 = null; // 编译错误
// 如果一个类型可能出现 null 或 undefined， 可以用 | 来支持多种类型
var x2;
x2 = 1; // 编译正确
x2 = undefined; // 编译正确
x2 = null; // 编译正确
// 3. never 类型：never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值
// never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环），示例代码如下：
var x3;
var y;
// x3 = 3; // 编译错误，数字类型不能转为 never 类型
// x3 = (()=>{ throw new Error('exception')})(); // 运行正确，never 类型可以赋值给 never类型
y = x3; // 运行正确，never 类型可以赋值给 数字类型
// 返回值为 never 的函数可以是抛出异常的情况
function error(message) {
    throw new Error(message);
}
// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop() {
    while (true) {
    }
}
// 4.枚举类型
// 4.1 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
// 例如，我们将上面的例子改成从 1开始编号：
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
console.log(Color); // { '1': 'Red', '2': 'Green', '3': 'Blue', Red: 1, Green: 2, Blue: 3 }
// 通过编号获取名字
console.log('Color[2]:' + Color[2] + ', Color.Green.valueOf():' + Color.Green.valueOf()); // Color[2]:Green, Color.Green.valueOf():2
// 4.2 A 的值是被计算出来的。注意注释部分，如果某个属性的值是计算出来的，那么它后面一位的成员必须要初始化值。
var a = 0;
var List;
(function (List) {
    List[List["A"] = 0] = "A";
    List[List["B"] = 2] = "B";
    List[List["C"] = 3] = "C";
})(List || (List = {}));
console.log(List); // { '0': 'A', '2': 'B', '3': 'C', A: 0, B: 2, C: 3 }
// 5. 布尔型
var isDone = false;
// 6. 数组
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// 7. 元组 Tuple：（数量和类型有限的数组———元组）
var t;
t = ['hello', true, 1, new Date()];
console.log(t); // [ 'hello', true, 1, 2023-06-30T06:52:18.538Z ]
console.log("作用域 ---------------------------------------------");
var global_num = 12; // 全局变量
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; // 实例变量
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; // 局部变量
    };
    Numbers.sval = 10; // 静态变量
    return Numbers;
}());
console.log("全局变量为: " + global_num); // 全局变量为: 12
console.log(Numbers.sval); // 10
var obj = new Numbers();
console.log("实例变量: " + obj.num_val); // 实例变量: 13
console.log("函数重载 ---------------------------------------------");
var suits = ["hearts", "spades", "clubs", "diamonds"];
// 定义实现签名
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
