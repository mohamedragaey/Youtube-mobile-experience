// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
//
// let changeColor = document.getElementById('changeColor');
// let video_player = document.getElementsByClassName('ytd-watch');
let float_player_btn = document.getElementById('float-player-btn');
let float_player_reset_btn = document.getElementById('float-player-reset-btn');
//
// float_player_btn.onclick = function (element) {
//   chrome.tabs.executeScript({code: 'video_player.className += "fixed";'})
// };
//
// chrome.storage.sync.get('color', function (data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });
//
// changeColor.onclick = function (element) {
//   let color = element.target.value;
//   chrome.tabs.executeScript(
//     {code: 'document.body.style.backgroundColor = "' + color + '";'});
// };

function fix_video() {
  chrome.tabs.executeScript({
    file: 'fixed-video.js'
  });
}

function reset() {
  chrome.tabs.executeScript({
    file: 'reset.js'
  });
}

float_player_btn.addEventListener('click', fix_video);
float_player_reset_btn.addEventListener('click', reset);
