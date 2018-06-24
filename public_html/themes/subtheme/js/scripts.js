(function ($){
	Drupal.behaviors.myModuleBehavior = {
		attach: function (context, settings){
			$(document).scroll(function() { // check if scroll event happened
				if ($(document).scrollTop() > 60) { // check if user scrolled more than 60 from top of the browser window
					$(".navbar-default").css("background-color", "#444444"); // if yes, then change the color of class "navbar-default" to #444444
				} else {
					$(".navbar-default").css("background-color", "transparent"); // if not, change it back to transparent
					}
				}); //for main navigation

			$(".MygridKompetencer").hover(function(){
					$(this).css("background-color", "#e2ecd8");
					$(".kompetencergridImages").animate({opacity: 0.5}, 100);
				}, function() {
					$(this).css("background-color", "#f6f6f6");
					$(".kompetencergridImages").animate({opacity: 1.0}, 100);
				}); //for homepage grid

			$(".homeSliderBtn").hover(function(){
					$(this).css("font-size", "19px");
				}, function() {
					$(this).css("font-size", "18px");
				});

		}
	}
})(jQuery);
