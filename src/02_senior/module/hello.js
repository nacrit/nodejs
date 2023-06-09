// 通过 exports 对象把 world 作为模块的访问接口
exports.world = function () {
    console.log("Hello World");
}



/*
有时候我们只是想把一个对象封装到模块中，格式如下：
module.exports = function() {
  // ...
} 
*/
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    }
    this.sayHello = function() {
        console.log("hello ..." + name)
    }
}

module.exports = Hello;