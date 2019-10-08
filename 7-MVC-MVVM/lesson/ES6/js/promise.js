// 自己手写一个Promise
// ES5实现方法
function Promise(fn) {
	// 状态
	this.status = "pedding";
	// 状态有没有改变
	this.isDone = false;
	// 成功的返回值
	this.value = '';
	// 失败的返回值
	this.error = '';

	let resolve = (data) => {
		if (this.isDone) { return };
		this.status = "fulfilled";
		this.isDone = true;
		this.value = data;
	}

	let reject = (error) => {
		if (this.isDone) { return };
		this.status = "rejected";
		this.isDone = true;
		this.error = error;
	}
	fn(resolve, reject);
}
Promise.prototype.then = function(success, failed) {
	if (this.status == 'fulfilled') {
		success(this.value);
	}
	if (this.status == 'rejected') {
		failed(this.error);
	}
};
// ES6实现方法
class Promise {
	constructor(fn) {
		// 状态
		this.status = "pedding";
		// 状态有没有改变
		this.isDone = false;
		// 成功的返回值
		this.value = '';
		// 失败的返回值
		this.error = '';
		let resolve = (data) => {
			if (this.isDone) { return };
			this.status = "fulfilled";
			this.isDone = true;
			this.value = data;
		}

		let reject = (error) => {
			if (this.isDone) { return };
			this.status = "rejected";
			this.isDone = true;
			this.error = error;
		}
		fn(resolve, reject);
	}

	then(success, failed) {
		if (this.status == 'fulfilled') {
			success(this.value);
		}
		if (this.status == 'rejected') {
			failed(this.error);
		}
	}
}
