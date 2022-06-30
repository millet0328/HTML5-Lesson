//获取url参数对象
Mock.Random.extend({
	courses: function (date) {
		var courses = ['音乐课', '舞蹈课', '地理课'];
		return this.pick(courses)
	}
});
// 生成课程列表数组
let { courses } = Mock.mock({
	'courses|10-200': [{ // 数据模板下，值为数组或者对象 rule 部分都规定了显示的元素数量
		'id|+1': 0, // 数据模板下，值为数值表示初始值或者底数（按招规则细分）
		courseType: '@courses', // 使用扩展
		courseName() { // 值可以是一个函数，用来细致模拟数据
			return this.courseType + ' ' + Mock.mock('@natural(1, 10)') + '班'
		},
		position: '@natural(1, 6)-@natural(100, 900)室', // 引用当前数据模板中的内容
		'studentNum|15-45': 15,
		classTime: '@datetime("M月d日起 每周三 HH:mm")',
		detail: {
			startClass: '@bool', // 布尔值，可以传入参数设置频率
			createData: '@datetime("yyyy-MM-dd HH:mm:ss A")', // 返回日期
			title: '@courses',
			image: '@dataImage("200x100")', // 模拟图片
			teacher: '@cname', // 中文名
			'partners|1-4': [
				'@cname' // 英文名
			],
			website: '@url',
			email: '@email',
		}
	}]
});
//获取课程信息
Mock.mock(RegExp('/course' + "[?&]([^?&=]+)=([^?&=]*)"), 'get', function (options) {
	var params = new URL(options.url, "http://localhost").searchParams;
	var id = params.get('id');
	if (!id) {
		return {
			status: false,
			msg: 'id参数为空！'
		}
	}
	var response = courses.find((item) => item.id == id);
	return response.detail;
});
//获取课程列表
Mock.mock(RegExp('/courses/list' + "([?&]([^?&=]+)=([^?&=]*))*"), 'get', function (options) {
	var params = new URL(options.url, "http://localhost").searchParams;
	var pageindex = params.get('pageindex') || 1;
	var pagesize = params.get('pagesize') || 10;
	// 计算下标
	var start = pagesize * (pageindex - 1);
	var end = pagesize * pageindex;
	// 切割数组
	var response = courses.slice(start, end);
	response.forEach((item) => delete item.detail);
	return response;
});
/* url:/login
 * email:邮箱账号
 * password:密码
 */
Mock.mock('/login', 'post', function (options) {
	var data = new URLSearchParams(options.body);
	var email = data.get('email');
	var password = data.get('password');
	if (email == localStorage.email && password == localStorage.password) {
		return {
			status: true,
			msg: '登陆成功！'
		}
	} else {
		return {
			status: false,
			msg: '登录失败！'
		}
	}
});
/* url:/register
 * email:邮箱账号
 * password:密码
 */
Mock.mock('/register', 'post', function (options) {
	var data = new URLSearchParams(options.body);
	var email = data.get('email');
	var password = data.get('password');
	localStorage.email = email;
	localStorage.password = password;
	return {
		status: true,
		msg: '注册成功！'
	}
});
