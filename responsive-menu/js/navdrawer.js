$(".navmenu li a")
	.mouseenter(function() {
				
		var i = $(this).attr("id").substr(-1);
		var col = '#navcol-'+i;
		
		$("#navdrawer").removeClass( "hidden" );
		$(col).removeClass("hidden").addClass("active");
		
	})
	.mouseleave(function(){
		var i = $(this).attr("id").substr(-1);
		var col = '#navcol-'+i;
		$("#navdrawer").addClass("hidden");
		$(col).addClass("hidden").removeClass("active");
	})
; 

$(".navcolumn")
	.mouseenter(function() {
		$(this).removeClass( "hidden" );
		$("#navdrawer").removeClass("hidden");
		
	})
	.mouseleave(function(){
		$("#navdrawer").addClass("hidden");
		$(this).addClass("hidden");
	})
;

