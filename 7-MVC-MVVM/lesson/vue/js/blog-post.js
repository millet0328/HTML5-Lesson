Vue.component("blog-post", {
	props: ["photo", "title", "summary"],
	template: `
	<div class="blog">
		<button @click="$emit('large-text')" type="button">+</button>
		<div class="photo">
			<img :src="photo" width="80" height="80"/>
		</div>
		<div class="info">
			<h4>{{title}}</h4>
			<div class="summary" v-html="summary"></div>
		</div>
	</div>
	`
})
