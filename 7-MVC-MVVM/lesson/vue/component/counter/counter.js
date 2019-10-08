Vue.component('counter', {
	data: function() {
		return {
			count: 1
		}
	},
	template: `
				<div class="counter-box">
					<button class="btn left" :disabled="count==1" @click="reduceHandle" type="button">-</button>
					<input class="num" type="text" v-model="count">
					<button class="btn right" @click="count++" type="button">+</button>
				</div>`,
	methods: {
		reduceHandle: function() {
			if (this.count > 1) {
				this.count--;
			}
		}
	}
});
