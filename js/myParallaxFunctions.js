$(window).scroll(function()
{
	var div_top = $('#anchorDiv').offset().top;
	var windowScroll = $(this).scrollTop();

	$('.Logo').css({
		'transform' : 'translate(0px,'+ windowScroll /2 +'px)'
	});

	$('.Flowers').css({
		'transform' : 'translate(0px,-'+ windowScroll /16 +'%)'
	});
	//console.log('translateY('+ windowScroll /2 +'%)');

	//Section 2 Controller
	if(windowScroll > $('.SecondSection').offset().top){

		var opacity = (windowScroll - $('.SecondSection').offset().top) / (windowScroll / 2);
		//var moveTitleBy = (windowScroll - $('.SecondSection').offset().top)/6.3;
    	$('#SecondCover').css({'opacity': opacity});
    	//$('#SecondTitle').css({'top': moveTitleBy + '%'});
 
	}
	$('.SecondSection').toggleClass('fixHeader', $(window).scrollTop() > $('#anchorDiv').offset().top+520);

  	//Section 3 Controller
	if(windowScroll > $('.ThirdSection').offset().top){

		var opacity = (windowScroll - $('.ThirdSection').offset().top) / (windowScroll / 2);
		//var moveTitleBy = (windowScroll - $('.ThirdSection').offset().top)/6.3;

    	if (opacity < 0.5){
    		$('#ThirdCover').css({'opacity': opacity});
    		}
    	//console.log(moveTitleBy)
    	//$('#ThirdTitle').css({'top': moveTitleBy + '%'});
	}

  	$('.ThirdSection').toggleClass('fixHeader', $(window).scrollTop() > $('#anchorDivtwo').offset().top+520);
});