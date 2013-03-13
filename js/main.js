 
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

function navPos(){
	$('.nav-item').each(function(){
		pos = $(this).offset().left - $('#site-nav').offset().left;
		width = $(this).width();
		$(this).data({
			'pos' : pos,
			'width' : width
		});
		console.log($(this).data().pos);
	});
}

$(document).ready(function() {
	navPos();
	$(window).on("debouncedresize", function( event ) {
		navPos();
	});
	
	$('#marker-shape').width($('.nav-item.active').data().width);
	
	$('.nav-item').hover( 
		function(){
			var data = $(this).data();
			console.log(data);
			$('#marker-shape').width(data.width);
			$('#marker-shape').css('left' , data.pos);
		},
		function(){
			var data = $('.nav-item.active').data();
			$('#marker-shape').width(data.width);
			$('#marker-shape').css('left' , data.pos);
		}
		);
});