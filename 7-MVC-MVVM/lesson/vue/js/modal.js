//注册组件
Vue.component('confirm-modal', {
	props: ['open','title','content'],
	template: `
	<div class="modal fade" :class="{in:open}">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" @click="$emit('close')" class="close"><span>&times;</span></button>
					<h4 class="modal-title">{{title}}</h4>
				</div>
				<div class="modal-body">
					<slot></slot>
				</div>
			  <div class="modal-footer">
				<button type="button" @click="$emit('close')" class="btn btn-default">取消</button>
				<button type="button" @click="$emit('confirm')" class="btn btn-primary">确定</button>
			  </div>
			</div>
		</div>
	</div>`
});