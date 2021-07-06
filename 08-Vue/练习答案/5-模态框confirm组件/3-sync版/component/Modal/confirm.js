Vue.component('confirm', {
	props: ['show', 'title', 'message'],
	template: `
	<div class="modal-shadow" v-show="show">
		<div class="modal">
			<div class="title">{{title}}</div>
			<div class="body">
				{{message}}
				<slot></slot>
			</div>
			<div class="action">
				<button @click="_handleCancel" type="button">取消</button>
				<button @click="_handleConfirm" type="button">确定</button>
			</div>
		</div>
	</div>`,
	methods: {
		_handleCancel: function () {
			this.$emit('cancel');
			this.$emit('update:show', false);
		},
		_handleConfirm: function () {
			this.$emit('confirm');
			this.$emit('update:show', false);
		}
	}
});
