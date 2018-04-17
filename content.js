/*
This page is to add functionality scripts
 */

let related_videos = document.getElementById('related');
let video_comments = document.getElementById('comments');
let float_player_btn = document.getElementById('float-player-btn');

float_player_btn.onclick = function (element) {
  video_comments.removeChild();
  video_comments.appendChild(related_videos);
};