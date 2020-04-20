// 自己手写一个Promise
// ES5实现方法
function Promise(fn) {
	// 状态
	this.status = "pedding";
	// 状态有没有改变
	this.freeze = false;
	// 成功的返回值
	this.value = '';
	// 失败的返回值
	this.error = '';

	let resolve = (data) => {
		if (this.freeze) { return };
		this.status = "fulfilled";
		this.freeze = true;
		this.value = data;
	}

	let reject = (error) => {
		if (this.freeze) { return };
		this.status = "rejected";
		this.freeze = true;
		this.error = error;
	}
	fn(resolve, reject);
}
Promise.prototype.then = function(success, failed) {
	if (success && this.status == 'fulfilled') {
		success(this.value);
	}
	if (failed && this.status == 'rejected') {
		failed(this.error);
	}
	return this;
};
Promise.prototype.catch = function(failed) {
	if (failed && this.status == 'rejected') {
		failed(this.error);
	}
	return this;
};
// ES6实现方法
class Promise {
	constructor(fn) {
		// 状态
		this.status = "pedding";
		// 是否凝固状态
		this.freeze = false;
		// 成功的返回值
		this.value = '';
		// 失败的返回值
		this.error = '';
		let resolve = (data) => {
			if (this.freeze) { return };
			this.status = "fulfilled";
			this.freeze = true;
			this.value = data;
		}

		let reject = (error) => {
			if (this.freeze) { return };
			this.status = "rejected";
			this.freeze = true;
			this.error = error;
		}
		fn(resolve, reject);
	}

	then(success, failed) {
		if (success && this.status == 'fulfilled') {
			success(this.value);
		}
		if (failed && this.status == 'rejected') {
			failed(this.error);
		}
		return this;
	}

	catch (failed) {
		if (failed && this.status == 'rejected') {
			failed(this.error);
		}
		return this;
	}
}
