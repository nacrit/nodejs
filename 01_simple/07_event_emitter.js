// nodejs 所有异步I/O操作在完成时都发送一个事件到事件队列
// Node.js 里面的许多对象都会分发事件：一个 net.Server 对象会在每次有新连接时触发一个事件，
//  一个 fs.readStream 对象会在文件被打开的时候触发一个事件。 
// 所有这些产生事件的对象都是 events.EventEmitter 的实例。
// EventEmitter 的核心就是事件触发与事件监听器功能的封装。
import events from 'events';
import { setTimeout } from 'timers';

var eventEmitter = new events.EventEmitter();
eventEmitter.on('someEvent', () => console.log('some_event 事件触发'));

console.log('start ...')
// 定时触发任务
setTimeout(() => eventEmitter.emit('someEvent'), 5000);
console.log('end ...')

// 带参数的事件
eventEmitter.on('someEvent2', (arg1, arg2, arg3) => console.log('someEvent2', arg1, arg2, arg3));
eventEmitter.emit('someEvent2', '参数1', 111, true)


