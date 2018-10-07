$(function(){
	var Wparent = window.parent.document,
		tipBg = "<div class='tip_bg'></div>",
		tipBox = "<div class='tip_box'></div>",
		delTxt = "<p class='del_info'></p><div class='tip_btnbox'><button class='btn btn_dsure del_sure'>确认</button><button class='btn btn_cancel tip_close'>取消</button></div>";
	//tipwindow（仅适用iframe）
	$.fn.tipWindow=function(options){
		$.fn.other.defaults={
			/*---delete---*/
			deleteTxt:"确认删除该条数据？",
			dataId:""
		};
		return this.each(function(){
			var obj = $.extend({},$.fn.other.defaults,options);
			if(obj.method == "delete"){
				$(obj.Class).off(obj.even);
				$(obj.Class).on(obj.even,function(){
					var dataId;
					if($(this).parent()[0].tagName == "TD"){
						dataId = $(this).parents("tr").prop("id");
					}else{
						dataId = obj.dataId;
					}
					Tipclose();
					$("body",Wparent).append(tipBg);
					$("body",Wparent).append(tipBox);
					$(".tip_box",Wparent).append(delTxt);
					$(".del_info",Wparent).text(obj.deleteTxt);
					DelTipWidth(obj.Twidth,obj.Theight);
					$(".del_sure",Wparent).click(function(){
						$.ajax({
						   type:"post",
						   url:obj.delUrl,
						   data:{"id":dataId},
						   success:function(msg){
								Tipclose();
								var delSuccess = "<p class='del_info'>"+msg+"</p><div class='tip_btnbox'><button class='btn btn_dsure del_close'>确认</button></div>";
								$("body",Wparent).append(tipBg);
								$("body",Wparent).append(tipBox);
								$(".tip_box",Wparent).append(delSuccess);
								DelTipWidth(obj.Twidth,obj.Theight);
								$(".del_close",Wparent).click(function(){
									Tipclose();
									$("iframe[name='cont_box']",Wparent).prop("src",$("iframe[name='cont_box']",Wparent).prop("src"));
								});
						   },
						   error:function(errormsg){
						   		Tipclose();
						   		var delFail = "<p class='del_info'>"+errormsg+"</p><div class='tip_btnbox'><button class='btn btn_dsure tip_close'>确认</button></div>";
								$("body",Wparent).append(tipBg);
								$("body",Wparent).append(tipBox);
								$(".tip_box",Wparent).append(delFail);
								DelTipWidth(obj.Twidth,obj.Theight);
						   }
						});
					});
				});
			}else if(obj.method == "edit"){
				$(obj.Class).off(obj.even);
				$(obj.Class).on(obj.even,function(){
					var dataId;
					if($(this).parent()[0].tagName == "TD"){
						dataId = $(this).parents("tr").prop("id");
					}else{
						dataId = obj.dataId;
					}
					Tipclose();
					$.ajax({
						type:"get",
						url:obj.editUrl,
						data:{"id":dataId},
						success:function(data){
							$("body",Wparent).append(tipBg);
							$("body",Wparent).append(tipBox);
							$(".tip_box",Wparent).prepend("<h2>"+obj.tipTit+"<span class='tip_close'><i class='fa fa-close'></i></span></h2><div class='tip_tbox'></div>");
							if(obj.type=="form"){
								$(".tip_tbox",Wparent).append("<iframe src='"+obj.editUrl+"?id="+dataId+"' frameborder='0' width='100%' height='100%' seamless></iframe>");
							}else{
								$(".tip_tbox",Wparent).append("<div class='cont_box editpro_box'>"+data.msg+"</div>");
							}
							DelTipWidth(obj.Twidth,obj.Theight);
							var titH = $(".tip_box",Wparent).find("h2").outerHeight();
							$(".tip_tbox",Wparent).css("height",obj.Theight - titH);
							
						},
						error:function(errormsg){
							Tipclose();
					   		var editFail = "<p class='del_info'>"+errormsg+"</p><div class='tip_btnbox'><button class='btn btn_dsure tip_close'>确认</button></div>";
							$("body",Wparent).append(tipBg);
							$("body",Wparent).append(tipBox);
							$(".tip_box",Wparent).append(editFail);
							DelTipWidth(400,180);
						}
					});
				});
			}else if(obj.method == "Shelf"){
				$("body").on("click",".up_shelf",function(){
					var dataId = $(this).parents("tr").prop("id"),
						that = $(this);
					Tipclose();
					$("body",Wparent).append(tipBg);
					$("body",Wparent).append(tipBox);
					$(".tip_box",Wparent).append(delTxt);
					$(".del_info",Wparent).text("确认下架该商品？");
					DelTipWidth(obj.Twidth,obj.Theight);
					$(".del_sure",Wparent).click(function(){
						$.ajax({
						   type:"post",
						   url:obj.shelfUrl,
						   data:"id=dataId&&shelfId=0",//0为需要下架，1为需要上架
						   success:function(msg){
								Tipclose();
								var delSuccess = "<p class='del_info'>商品下架成功</p><div class='tip_btnbox'><button class='btn btn_dsure del_close'>确认</button></div>";
								$("body",Wparent).append(tipBg);
								$("body",Wparent).append(tipBox);
								$(".tip_box",Wparent).append(delSuccess);
								DelTipWidth(obj.Twidth,obj.Theight);
								$(".del_close",Wparent).click(function(){
									Tipclose();
									that.off("click");
									that.removeClass("table_warning up_shelf").addClass("table_grey down_shelf");
									that.find("i").removeClass("fa-arrow-up").addClass("fa-arrow-down").next().text("下架");
								});
						   },
						   error:function(errormsg){
						   		Tipclose();
						   		var delFail = "<p class='del_info'>"+errormsg+"</p><div class='tip_btnbox'><button class='btn btn_dsure tip_close'>确认</button></div>";
								$("body",Wparent).append(tipBg);
								$("body",Wparent).append(tipBox);
								$(".tip_box",Wparent).append(delFail);
								DelTipWidth(obj.Twidth,obj.Theight);
						   }
						});
					});
				});
				$("body").on("click",".down_shelf",function(){
					var dataId = $(this).parents("tr").prop("id"),
						that = $(this);
					Tipclose();
					$("body",Wparent).append(tipBg);
					$("body",Wparent).append(tipBox);
					$(".tip_box",Wparent).append(delTxt);
					$(".del_info",Wparent).text("确认上架该商品？");
					DelTipWidth(obj.Twidth,obj.Theight);
					$(".del_sure",Wparent).click(function(){
						$.ajax({
						   type:"post",
						   url:obj.shelfUrl,
						   data:"id=dataId&&shelfId=1",//0为需要下架，1为需要上架
						   success:function(msg){
								Tipclose();
								var delSuccess = "<p class='del_info'>商品上架成功</p><div class='tip_btnbox'><button class='btn btn_dsure del_close'>确认</button></div>";
								$("body",Wparent).append(tipBg);
								$("body",Wparent).append(tipBox);
								$(".tip_box",Wparent).append(delSuccess);
								DelTipWidth(obj.Twidth,obj.Theight);
								$(".del_close",Wparent).click(function(){
									Tipclose();
									that.off("click");
									that.removeClass("table_grey down_shelf").addClass("table_warning up_shelf");
									that.find("i").removeClass("fa-arrow-down").addClass("fa-arrow-up").next().text("上架");
								});
						   },
						   error:function(errormsg){
						   		Tipclose();
						   		var delFail = "<p class='del_info'>"+errormsg+"</p><div class='tip_btnbox'><button class='btn btn_dsure tip_close'>确认</button></div>";
								$("body",Wparent).append(tipBg);
								$("body",Wparent).append(tipBox);
								$(".tip_box",Wparent).append(delFail);
								DelTipWidth(obj.Twidth,obj.Theight);
						   }
						});
					});
				});
			}
		});
	}
	//iframe tab标签
//	$.fn.tab=function(obj){
//		return this.each(function(){
//			$(".tab_tit li").eq(0).addClass("curr");
//			$(".tab_tit").next("iframe").prop("src",$(".tab_tit li").eq(0).attr("data-href"));
//			$(".tab_tit li").click(function(){
//				var that = $(this);
//				$.ajax({
//					type:"post",
//					url:obj.tabUrl,
//					data:obj.data,
//					success:function(msg){
//						that.addClass("curr").siblings().removeClass("curr");
//						that.parent().next("iframe").prop("src",that.attr("data-href"));
//					}
//				});
//			});
//		});
//	}
	//=====弹出窗设置
	function DelTipWidth(Twidth,Theight){
		$(".tip_box",Wparent).css({"width":Twidth+"px","height":Theight+"px","margin-top":-(Theight/2)+"px","margin-left":-(Twidth/2)+"px"});
		$(".tip_close",Wparent).on("click",Tipclose);
	}
	//=====关闭弹出窗
	function Tipclose(){
		$(".tip_box",Wparent).remove(); //移除新增的外层className
		$(".tip_bg",Wparent).remove(); //移除新增的背景className
	}
	//=====成功提示
	function Success(obj){
		$(".tip_box:last",Wparent).css({"width":"400px","height":"180px","margin-top":"-90px","margin-left":"-200px","z-index":"198611060"});
		$(".tip_close",Wparent).on("click",function(){
			Tipclose();
			if(obj!=null||obj!=undefined){
				$("body",Wparent).find("iframe").prop("src",obj);
			}else{
				$("body",Wparent).find("iframe").prop("src",$("body",Wparent).find("iframe").prop("src"));
			}
		});
	}
	$.fn.other=function(options){
		$.fn.other.defaults={
			/*---table---*/
			tableId:"", //datatable事件执行的table的id
			tableAas:"", //默认从哪一列的升降序排列
			tableWrap:"", //默认排序的列
			tableSearch:false,
			/*---validform---*/
			formId:"",
			formUrl:""
		};
		return this.each(function(){
			var opts = $.extend({},$.fn.other.defaults,options);
			//datatable
			$(opts.tableId).DataTable({
				"dom": '<"top"f><"clear">rt<"bottom"lip><"clear">',
				"aaSorting": [opts.tableAas],//默认第几个排序
				//"searching":opts.tableSearch,
				"searching":false,
				"paging":false,
				"info":false,
				"bLengthChange": false,//每页展示多少条
				//"scrollX": true,
				columnDefs:[{
					orderable:false,//禁用排序
					targets:opts.tableWrap//指定的列
				}]
			});
			//validform
			function validform(){
				return $(opts.formId).validate({
							errorElement:"div",
							errorPlacement:function(error,element){
								if(element.parent()[0].className == "radio_box"){
									error.appendTo(element.parent().parent());
								}else{
									error.appendTo(element.parent());
								}
							}
						});
			}
			$(validform());
			$(".submit").click(function(){
				var link=opts.linkHref,
					that=$(this);
				if(validform().form()) {
					that.prop("disabled","disabled");
					$.ajax({
						type:"post",
						url:opts.formUrl,
						data:$(opts.formId).serialize(),
						success:function(msg){
							var successTxt = "<p class='del_info'>操作成功</p><div class='tip_btnbox'><button class='btn btn_success tip_close'>确认</button></div>";
							Tipclose();
							$("body",Wparent).append(tipBg);
							$("body",Wparent).append(tipBox);
							$(".tip_box",Wparent).append(successTxt);
							Success(link);
							that.removeAttr("disabled");
						},
						error:function(errormsg){
							var errorTxt = "<p class='del_info'>操作失败，请重试</p><div class='tip_btnbox'><button class='btn btn_dsure tip_close'>确认</button></div>";
							Tipclose();
							$("body",Wparent).append(tipBg);
							$("body",Wparent).append(tipBox);
							$(".tip_box",Wparent).append(errorTxt);
							Success();
							that.removeAttr("disabled");
						}
					});
				}else {
					//校验不通过，什么都不用做，校验信息已经正常显示在表单上
				}
			});
		});
	}
	//======验证正则表达式
	//商品编码
	jQuery.validator.addMethod("procode", function (value, element) {
		var name = /^[A-Za-z0-9]{4,40}$/;
		return this.optional(element) || (name.test(value));
	},"请输入正确的商品编码");
	//商品名称
	jQuery.validator.addMethod("proname", function (value, element) {
		var name = /^[\u4E00-\u9FA5A-Za-z0-9]+$/;
		return this.optional(element) || (name.test(value));
	},"请输入正确的商品名称");
	//商品价格
	jQuery.validator.addMethod("pricein", function (value, element) {
		var name = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
		return this.optional(element) || (name.test(value));
	},"请输入正确的价格格式");
	//身份证
	jQuery.validator.addMethod("paper", function (value, element) {
		var name = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
		return this.optional(element) || (name.test(value));
	},"请输入正确的身份证号");
	//手机验证规则 
	jQuery.validator.addMethod("mobile", function (value, element) {
		var mobile = /^1[3|4|5|7|8]\d{9}$/;
		return this.optional(element) || (mobile.test(value));
	}, "请输入正确的手机号码");
	//姓名
	jQuery.validator.addMethod("fullname", function (value, element) {
		var name = /^([\u4E00-\u9FA5]+|[a-zA-Z]+){2,}$/;
		return this.optional(element) || (name.test(value));
	}, "请输入真实姓名");
	//邮箱
	jQuery.validator.addMethod("emile", function (value, element) {
		var name = /(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$)|(^$)/;
		return this.optional(element) || (name.test(value));
	}, "请输入正确的邮箱地址");
	//两位小数
	jQuery.validator.addMethod("mileage", function (value, element) {
		var name = /^[0-9]+([.]{1}[0-9]{1,2})?$/;
		return this.optional(element) || (name.test(value));
	}, "请输入正确的里程数，例如：1.23");
	//车牌号
	jQuery.validator.addMethod("isCarNo", function (value, element) {
		var name = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{4}[A-Z_0-9_\u4e00-\u9fa5]$|^[A-Z]{2}\d{7}$/;
		return this.optional(element) || (name.test(value));
	}, "请输入正确的车牌号码，字母大写");
	//登录名
	jQuery.validator.addMethod("uername", function (value, element) {
		var name = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
		return this.optional(element) || (name.test(value));
	}, "用户名错误或不存在");
	//密码
	jQuery.validator.addMethod("password", function (value, element) {
		var name = /^(\w){6,20}$/;
		return this.optional(element) || (name.test(value));
	}, "请输入6-20个字母、数字、下划线");
	//预售卡卡号
	jQuery.validator.addMethod("sellcard", function (value, element) {
		var name = /^[0-9]{5,40}$/;
		return this.optional(element) || (name.test(value));
	}, "请输入正确的卡号");
	//name相同时用id验证
	if($.validator){
	    $.validator.prototype.elements = function () {
	        var validator = this,
	        rulesCache = {};
	        // Select all valid inputs inside the form (no submit or reset buttons)
	        return $( this.currentForm )
	        .find( "input, select, textarea, [contenteditable]" )
	        .not( ":submit, :reset, :image, :disabled" )
	        .not( this.settings.ignore )
	        .filter( function() {
	            var name = this.id || this.name || $( this ).attr( "name" ); // For contenteditable
	            if ( !name && validator.settings.debug && window.console ) {
	                console.error( "%o has no name assigned", this );
	            }
	            // Set form expando on contenteditable
	            if ( this.hasAttribute( "contenteditable" ) ) {
	                this.form = $( this ).closest( "form" )[ 0 ];
	            }
	            // Select only the first element for each name, and only those with rules specified
	            if (name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
	                return false;
	            }
	            rulesCache[ name ] = true;
	            return true;
	        } );
	    }
	}
	//input radio
	$("input[type='radio']").change(function(){
		var radioName = $(this).prop("name");
		if($(this).prop("checked")==true){
			$(this).parents("body").find("input[name='"+radioName+"']").prev().removeClass("fa-check-circle").addClass("fa-circle-thin");
			$(this).prev().removeClass("fa-circle-thin").addClass("fa-check-circle");
		}
	});
	//search date
	var nowTemp = new Date();
	var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
	 
	var checkin = $("#start_date").datepicker({
		format:"yyyy-mm-dd",
		onRender: function(date){
			return date.valueOf() > now.valueOf() ? "disabled" : "";
		}
	}).on("changeDate", function(ev){
		if(ev.date.valueOf() >= checkout.date.valueOf()){
			var newDate = new Date(ev.date)
				newDate.setDate(newDate.getDate());
				checkout.setValue(newDate);
		}
		checkin.hide();
		$("#end_date").focus();
	}).data("datepicker");
	var checkout = $("#end_date").datepicker({
		format:"yyyy-mm-dd",
		onRender: function(date){
			return date.valueOf() > now.valueOf() ? "disabled" : "";
	  	}
	}).on("changeDate", function(ev){
		if(ev.date.valueOf() < checkin.date.valueOf()){
			var newDate = new Date(ev.date)
				newDate.setDate(newDate.getDate());
				checkin.setValue(newDate);
				$("#start_date").focus();
		}
		checkout.hide();
	}).data("datepicker");
	//choose date
	$(".choose_date").datepicker({
		format:"yyyy-mm-dd",
		onRender: function(date){
			return date.valueOf() < now.valueOf() ? "disabled" : "";
		}
	});
	//iframe自适应高
	function iframeHeight(){
		var main = $(Wparent).find(".iframe_height"); 
		var thisheight = $(".dataTables_wrapper").outerHeight()+$(".achiev").outerHeight();
		main.height(thisheight); 
	};
	$(Wparent).find(".iframe_height").load(function(){
		iframeHeight();
		$(Wparent).find(".iframe_height").contents().find(".sub_select").change(function(){
			iframeHeight();
		});
	});
	//tab标签
	jQuery.jqtab = function(tabtit,tab_conbox,events){
		$(tabtit).find("li:first").addClass("curr").show();
		$(tab_conbox).find("dd").hide();
		$(tab_conbox).find("dd:first").show();
		$(tabtit).find("li").bind(events,function(){
			$(this).addClass("curr").siblings("li").removeClass("curr"); 
			var activeindex = $(tabtit).find("li").index(this);
			$(tab_conbox).children().eq(activeindex).show().siblings().hide();
			return false;
		});
	};
	//layer
	jQuery.layerTip = function(status,layerTxt){
		var Bg = "<div class='tip_bg tipbg_top'></div>",
			Box = "<div class='tip_box tipbox_top'></div>";
		$("body",Wparent).append(Bg);
		$("body",Wparent).append(Box);
		if(status=="success"){
			$(".tipbox_top",Wparent).append("<p class='del_info'>"+layerTxt+"</p><div class='tip_btnbox'><button class='btn btn_success tip_close'>确认</button></div>");
		}else{
			$(".tipbox_top",Wparent).append("<p class='del_info'>"+layerTxt+"</p><div class='tip_btnbox'><button class='btn btn_dsure tip_close'>确认</button></div>");
		}
		$(".tipbox_top",Wparent).css({"width":"400px","height":"180px","margin-top":"-90px","margin-left":"-200px"});
		$(".tip_close",Wparent).on("click",function(){
			$(".tipbg_top",Wparent).remove();
			$(".tipbox_top",Wparent).remove();
		});
	};
	//模拟select下拉
	jQuery.selectSearch = function(elm){
		var boxW = elm.outerWidth(true);
		elm.find("dl").css({"width":boxW});
		elm.find(".select_search").css({"width":(boxW -24)+"px"});
		elm.find(".ss_cont").css({"width":(boxW -46)+"px"});
		//显示下拉
		$(".select_search").click(function(event){
			event.stopPropagation();
			elm.find("dl").toggle(0);
			return false;
		});
		$(document).click(function(event){
			var con = elm.find("dl");
			if(!con.is(event.target) && con.has(event.target).length === 0){
				con.slideUp("fast");
			}
			$(".ss_cont").val("");
			elm.find("dd").show();
		});
		//点击选中
		elm.find("dd").click(function(){
			$(".select_search").val($(this).text());
			elm.find("dl").hide();
			$(".ss_cont").val("");
			elm.find("dd").show();
		});
		//搜索目标
		$(".ss_cont").keyup(function(){
			var cont = $(this).val();
			elm.find("dd").each(function(){
				var str = $(this).text();
				if(str.indexOf(cont)>=0){
					$(this).show();
				}else{
					$(this).hide();
				}
			});
		});
	};
	//获取get请求参数
	jQuery.getUrlParam = function(name){
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"),
			r = window.location.search.substr(1).match(reg);
		if(window.location.search==null||window.location.search==""){
			return "initial";
		}else if((window.location.search!=null||window.location.search!="")&&r[2]==""){
			return null;
		}else{
			return unescape(r[2]);
		}
	};
});
