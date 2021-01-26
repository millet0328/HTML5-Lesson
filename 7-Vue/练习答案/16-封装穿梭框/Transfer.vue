<template>
	<div class="transfer-wrap">
		<div class="left-box list-box">
			<div class="list-header"><input type="checkbox" v-model="checkLeft" /><span>列表一</span></div>
			<ul class="list-con">
				<li class="item" v-for="(item, index) in left" :key="index" :class="{ isCant: item.disabled }">
					<input type="checkbox" v-model="item.checked" :disabled="item.disabled" /><span>{{ item.name }}</span>
				</li>
			</ul>
		</div>
		<div class="btn-box">
			<button type="button" class="toLeft-btn" @click="toLeft" :disabled="right.length == 0" :class="{ leftCant: right.length == 0 }">&lt;</button>
			<button type="button" class="toRight-btn" @click="toRight" :disabled="left.length == 0" :class="{ rightCant: left.length == 0 }">&gt;</button>
		</div>
		<div class="right-box list-box">
			<div class="list-header"><input type="checkbox" v-model="checkRight" /><span>列表二</span></div>
			<ul class="list-con">
				<li class="item" v-for="(item, index) in right" :key="index" :class="{ isCant: item.disabled }">
					<input type="checkbox" v-model="item.checked" :checked="item.disabled" :disabled="item.disabled" /><span>{{ item.name }}</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: "Transfer",
		props: ["left", "right"],
		methods: {
			/* ------------------放到右边------------------ */
			toRight() {
				/* 设置中间数组 */
				let arrLeft = [],
					arrRight = [];
				/* 遍历判断 */
				this.left.forEach((item, index) => {
					if (item.checked && !item.disabled) {
						arrRight.push(item);
						item.checked = false; /* 取消选中 */
					} else {
						arrLeft.push(item);
					}
				});
				/* 合并新旧数组 */
				arrRight = arrRight.concat(this.right);
				/* sync传递中间数组 */
				this.$emit("update:left", arrLeft);
				this.$emit("update:right", arrRight);
			},
			/* ------------------放到左边------------------ */
			toLeft() {
				/* 设置中间数组 */
				let arrLeft = [],
					arrRight = [];
				/* 遍历判断 */
				this.right.forEach((item, index) => {
					if (item.checked && !item.disabled) {
						arrLeft.push(item);
						item.checked = false; /* 取消选中 */
					} else {
						arrRight.push(item);
					}
				});
				/* 合并新旧数组 */
				arrLeft = arrLeft.concat(this.left);
				/* sync传递中间数组 */
				this.$emit("update:left", arrLeft);
				this.$emit("update:right", arrRight);
			},
		},
		computed: {
			/* -------------------左侧全选---------------- */
			checkLeft: {
				set(newValue) {
					this.left.forEach((item) => {
						/* 选中没禁用的*/
						if (!item.disabled) {
							item.checked = newValue;
						}
					});
				},
				get() {
					return this.left.every((item) => item.checked);
				},
			},
			/* -------------------右侧全选---------------- */
			checkRight: {
				set(newValue) {
					this.right.forEach((item) => {
						/* 选中没禁用的*/
						if (!item.disabled) {
							item.checked = newValue;
						}
					});
				},
				get() {
					return this.right.every((item) => item.checked);
				},
			},
		},
	};
</script>
<style lang="less" scoped>
	.transfer-wrap {
		display: flex;
		align-items: center;
	}

	/* 列表 */
	.list-box {
		border: 1px solid #ebeef5;
		border-radius: 4px;
		overflow: hidden;
		background: #fff;
		display: inline-block;
		width: 200px;
		max-height: 100%;
		box-sizing: border-box;
		font-size: 14px;
		font-weight: 400;
		cursor: pointer;

		.list-header {
			height: 40px;
			line-height: 40px;
			background: #f5f7fa;
			margin: 0;
			padding-left: 15px;
			border-bottom: 1px solid #ebeef5;
			box-sizing: border-box;
			color: #000;
			display: flex;
			align-items: center;
		}

		.list-con {
			list-style: none;
			margin: 0;
			padding: 6px 0;
			height: 246px;
			overflow: auto;

			.item {
				margin-right: 30px;
				height: 30px;
				line-height: 30px;
				padding-left: 15px;

				/* 按钮不能点击样式 */
				&.isCant {
					color: #c0c4cc;
					cursor: not-allowed;
				}
			}
		}
	}

	/* 按钮组 */
	.btn-box {
		margin: 30px;

		button {
			color: #fff;
			background-color: rgba(64, 158, 255, 1);
			border-color: #409eff;
			cursor: pointer;
			text-align: center;
			outline: none;
			padding: 12px 20px;
			font-size: 14px;
			border-radius: 4px;
			border: 1px solid #dcdfe6;

			&:hover {
				background-color: rgba(64, 158, 255, 0.9);
			}
		}

		.toRight-btn {
			margin-left: 10px;
		}

		.toLeft-btn.leftCant,
		.toRight-btn.rightCant {
			cursor: not-allowed;
			background-color: rgba(64, 158, 255, 0.6);
		}

		.toLeft-btn.leftCant:hover,
		.toRight-btn.rightCant:hover {
			background-color: rgba(64, 158, 255, 0.6);
		}
	}
</style>
