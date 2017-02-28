
// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

// var last_known_scroll_position = 0;
// var ticking = false;

// var $banner = $('#banner'),
// 	$bannerHeight = $banner.outerHeight();

// function parallax(scroll_pos) {
//   var wScrol = $(document).scrollTop();
//   //$banner.css('transform', 'translateY('+scroll_pos+')');
//   var parallaxScroll = -(scroll_pos * 0.7);

//   var clippedScroll = Math.round(parallaxScroll * 100) / 100;
//   $banner.css('top', clippedScroll);

//   console.log(clippedScroll);
// }

// var $leftSidebar = $('#left-sidebar');

// if ($leftSidebar.length != 0) {
// 	var leftSidebarOffset = $leftSidebar.offset().top - 20;
// 		leftSidebarScrollUntil = 2500 - leftSidebarOffset + 20;
// }


// window.addEventListener('scroll', function(e) {
//   last_known_scroll_position = window.scrollY;
// 	if (last_known_scroll_position >= 0 && last_known_scroll_position < $bannerHeight) {
// 		if (!ticking) {
// 			window.requestAnimationFrame(function() {
// 				parallax(last_known_scroll_position);
// 				ticking = false;
// 			});
// 		}
// 		ticking = true;
// 	}
// 	/*
// 	if (last_known_scroll_position >= leftSidebarOffset && last_known_scroll_position < 2500) {
// 		if (!ticking) {
// 			window.requestAnimationFrame(function() {
// 				$leftSidebar.addClass('left-sidebar--fixed-js');
// 				$leftSidebar.css('top', 20);
// 				ticking = false;
// 			});
// 		} 
// 		ticking = true;
// 	} else if (last_known_scroll_position >= 2500) {
// 		$leftSidebar.removeClass('left-sidebar--fixed-js');
// 		$leftSidebar.css('top', leftSidebarScrollUntil);
// 	} else {
// 		$leftSidebar.removeClass('left-sidebar--fixed-js');
// 		$leftSidebar.css('top', 75);
// 	}
// 	*/
// });

var $socialLinks = $('.social-aside a');
var socialLinkTitles = [];

$socialLinks.each(function() {
	socialLinkTitles.push(this.getAttribute('title'));
});

$(window).on('load resize', function() {

	if ($('#menu-slide').hasClass('menu-slide--js') || window.matchMedia('(min-width: 1600px)').matches) {
		$socialLinks.each(function() {	
			self = $(this);
			self.removeAttr('title');
		});
	} else {
		for (var i = 0; i < $socialLinks.length; i++) {
			$socialLinks[i].setAttribute('title', socialLinkTitles[i]);
		}
	}
})

