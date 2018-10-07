$(function(){
	//choose date
	var nowTemp = new Date();
	var now = new Date(nowTemp.getFullYear(), nowTemp.getMonth(), nowTemp.getDate(), 0, 0, 0, 0);
	$(".choose_date").datepicker({
		format:"yyyy-mm-dd",
		onRender: function(date){
			return date.valueOf() < now.valueOf() ? "disabled" : "";
		}
	});
	$(".before_date").datepicker({
		format:"yyyy-mm-dd",
		onRender: function(date){
			return date.valueOf() >= now.valueOf() ? "disabled" : "";
		}
	});
});
