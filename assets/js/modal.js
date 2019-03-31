$(document).ready(function () {
	$('[data-modal]').click(function (e){
		var modalId = $(this).attr('data-modal');
		$('#' + modalId).css('display', 'flex');
		e.preventDefault();
		setTimeout(function (){
			$('#' + modalId).css('opacity', '1');
			$('#' + modalId).find('.modal-content').addClass('active');
		}, 100);
	});
	$('.modal-close').click(function (e){
		var modal = $(this).closest('.modal');
		modal.css('opacity', '0');
		modal.find('.modal-content').removeClass('active');
		e.preventDefault();
		setTimeout(function (){
			modal.css('display', 'none');
		}, 400);
	});
	$(window).click(function (e){
		var clickTarget = $(e.target);
		e.preventDefault();
		if(clickTarget.hasClass('modal')){
			clickTarget.css('opacity', '0');
			clickTarget.find('.modal-content').removeClass('active');
			setTimeout(function (){
				clickTarget.css('display', 'none');
			}, 400);
		}
	});
});