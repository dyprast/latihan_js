$(document).ready(function(){
	/*$('.slide-nav [data-slide]').click(function(e){
		var _this = $(this);
		var navType = _this.attr('data-slide');
		var slide = _this.closest('.slide');
		var slideInner = slide.find('.slide-inner');
		var slideMove = slideInner.attr('data-move');
		var slideIndicator = slide.find('.slide-indicator');

		e.preventDefault();
		if (navType == 'next') {
			if (slideMove == undefined) {
				slideInner.attr('data-move', '1');
				slideInner.find('.content').css('left','-100%');
				slideIndicator.find('[data-slide-to]').removeClass('active');
				slideIndicator.find('[data-slide-to]:eq(1)').addClass('active');
			}
			else{
				var nextMove = parseInt(slideMove) + 1;
				if (nextMove == slideInner.find('.content').length) {
					slideInner.removeAttr('data-move');
					slideInner.find('.content').css('left', '0%');
					slideIndicator.find('[data-slide-to]').removeClass('active');
					slideIndicator.find('[data-slide-to]:eq(0)').addClass('active');
				}
				else{
					slideInner.attr('data-move', nextMove);
					slideInner.find('.content').css('left','-' + nextMove * 100 + '%');
					slideIndicator.find('[data-slide-to]').removeClass('active');
					slideIndicator.find('[data-slide-to]:eq(' + nextMove + ')').addClass('active');
				}
 			}
		}
		else{
			if(slideMove == undefined){
				var nextMove = slideInner.find('.content').length - 1;
				slideInner.attr('data-move', nextMove);
				slideInner.find('.content').css('left','-' + nextMove * 100 + '%');
				slideIndicator.find('[data-slide-to]').removeClass('active');
				slideIndicator.find('[data-slide-to]:eq(' + nextMove +'	)').addClass('active');
			}
			else{
				var nextMove = parseInt(slideMove) - 1;
				if (nextMove == 0) {
					slideInner.removeAttr('data-move');
					slideInner.find('.content').css('left', '0%');
					slideIndicator.find('[data-slide-to]').removeClass('active');
					slideIndicator.find('[data-slide-to]:eq(0)').removeClass('active');	
				}
				else{
				slideInner.attr('data-move', nextMove);
				slideInner.find('.content').css('left', '-' + nextMove * 100 + '%');
				slideIndicator.find('[data-slide-to]').removeClass('active');
				slideIndicator.find('[data-slide-to]:eq(' + nextMove + ')').addClass('active');
			}
			}
		}
	});
 */
	$('.slide-indicator [data-slide-to]').click(function(){
		var _this = $(this);
		var slideIndex = _this.attr('data-slide-to');
		var slide = _this.closest('.slide');
		var slideInner = slide.find('.slide-inner');

		if (!_this.hasClass('active')) {
			slide.find('.slide-indicator [data-slide-to]').removeClass('active');
			_this.addClass('active');
			if (slideIndex == 0) slideInner.removeAttr('data-move');
			else slideInner.attr('data-move', slideIndex);
			slideInner.find('.content').css('left', '-' + slideIndex * 100 + '%');
		}
	});
});