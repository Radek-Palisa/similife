
// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

var last_known_scroll_position = 0;
var ticking = false;

var $banner = $('#banner'),
	$bannerHeight = $banner.outerHeight();

function parallax(scroll_pos) {
  var wScrol = $(document).scrollTop();
  //$banner.css('transform', 'translateY('+scroll_pos+')');
  $banner.css('top', 0 + (scroll_pos*-0.7));
}

var $leftSidebar = $('#left-sidebar'),
	leftSidebarOffset = $leftSidebar.offset().top - 20;
	leftSidebarScrollUntil = 2500 - leftSidebarOffset + 20;


window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
	if (last_known_scroll_position >= 0 && last_known_scroll_position < ($bannerHeight + 110)) {
		if (!ticking) {
			window.requestAnimationFrame(function() {
				parallax(last_known_scroll_position);
				ticking = false;
			});
		}
		ticking = true;
	}
	/*
	if (last_known_scroll_position >= leftSidebarOffset && last_known_scroll_position < 2500) {
		if (!ticking) {
			window.requestAnimationFrame(function() {
				$leftSidebar.addClass('left-sidebar--fixed-js');
				$leftSidebar.css('top', 20);
				ticking = false;
			});
		} 
		ticking = true;
	} else if (last_known_scroll_position >= 2500) {
		$leftSidebar.removeClass('left-sidebar--fixed-js');
		$leftSidebar.css('top', leftSidebarScrollUntil);
	} else {
		$leftSidebar.removeClass('left-sidebar--fixed-js');
		$leftSidebar.css('top', 75);
	}
	*/
});


function changeToImgA() {
	$banner.css('background-image', 'url(./css/img/banner.jpg)');
}

function changeToImgB() {
	$banner.css('background-image', 'url(./css/img/banner-light.jpg)');
}

function changeToImgC() {
	$banner.css('background-image', 'url(./css/img/banner-fall.jpg)');
}

function changeToImgD() {
	$banner.css('background-image', 'url(./css/img/banner-fuji.jpg)');
}



