Vue.component('item', {
	props: ['data'],
	methods: {
		_handleChange: function() {
			this.$emit('check', !this.data.isCheck);
		},
	},
	template: `
	<div class="item">
		<div class="checkbox" :class="{checked:data.isCheck}" @click="_handleChange"></div>
		<div class="text">{{data.text}}</div>
		<div class="timestamp">{{data.timestamp}}</div>
		<button v-if="data.status=='UNFINISH'" @click="$emit('revoke')" class="btn action" type="button">取消</button>
		<button v-if="data.status=='FINISHED'" @click="$emit('remove')" class="btn action" type="button">删除</button>
		<button v-if="data.status=='CANCELED'" @click="$emit('resume')" class="btn action" type="button">恢复</button>
	</div>`
});
