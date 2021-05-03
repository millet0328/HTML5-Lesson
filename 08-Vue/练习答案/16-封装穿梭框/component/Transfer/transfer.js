Vue.component('transfer', {
	// 组件内部数据
	data: function() {
		// 深拷贝属性data
		var initData = JSON.parse(JSON.stringify(this.data))
		var left = [];
		var right = [];
		if (!this.value.length) {
			left = initData;
		}
		this.value.forEach(function(item) {
			initData.forEach(function(element) {
				if (element.key == item) {
					right.push(element);
				} else {
					left.push(element);
				}
			});
		});
		return {
			left: left,
			right: right,
		}
	},
	// 组件外部数据
	props: {
		data: {
			type: Array,
			default: [],
		},
		value: {
			type: Array,
		}
	},
	computed: {
		leftCheckAll: {
			set: function(val) {
				this.left.forEach(function(item) {
					item.isChecked = val;
				});
			},
			get: function() {
				// 已选中的复选框
				if (!this.left.length) {
					return false;
				}
				return this.left.every(function(item) {
					return item.isChecked;
				});
			}
		},
		rightCheckAll: {
			set: function(val) {
				this.right.forEach(function(item) {
					item.isChecked = val;
				});
			},
			get: function() {
				// 已选中的复选框
				if (!this.right.length) {
					return false;
				}
				return this.right.every(function(item) {
					return item.isChecked;
				});
			}
		},

	},
	methods: {
		handleToRight: function() {
			var self = this;
			// 筛选选中的元素
			this.left.forEach(function(item, index) {
				if (item.isChecked) {
					// 深拷贝
					var copy = JSON.parse(JSON.stringify(item));
					copy.isChecked = false;
					self.right.push(copy);
				}
			});
			this.right.sort(function(itemA, itemB) {
				return itemA.key - itemB.key;
			});
			// 筛选出左侧数据
			this.left = this.left.filter(function(item, index) {
				return !item.isChecked;
			});
			// emit 事件
			this.sendData();
		},
		handleToLeft: function() {
			var self = this;
			// 筛选选中的元素
			this.right.forEach(function(item, index) {
				if (item.isChecked) {
					// 深拷贝
					var copy = JSON.parse(JSON.stringify(item));
					copy.isChecked = false;
					self.left.push(copy);
				}
			});
			this.left.sort(function(itemA, itemB) {
				return itemA.key - itemB.key;
			});
			// 筛选出右侧数据
			this.right = this.right.filter(function(item, index) {
				return !item.isChecked;
			});
			// emit 事件
			this.sendData();
		},
		sendData: function() {
			// 整理右侧的key数组
			var arr = this.right.map(function(item, index) {
				return item.key;
			});
			this.$emit('input', arr);
		},
	},
	template: `
	<div class="transfer-wrap">
		<div class="list-box">
			<div class="header">
				<label>
					<input v-model="leftCheckAll" type="checkbox" />
					<span>列表一</span>
				</label>
			</div>
			<ul class="list">
				<li v-for="(item,index) in left" :key="item.key" class="item">
					<label>
						<input v-model="item.isChecked" type="checkbox" />
						<span>{{item.label}}</span>
					</label>
				</li>
			</ul>
		</div>
		<div class="btn-box">
			<button type="button" @click="handleToLeft">&lt;</button>
			<button type="button" @click="handleToRight">&gt;</button>
		</div>
		<div class="list-box">
			<div class="header">
				<label>
					<input v-model="rightCheckAll" type="checkbox" />
					<span>列表二</span>
				</label>
			</div>
			<ul class="list">
				<li v-for="(item,index) in right" :key="item.key" class="item">
					<label>
						<input v-model="item.isChecked" type="checkbox" />
						<span>{{item.label}}</span>
					</label>
				</li>
			</ul>
		</div>
	</div>
	`
});
