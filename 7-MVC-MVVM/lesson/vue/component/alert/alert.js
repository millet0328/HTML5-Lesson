Vue.component('alert', {
	props: ['show','content'],
	template: `
	<div class="modal-shadow" v-show="show">
		<div class="modal">
			<div class="title"><slot name="title"></slot></div>
			<div class="body">
				<slot name="content"></slot>
			</div>
			<div class="action">
				<button @click="$emit('close')" type="button">确定</button>
			</div>
		</div>
	</div>`
});

