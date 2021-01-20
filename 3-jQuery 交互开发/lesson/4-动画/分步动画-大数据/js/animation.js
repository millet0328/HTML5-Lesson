$('.category .btn-icon').click(function() {
	$('.logo,.company,.sologan').stop(true).animate({
		top: 62
	}, function() {
		$('.category ul').animate({
			top: 200
		}, function() {
			$('.page1').fadeOut(function() {
				$('.page2').fadeIn(function() {
					$(this).find('.section_top').animate({
						top: 0
					},function () {
						$('.page2').find('.list_box li').each(function(index) {
							$(this).delay(index * 200).animate({
								top: 0
							});
						})
					});
				});
			});
		});
	});



	
});
