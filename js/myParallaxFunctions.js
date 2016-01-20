$(window).scroll(function()
{
	var div_top = $('#anchorDiv').offset().top;
	var windowScroll = $(this).scrollTop();

	$('.Logo').css({
		'transform' : 'translate(0px,'+ windowScroll /2 +'px)'
	});

	$('.Lamp').css({
		'transform' : 'translate(0px,-'+ windowScroll /12 +'%)'
	});


	//Section 2 Controller
	if(windowScroll > $('.SecondSection').offset().top){

		var opacity = (windowScroll - $('.SecondSection').offset().top) / (windowScroll / 2);
    	$('#SecondCover').css({'opacity': opacity});
 
	}
	$('.SecondSection').toggleClass('fixHeader', $(window).scrollTop() > $('#anchorDiv').offset().top+420);
	$('#SecondTitle').toggleClass('Titles-Animation-Down', $(window).scrollTop() > $('#anchorDiv').offset().top);
	$('#SecondTitle').toggleClass('Titles-Animation-Up', $(window).scrollTop() < $('#anchorDiv').offset().top);
  	
  	//Section 3 Controller
	if(windowScroll > $('.ThirdSection').offset().top){

		var opacity = (windowScroll - $('.ThirdSection').offset().top) / (windowScroll / 2);
    		$('#ThirdCover').css({'opacity': opacity});
	}

  	$('.ThirdSection').toggleClass('fixHeader', $(window).scrollTop() > $('#anchorDivtwo').offset().top+420);
  	$('#ThirdTitle').toggleClass('Titles-Animation-Down', $(window).scrollTop() > $('#anchorDivtwo').offset().top);
	$('#ThirdTitle').toggleClass('Titles-Animation-Up', $(window).scrollTop() < $('#anchorDivtwo').offset().top);
});