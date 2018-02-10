import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$('.tile')
	// tile mouse actions
	.on('mouseover', function(){
		$(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
	})
	.on('mouseout', function(){
		$(this).children('.photo').css({'transform': 'scale(1)'});
	})

	// tiles set up
	.each(function(){
		$(this)
			// add a photo container
			.append('<div class="photo"></div>')
			// some text just to show zoom level on current item in this example
			.append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
			// set up a background image for each tile based on data-image attribute
			.children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
	})



$(document).foundation()

jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});

