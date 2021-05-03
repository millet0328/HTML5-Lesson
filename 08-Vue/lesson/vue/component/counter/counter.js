// 全局注册组件
Vue.component('counter', {
	// 组件内部数据
	// 组件外部数据
	props: {
		min: {
			type: Number,
			default: 1,
		},
		max: Number,
		step: {
			type: Number,
			default: 1,
		},
		value: {
			type: Number,
			default: 1,
		}
	},
	methods: {
		handleDown: function() {
			var next = this.value - this.step;
			if (next <= this.min) {
				next = this.min;
			}
			this.$emit('update:value', next);
		},
		handleUp: function() {
			var next = this.value + this.step;
			if (next >= this.max) {
				next = this.max;
			}
			this.$emit('update:value', next);
		}
	},
	// 组件HTML
	template: `
	<div class="counter-box">
		<button @click="handleDown" :disabled="value == min" class="down" type="button">-</button>
		<span class="num">{{value}}</span>
		<button @click="handleUp" class="up" type="button">+</button>
	</div>
	`
});
