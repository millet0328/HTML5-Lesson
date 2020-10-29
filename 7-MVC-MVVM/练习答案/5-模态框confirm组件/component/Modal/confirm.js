Vue.component('confirm', {
	props: ['title', 'show'],
	template: `
	<div class="modal-shadow" v-show="show">
		<div class="modal">
			<div class="title">{{title}}</div>
			<div class="body">
				<slot></slot>	
			</div>
			<div class="action">
				<button @click="_handleCancel" type="button">取消</button>
				<button @click="_handleConfirm" type="button">确定</button>
			</div>
		</div>
	</div>`,
	methods: {
		_handleCancel: function() {
			this.$emit('update:show', false);
			this.$emit('cancel');
		},
		_handleConfirm: function() {
			this.$emit('confirm');
		}
	}
});
