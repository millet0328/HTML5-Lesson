<template>
	<div class="border-box">
		<div class="star-box">
			<i v-for="(item,index) in comments" class="star" @mouseenter="handleEnter(index)" @mouseleave="handleLeave(index)"
			 @click="handleClick(index)" :class="{active:num>=index}"></i>
		</div>
		<p>当前评价:{{commentText}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				num: -1, //移入移出
				checked: -1, //选中
				comments: ["非常差，回去再练练", "真的是差，都不忍心说你了", "一般，还过得去吧", "很好，是我想要的东西", "太完美了，此物只得天上有，人间哪得几回闻!"]
			}
		},
		computed: {
			commentText() {
				return this.comments[this.num];
			}
		},
		methods: {
			handleClick(i) {
				this.checked = i;
				this.num = i;
			},
			handleEnter(i) {
				if (this.checked < i) {
					this.num = i;
				}
			},
			handleLeave(i) {
				if (this.checked < i) {
					this.num = this.checked;
				}
			}
		}
	}
</script>

<style lang="less">
	.border-box {
		border: 1px solid #CCCCCC;
		padding: 60px;
	}

	.star-box {
		position: relative;

		.full-star {
			position: absolute;
			left: 0;
			top: 0;
			width: 22px;
			height: 22px;
			background: url(../assets/img/stars.png);
			background-position: 0 -25px;
			z-index: 5;
		}

		i {
			position: relative;
			display: inline-block;
			width: 24px;
			height: 22px;
			background: url(../assets/img/stars.png);
			background-position: 0 0;
			z-index: 2;

			&.active {
				background-position: 0 -25px;
			}
		}
	}
</style>
