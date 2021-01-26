Vue.component('counter', {
	// props：外部数据
	props: ['value', 'min', 'max', 'step'],
	methods: {
		handleIncrease: function() {
			if (this.value >= this.max) {
				return;
			}
			this.$emit('up');
		},
		handleDecrease: function() {
			if (this.value <= this.min) {
				return;
			}
			this.$emit('down');
		}
	},
	template: `
			<div class="counter">
				<button @click="handleDecrease" class="decrease" type="button">-</button>
				<span class="number">{{value}}</span>
				<button @click="handleIncrease" class="increase" type="button">+</button>
			</div>`
});
