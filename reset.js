$('#player.ytd-watch').removeClass('fixed');
$('#info.ytd-watch').removeClass('right-side-info');
$('#comments.ytd-watch').removeClass('right-side-comments');
$('#meta.ytd-watch').removeClass('right-side-meta');
$('#related').removeClass('is-fixed');

$('html').removeClass('cinema-mode');
$('body').removeClass('cinema-mode');


$('#clarify-box').append($('#info'));
$('#clarify-box').append($('#meta'));
$('#merch-shelf').append($('#comments'));
