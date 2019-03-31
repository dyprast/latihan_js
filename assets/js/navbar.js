$(document).ready(function(){
	$('.navbar-toggler').click(function(){
		var _this = $(this);
		var navbar = _this.closest('.navbar');
		var navbarCollapse = navbar.find('.navbar-collapse');

		navbarCollapse.slideToggle();
	});
	$(window).resize(function(){

		var _this = $(this);
		var navbar = $('.navbar');
		var navbarCollapse = navbar.find('.navbar-collapse');

		/*if(_this.width() <= 576) navbarCollapse.css('display','none');
		else navbarCollapse.css('display','flex');
		*/
		_this.width() <= 576 ? navbarCollapse.css('display','none') : navbarCollapse.css('display','flex');

	});
	$('.navbar-nav .dropdown').click(function(){
		var _this = $(this);
		console.log(_this.text());
		var dropdownMenu = _this.find('.dropdown-menu');
		var navbar = _this.closest('.navbar');

		navbar.find('.nav-item').each(function(index){
			var eachDropdownMenu = $(this).find('.dropdown-menu');
			if(eachDropdownMenu.length > 0 && index != _this.index()) eachDropdownMenu.removeClass('show');
		});

		dropdownMenu.toggleClass('show');
	});
	$(window).click(function (e){
		var clickTarget = $(e.target);

		if (!clickTarget.closest('.nav-item').hasClass('dropdown')){
			$('.navbar').find('.dropdown-menu').each(function(){
				var _this = $(this);
				if(_this.hasClass('show')) _this.removeClass('show');
			});
		}
	});
});