(function($) {
	'use strict';
	
	if($.AMUI && $.AMUI.validator) {
		// 增加多个正则
		$.AMUI.validator.patterns = $.extend($.AMUI.validator.patterns, {
			password: /^.{6,16}$/,
			tel: /(13|14|15|17|18)[0-9]{9}/
		});
	}


})(jQuery);