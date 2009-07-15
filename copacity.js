/**
 * Change Opacity
 * 
 * @usage <... opacity="opacity"> - Opacity is optional, defaults to 50%
 * @example <div opacity="75">
 * 
 * @requires
 * jquery.js
 * jquery.livequery.js
 */

var opacityTag = "opacity", opacitySelector = "["+opacityTag+"]";

$(opacitySelector).livequery( function() {
	var me = $(this);
	try {
		var op = (me.attr(opacityTag) || 50)/100;
		me.fadeTo("fast", op);
	} catch(err) {
		log(err);
		log('Error thrown while trying to set opacity.  Element::'+me.attr('id'));
	}
});