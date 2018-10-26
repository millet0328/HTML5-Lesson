Vue.component('tab', {
	data: function() {
		return {
			currentTabIndex: 0,
			tabs: [{
				title: '男装',
				content: '衬衣、西装'
			}, {
				title: '女装',
				content: '裙子、外套'
			}, {
				title: '美妆',
				content: '化妆品、洗漱用品'
			}]
		}
	},
	template: `
	<div class="tab">
		<ul class="title">
			<li @click="currentTabIndex=index" :class="{active:currentTabIndex==index}" v-for="(item,index) in tabs">{{item.title}}</li>
		</ul>
		<ul class="content">
			<li v-show="currentTabIndex==index" v-for="(item,index) in tabs">{{item.content}}</li>
		</ul>
	</div>`
});