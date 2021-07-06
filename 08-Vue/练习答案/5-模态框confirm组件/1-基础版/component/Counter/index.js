Vue.component('counter', {
	// data属性：组件内部的数据

	// props属性：组件外部的数据
	props: {
		count: {
			type: Number,
			default: 1,
			required: true,
		},
		min: {
			type: Number,
			default: 1,
		},
		max: {
			type: Number,
			default: 99999,
		},
		step: {
			type: Number,
			default: 1,
		},
	},
	methods: {
		handleDecrease: function() {
			var next = this.count - this.step;
			if (next >= this.min) {
				this.$emit('update:count', next);
			} else {
				this.$emit('update:count', this.min);
			}
		},
		handleIncrease: function() {
			var next = this.count + this.step;
			if (next <= this.max) {
				this.$emit('update:count', next)
			} else {
				this.$emit('update:count', this.max)
			}
		}
	},
	template: `
	<div class="counter-box">
		<button @click="handleDecrease" :disabled="count===min" class="down" type="button">-</button>
		<span class="num">{{count}}</span>
		<button @click="handleIncrease" :disabled="count===max" class="up" type="button">+</button>
	</div>
	`
});
