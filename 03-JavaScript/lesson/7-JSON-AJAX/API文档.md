# API接口文档（mock.js）
## 1. 注册账户
#### url："/register"
#### method：POST
### 参数：
|字段		|类型	|必填	|描述	|
|:--:		|:--:	|:--:	|:--:	|
|email		|string	|是		|邮箱	|
|password	|string	|是		|密码	|

### 返回响应：
|字段	|类型	|描述		|
|:--:	|:--:	|:--:		|
|status	|布尔值	|注册结果	|
|msg	|字符串	|提示信息	|

## 2. 登录账户
#### url："/login"
#### method：POST
### 参数：
|字段		|类型	|必填	|描述	|
|:--:		|:--:	|:--:	|:--:	|
|email		|string	|是		|邮箱	|
|password	|string	|是		|密码	|

### 返回响应：
|字段	|类型	|描述		|
|:--:	|:--:	|:--:		|
|status	|布尔值	|注册结果	|
|msg	|字符串	|提示信息	|

## 3. 获取课程列表
#### url："/courses/list"
#### method：GET
### 参数：
|字段		|类型	|必填	|默认值	|描述				|
|:--:		|:--:	|:--:	|:--:	|:--:				|
|pageindex	|string	|是		|1		|第几页				|
|pagesize	|string	|是		|10		|一页显示多少课程		|

## 4. 获取课程详情
#### url："/course"
#### method：GET
### 参数：
|字段	|类型	|必填	|描述	|
|:--:	|:--:	|:--:	|:--:	|
|id		|string	|是		|课程id	|