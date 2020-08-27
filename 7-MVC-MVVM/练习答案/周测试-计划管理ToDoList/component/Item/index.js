Vue.component('item', {
	model: {
		prop: 'checked',
		event: 'change'
	},
	props: ['checked', 'data'],
	methods: {
		handleChange: function() {
			this.$emit('check', !this.data.isCheck);
		}
	},
	template: `
	<div class="item">
		<div class="checkbox"></div>
		<div class="text">{{data.text}}</div>
		<div class="timestamp">{{data.timestamp}}</div>
		<button v-if="data.status==1" class="btn action" type="button">取消</button>
		<button v-if="data.status==2" class="btn action" type="button">删除</button>
		<button v-if="data.status==3" class="btn action" type="button">恢复</button>
	</div>`
});
