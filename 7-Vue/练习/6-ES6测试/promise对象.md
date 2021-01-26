### 输出以下序列, 要求每隔两秒输出一行数字 ( 使用Promise async分别实现 )

2 4 6 8 ... 100

### Promise
```javascript
function Promise2(fun){
// 实现这里的代码, 不能使用原声Promise, 要求自己实现Promise
}

function timeout(ms) {
  return new Promise2((resolve) => {
    setTimeout(resolve, ms, 'done');
  });
}

const step = async () => {
	await timeout(3000);
	console.log('我3秒后被输出');
};

step();
```

