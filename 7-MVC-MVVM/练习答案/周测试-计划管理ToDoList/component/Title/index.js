Vue.component('list-title', {
	props: ['text'],
	template: `
	<div class="item-title">
		<b class="name">{{text}}</b>
		<span class="iconfont icon-wenjianjia file-icon"></span>
	</div>`
});
