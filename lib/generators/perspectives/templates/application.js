// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require mustache-0.8.1
//= require perspectives
//= require_tree ../../mustaches
//= require perspectives_views
//= require_tree .

$(function() { $(document).perspectives('a', 'body') })
