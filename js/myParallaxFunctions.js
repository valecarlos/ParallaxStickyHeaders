$(window).scroll(function()
{
	var div_top = $('#anchorDiv').offset().top;
	var windowScroll = $(this).scrollTop();
	//add the Parallax effect to the logo and the Lamp by making them move at a different rate.

	$('.Logo').css({
		'transform' : 'translate(0px,'+ windowScroll /2 +'px)'
	});

	$('.Lamp').css({
		'transform' : 'translate(0px,-'+ windowScroll /12 +'%)'
	});

	//Sticky headers Section
	//Section 2 Controller 
	//increase the opacity of the #SecondCover as the user scrolls down
	if(windowScroll > $('.SecondSection').offset().top){

		var opacity = (windowScroll - $('.SecondSection').offset().top) / (windowScroll / 2);
    	$('#SecondCover').css({'opacity': opacity});
 
	}
	//420px are added as it is used in the CSS -> .fixHeader
	//the toggleClass function adds/removes the class passed as a parameter under the offset condition
	$('.SecondSection').toggleClass('fixHeader', $(window).scrollTop() > $('#anchorDiv').offset().top+420);
	$('#SecondTitle').toggleClass('Titles-Animation-Down', $(window).scrollTop() > $('#anchorDiv').offset().top);
	$('#SecondTitle').toggleClass('Titles-Animation-Up', $(window).scrollTop() < $('#anchorDiv').offset().top);
  	
  	//Section 3 Controller
	if(windowScroll > $('.ThirdSection').offset().top){

		var opacity = (windowScroll - $('.ThirdSection').offset().top) / (windowScroll / 4);
    		$('#ThirdCover').css({'opacity': opacity});
	}
	//420px are added as it is used in the CSS -> .fixHeader
  	$('.ThirdSection').toggleClass('fixHeader', $(window).scrollTop() > $('#anchorDivtwo').offset().top+420);
  	$('#ThirdTitle').toggleClass('Titles-Animation-Down', $(window).scrollTop() > $('#anchorDivtwo').offset().top);
	$('#ThirdTitle').toggleClass('Titles-Animation-Up', $(window).scrollTop() < $('#anchorDivtwo').offset().top);
});