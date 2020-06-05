Vue.component('counter', {
	props: ['num'],
	template: `
	<div class="counter-box">
		<button class="btn left" :disabled="num==1" @click="handleDecreass" type="button">-</button>
		<input class="num" type="text" v-model="num">
		<button class="btn right" @click="handleIncreass" type="button">+</button>
	</div>`,
	methods: {
		handleIncreass() {
			this.$emit('update:num', this.num + 1)
		},
		handleDecreass() {
			this.$emit('update:num', this.num - 1)
		}
	}
});
