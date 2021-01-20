//		$(".ssale_list li").hover(function() {
//			$(this).find(".band_box").animate({
//				"bottom": "0px"
//			}, function() {
//				$(this).find(".title").animate({
//					"top": 0
//				});
//				$(this).find(".sologan").animate({
//					"top": 0
//				});
//			});
//		}, function() {
//			$(this).find(".title").animate({
//				"top": "40px"
//			});
//			$(this).find(".sologan").animate({
//				"top": "40px"
//			}, function() {
//				$(this).parent().animate({
//					"bottom": "-60px"
//				});
//			});
//		});

$(".ssale_list li").hover(function() {
  $(this).find(".band_box").animate({
    "bottom": '0px'
  }, 600);

  $(this).find(".title").delay(600).animate({
    "top": 0
  });

  $(this).find(".sologan").delay(800).animate({
    "top": 0
  });

}, function() {
  $(this).find(".title").animate({
    "top": "40px"
  }, 400);

  $(this).find(".sologan").delay(200).animate({
    "top": "40px"
  }, 400);

  $(this).find(".band_box").delay(600).animate({
    "bottom": '-60px'
  });
})