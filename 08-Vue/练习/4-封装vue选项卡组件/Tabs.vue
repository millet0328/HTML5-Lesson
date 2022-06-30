<template>
	<div class="tab">
		<ul class="tab-title">
			<li v-for="(item,index) in data" :key="index" @click="handleSwitch(index)" :class="{active:current===index}">
				{{item.title}}
			</li>
		</ul>
		<ul class="tab-content">
			<li v-for="(item,index) in data" :key="index" v-show="current===index">
				<div v-html="item.content">内容</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "Tabs",
		model: {
			prop: 'active',
			event: 'switch'
		},
		props: {
			data: {
				type: Array,
				required: true,
			},
			active: {
				type: Number,
				default: 0,
			},
		},
		data() {
			return {
				current: this.active
			}
		},
		methods: {
			handleSwitch(i) {
				this.current = i;
				this.$emit('switch', i);
			}
		}
	}
</script>

<style lang="less">
	.tab {
		width: 600px;
		font-family: "微软雅黑";
		color: #717181;
	}

	.tab-title,
	.tab-content {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
	}

	.tab-content {
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);

		li {
			flex: 1;
			min-height: 300px;
			background-color: #FFF;
			padding: 10px;
			font-size: 12px;
		}
	}

	.tab-title li {
		text-align: center;
		padding: 16px 4px;
		background-color: #33344a;
		cursor: pointer;
		font-size: 14px;
		flex: 1;

		&:hover {
			color: #e74c3c;
		}

		&.active {
			background-color: #e74c3c;
			color: white;
		}
	}
</style>
