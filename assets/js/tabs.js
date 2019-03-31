$(document).ready(function (){
	$('.tabs [data-tab]').click(function (){
		var _this = $(this);
		var tabId = _this.attr('data-tab');
		$('.tabs a').removeClass('active');
		_this.addClass('active');
		$('.tabs-content div').css('display', 'none');
		$('.tabs-content #' + tabId).fadeIn();
	});
});