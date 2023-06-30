/**
 *  一、函数定义形式：
 */
// 1.
function fun00(x) {
    console.log('fun00, 2x=' + (x * 2))
}

fun00(2)
// 2.new Function(arg, {})
const fun01 = new Function('x', 'console.log(\'fun01, 2x=\' + (x * 2))');
fun01(4);

// 3. 实际创建了一个匿名函数，赋值给了变量fun02
const fun02 = function (x) {
    console.log('fun02, 2x=' + (x * 2))
}
fun02(6);
// 2.1 简写
let fun021 = x => console.log('fun021 简写, 2x=' + (x * 2));
fun021(6);
console.log("------------------------------------------------------------------------------------------");

/**
 * 二、js中匿名函数的N种写法:
 */
// 常见匿名函数：
// 1.无参
(function () {
    console.log("fun1")
})();

// 1.1 简写形式
(() => {
    console.log('fun1.1 简写')
})();

// 2.带参数
(function (args) {
    console.log("fun2 args=" + args)
})('hello');
// 2.1 简写
(arg => {
    console.log('fun2.1 简写' + arg)
})(2.1);

// 3.链式调用
(function (args) {
    console.log("fun3 args=" + args + ", funLen=" + arguments.length)
    return arguments.callee; // 返回当前函数饮用
})('arg1')('arg2');
// 3.1 简写，这里会一直递归调用，具体原因未知
// (args => {
//     console.log("fun3.1 args=" + args + ", funLen=" + arguments.length)
//     return arguments.callee; // 返回当前函数饮用
// })('arg1')('arg2');

// 不常见的：
// 4.
~(function () {
    console.log("fun4")
})();

// 5.
void (function () {
    console.log('fun5')
})();

// 6.
+(function () {
    console.log('fun6')
})();

// 7.
-(function () {
    console.log('fun7')
})();

~function () {
    console.log("fun8")
}();

!function () {
    console.log('fun9')
}();

(function () {
    console.log('fun10')
}());
console.log("------------------------------------------------------------------------------------------");

/**
 * 四、币包
 * 闭包的含义：闭包说白了就是函数的嵌套，内层的函数可以使用外层函数的所有变量，即使外层函数已经执行完毕（这点涉及JavaScript作用域链）。
 * 《JavaScript权威指南》对闭包定义:函数对象可以通过作用域链相互关联起来，函数体内部变量可以保存在函数作用域内，这就是闭包
 * 优点：
 *   1、保护函数内的变量安全
 *   2、在内存中维持一个变量(用的太多就变成了缺点，占内存) ；
 *   3、逻辑连续，当闭包作为另一个函数调用的参数时，避免你脱离当前逻辑而单独编写额外逻辑。
 *   4、方便调用上下文的局部变量。
 *   5、加强封装性，可以达到对变量的保护作用。
 * 缺点：
 *   1、常驻内存，会增大内存使用量，使用不当很容易造成内存泄露。
 *   2、还有有一个非常严重的问题，那就是内存浪费问题，这个内存浪费不仅仅因为它常驻内存，更重要的是，对闭包的使用不当会造成无效内存的产生。
 * 特性：
 *   1、函数嵌套函数
 *   2、内部函数可以访问外部函数的变量
 *   3、参数和变量不会被回收。
 */
// 1. fun11执行完后str并不会被释放，3秒后，内部匿名函数执行完才释放str
function fun11() {
    const str = 'hello ...';
    setTimeout(() => console.log(`fun11 inner str=${str}`), 3000);
    console.log('fun11 end ..')
}

fun11();

// 2. 可以构建命名空间，以减少全局变量的使用
var onEvent = {};
(function () {
    const addEvent = () => console.log('fun12 addEvent');
    const removeEvent = () => console.log('fun12 removeEvent');
    onEvent.addEvent = addEvent;
    onEvent.removeEvent = removeEvent;
})();
onEvent.addEvent();
onEvent.removeEvent();

// 3. 初始化变量
var v1 = (function (x, y) {
    return x + y;
})(2, 3);
console.log('fun13 v1=' + v1)

// 4. 内部变量
var fun14 = null;
(function () {
    var cnt = 1;

    function invokeCnt() {
        cnt += 1;
        console.log("fun14 inner cnt=" + cnt)
    }

    fun14 = invokeCnt;
})();
fun14();
fun14();
fun14();

// 5. 闭包允许内层函数引用父函数中的变量，但是该变量是最终值
const fun15 = [];
for (var i = 0; i < 4; i++) { // 这里使用var定义变量 匿名函数显示的都是最终值，使用let定义的变量显示的是变量值
    fun15[i] = () => console.log('fun15 inner i=' + i);
    // 解决1：改成let变量
    // 解决2
    // const ii = i;
    // fun15[i] = () => console.log('fun15 inner i=' + ii);
    // 解决3
    // fun15[i] = (fi) =>  console.log('fun15 inner fi=' + fi);
}
for (let i = 0; i < 4; i++) {
    fun15[i]();
    // fun15[i](i);
}



