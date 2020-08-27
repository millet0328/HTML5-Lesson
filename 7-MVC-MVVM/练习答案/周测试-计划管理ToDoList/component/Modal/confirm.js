Vue.component('confirm', {
	props: ['show'],
	template: `
	<div class="modal-shadow" v-show="show">
		<div class="modal">
			<div class="title">消息通知</div>
			<div class="body">
				<slot></slot>	
			</div>
			<div class="action">
				<button @click="$emit('cancel')" type="button">取消</button>
				<button @click="$emit('confirm')" type="button">确定</button>
			</div>
		</div>
	</div>`
});
