var $show = $('.btn-show-hide');
var $box = $('.box');

var $btnmove = $('.btn-move')
var $diamond = $('.diamond')

var $collapse = $('.btn-collapse-expand')
var $panel = $('.panel')

var $bounce = $(.btn-bounce)
var $circle = $(.circle)

$show.on('click', function () {
	$box.toggleClass('opacity-animate');
})

$btnmove.on('click', function () {
	$diamond.toggleClass('diamond-move');
})

$collapse.on('click', function () {
	$panel.toggleClass('panel-collapse');
})

$bounce.on('click', function () {
	$circle.toggleClass('');
})