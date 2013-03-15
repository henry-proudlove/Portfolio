 
var color_array = ["#ce521d","#ca4b89","#006b89","#3e2d7e","#61902c", "#faa31a", "#6e002a", "#4981b3",
                   "#980069", "#2dacbf", "#ee1d25", "#9cb46f", "#9a869e", "#ee008c", "#00a895",
                   "#7b181a", "#ffd63c", "#b46638", "#bcd634", "#f4ea00", "#32b6c0", "#e8ac1c",
                   "#ea2d50", "#3c7022", "#0085cc", "#97C83B"];

function random_color(){
	var rand_color = color_array[Math.floor(Math.random()*color_array.length)];
	return rand_color;
}

$("#content.thumbs a").each( function(){
	$(this).css("background-color",random_color());
});

$("#imgs .img").each( function(){
	$(this).css("background-color",random_color());
});

function navPos(){
	$('.nav-item').each(function(){
		$e = $(this);
		pos = $e.position().left;
		pad = parseInt($e.css('padding-left'));
		pos = pos + pad;
		width = $e.width();
		if ($e.hasClass('last') && $(window).width() > 720){
			width = width - 3;
		}
		$e.data({
			'pos' : pos,
			'width' : width
		});
	});
}

jQuery.fn.moveMarker = function(d){
	$e = $(this[0]);
	$e.css({'left' : d.pos}).width(d.width);
	return $e;
}

function imgStats(){
	var imgs = $('#content.intro #imgs .img');
	var c = imgs.length;
	var w = $(this).width();
	var a = w/c;
	returnarr = [c,w,a];
	return returnarr;
}

function keyFrames(){
	var $imgs = $('#content.intro #imgs .img');
	
	var c = $imgs.length; // number of images
	var w = $(this).width(); // document width
	var a = w/c; // hit area per image
	f = 10; // number of frames per image
	e = 5; // ratio of semi-transparent to solid frames
	k = 0; // index of frames
	
	$imgs.each(function(i){
		for(j=0; j < f; j++){
			od = 0.5 / (f/e);
			jd = j/f;
			console.log('Ratio: ' + jd + ' Opacity diff: ' + od);
			k++;
			frame = 'frame' + k;
			if(j < f/e && $(this).index() != 0){
				var o = 0.5 + (od*jd);
				$(this)
					.clone()
					.css({'opacity' : o , 'z-index' : '2'})
					.appendTo('#frames')
					.wrap('<div class="frame ' + frame + '" />');
				$(this).prev()
					.clone()
					.css('z-index' , '1')
					.appendTo('.frame' + k);
			}else if (j > (f - (f/e)) && $(this).index() != c -1){
				
				$(this)
					.clone()
					.css({'opacity' : o , 'z-index' : '2'})
					.appendTo('#frames')
					.wrap('<div class="frame ' + frame + '" />');
				$(this).next()
					.clone()
					.css('z-index' , '1')
					.appendTo('.frame' + k);
			}else{
				$(this).clone().appendTo('#frames').wrap('<div class="frame ' + frame + '" />');
			}
		}
	});
}

function hitAreas(imgs){
	c = $('.frame').length;
	w = $(this).width();
	a = w/c
	var l = 0;
	$e = $('#hit-areas');
	if($e.children().length > 0){
		$e.children().each(function(i){
			l = i*a;
			$(this).css({'left' : l , 'width' : a});
		});
	}else{
		for (var i = 0; i < c; i++) {
			l = i*a;
			$e.append(
				'<div class="hit-area" style="width:' + a + 'px; left:' + l + 'px;"></div>'
			);
		}
	}
}

$(document).ready(function() {
	navPos();
	$(window).on("debouncedresize", function( event ) {
		navPos();
		var introImgs = imgStats();
		$('#marker-shape').moveMarker($('.nav-item.active').data())
	});
	$('#marker-shape')
		.moveMarker($('.nav-item.active').data())
		.addClass('trans');
	$('.nav-item').hover( 
		function(){
			var data = $(this).data();
			$('#marker-shape').moveMarker(data);
		},
		function(){
			var data = $('.nav-item.active').data();
			$('#marker-shape').moveMarker(data);
		}
	);
	
	/*$('#content.intro').hover(function(){
		var imgs = $('#content.intro').find('#imgs').children();
		var c = imgs.length;
		var w = $(this).width();
		var a = w/c;
		$(document).mousemove(function(e){
			x = e.pageX;
			i = Math.floor(x/a);
			j = x/a;
			p = j-i;
			$('#imgs .img').each(function(){
				if($(this).index() == i){
					$(this).addClass('img-show');
					$(this).next().addClass('img-next');
					$(this).prev().addClass('img-next');
						q = p+p;
					if(p > 0.75){
						$(this).css('opacity' , 1 - (q-1.5));
						$(this).next().css({'z-index' : '1' , 'opacity' : q - 1.5});
					}else if(p < 0.25 && !$(this).index() == 0){
						$(this).css('opacity' , q);
						$(this).prev().css({'z-index' : '1' , 'opacity' : 0.5 - q});
					}
				}else{
					$(this).removeClass('img-show');
					$(this).next().removeClass('img-next');
					$(this).prev().removeClass('img-next');
				}
			});	
   		}); 
	});*/
	hitAreas(keyFrames());
	$('.hit-area').hover(
		function(){
			var i = $(this).index();
			$('.frame').each(function(){
				if($(this).index() == i){
					$(this).css('display' , 'block');
				}else{
					$(this).css('display' , 'none').removeAttr('style');
				}
			});	
		},
		function(){
		}
	);
		
}); 