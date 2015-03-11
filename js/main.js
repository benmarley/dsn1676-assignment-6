var $show = $('.btn-show-hide');
var $box = $('.box');

var $btnmove = $('.btn-move')
var $diamond = $('.diamond')

$show.on('click', function () {
	$box.toggleClass('opacity-animate');
})

$btnmove.on('click', function () {
	$diamond.toggleClass('diamond-move');
})