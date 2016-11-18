
// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

var last_known_scroll_position = 0;
var ticking = false;

var $siteHeader = $('#site-header'),
	$siteHeaderHeight = $siteHeader.outerHeight();

function doSomething(scroll_pos) {
  var wScrol = $(document).scrollTop();
  //$siteHeader.css('transform', 'translateY('+scroll_pos+')');
  $siteHeader.css('top', scroll_pos*-0.5);
  console.log(scroll_pos);
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
	if (last_known_scroll_position >= 0 && last_known_scroll_position < $siteHeaderHeight) {
		if (!ticking) {
			window.requestAnimationFrame(function() {
				doSomething(last_known_scroll_position);
				ticking = false;
			});
		}
		ticking = true;
	}
});


function changeToImgA() {
	$siteHeader.css('background-image', 'url(./css/img/banner.jpg)');
}

function changeToImgB() {
	$siteHeader.css('background-image', 'url(./css/img/banner-light.jpg)');
}

function changeToImgC() {
	$siteHeader.css('background-image', 'url(./css/img/banner-fall.jpg)');
}

function changeToImgD() {
	$siteHeader.css('background-image', 'url(./css/img/banner-fuji.jpg)');
}