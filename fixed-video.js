$('#player.ytd-watch').addClass('fixed');
$('#info.ytd-watch').addClass('right-side-info');
$('#comments.ytd-watch').addClass('right-side-comments');
$('#meta.ytd-watch').addClass('right-side-meta');
$('#related').addClass('is-fixed');



$('#related').prepend($('#meta'));
$('#related').prepend($('#info'));
$('#related').append($('#comments'));