### 简单实现Node的Events模块
```javascript
function EventEmitter () {
	// 实现这里的代码
}

var eventEmitter=new EventEmitter();

eventEmitter.on('say',function(name){
    console.log('Hello',name);
})
eventEmitter.emit('say','Jony yu');

```