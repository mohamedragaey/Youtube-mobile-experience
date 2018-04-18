// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
//
let changeColor = document.getElementById('changeColor');
let float_player_btn = document.getElementById('float-player-btn');
let float_player_reset_btn = document.getElementById('float-player-reset-btn');

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

function cinema_mode() {
  chrome.tabs.executeScript({
    file: 'cinema-mode.js'
  });
}

changeColor.addEventListener('click', cinema_mode);
float_player_btn.addEventListener('click', fix_video);
float_player_reset_btn.addEventListener('click', reset);
