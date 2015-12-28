$(document).ready(function() {

	$('#marillion').click(function() {
		$('#marillion img').hide(5000, function(){
			$('#marillion img').delay(1000).show(2000);
		});
	});

	
	$('#rodstewart').hover(function(){
		$('#rodstewart img').fadeOut(3000, function() {
			$('#rodstewart img ').fadeIn(3000);
		});
	});
	
	






	
	$('#rambo').click(function() {
		$('#rambo img').slideToggle("slow");
	});

	

var effects  = $('#effectsOn');

effects.click(function(){
	 $('#wrapper').show();

		$('#marillion img').hide(5000, function(){
			$('#marillion img').delay(1000).show(2000);
		});
	
	
	
		$('#rodstewart img').fadeOut(3000, function() {
			$('#rodstewart img ').fadeIn(3000);
		});

	

		$('#hollywoodundead img').toggle(3000);
		

	
	
	
		$('#rambo img').toggle(5000);


		


});
	
});// JavaScript Document

