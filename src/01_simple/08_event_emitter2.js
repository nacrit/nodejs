/** 
 * EventEmitter对象方法介绍：
 * addListener(event, listener) 为指定事件添加一个监听器到监听器数组的尾部。
 * on(event, listener) 为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
 * once(event, listener) 为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
 * removeListener(event, listener) 移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。 第一个是事件名称，第二个是回调函数
 * removeAllListeners([event]) 移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
 * setMaxListeners(n) 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 此函数用于改变监听器的默认限制的数量。
 * listeners(event) 返回指定事件的监听器数组。
 * emit(event, [arg1], [arg2], [...]) 按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
 * 
 * 类方法：
 * listenerCount(emitter, event) 返回指定事件的监听器数量。
 * events.EventEmitter.listenerCount(emitter, eventName) //已废弃，不推荐
 * events.emitter.listenerCount(eventName) //推荐
*/

/**
 * 事件
1. newListener
    event - 字符串，事件名称
    listener - 处理事件函数
该事件在添加新监听器时被触发。

2. removeListener
    event - 字符串，事件名称
    listener - 处理事件函数
从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。
 */
// 实例通过 connection（连接）事件演示了 EventEmitter 类的应用。
import { log } from 'console';
import events from 'events';
// 创建事件
var ee = new events.EventEmitter();
// 处理函数1
var l1 = function l1() {
    log('监听器 l1 执行。');
}
// 处理函数2
var l2 = () => console.log('监听器 l2 执行。');

const eventName = 'connection';
// 绑定事件和处理函数
ee.addListener(eventName, l1)
ee.on(eventName, l2);
// 查看监听器数量
log('---------%s个监听器监听连接事件', ee.listenerCount(eventName))

// 触发事件
ee.emit(eventName);

// 移除l1函数
ee.removeListener(eventName, l1);
log('l1不再被监听');

// 触发事件
ee.emit(eventName);

// 查看监听器数量
log('---------%s个监听器监听连接事件', ee.listenerCount(eventName))

// 新增监听
ee.on(eventName, (arg) => log('监听器 l3 执行 arg:%s', arg));

// 触发两次事件，触发事件类似广播
ee.emit(eventName);
ee.emit(eventName, "hello world");

// 结束程序....
log('程序执行完毕!!!');

/**
 * error 事件
 * EventEmitter 定义了一个特殊的事件 error，它包含了错误的语义，我们在遇到 异常的时候通常会触发 error 事件。
 * 当 error 被触发时，EventEmitter 规定如果没有响 应的监听器，Node.js 会把它当作异常，退出程序并输出错误信息。
 * 我们一般要为会触发 error 事件的对象设置监听器，避免遇到错误后整个程序崩溃。例如：
 */

ee.emit('error');


/**
 * 继承 EventEmitter
 * 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
 * 为什么要这样做呢？原因有两点：
 * 首先，具有某个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法。
 * 其次 JavaScript 的对象机制是基于原型的，支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。
 */