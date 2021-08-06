import $ from 'jquery';
import 'jquery-bar-rating';

$(function () {
  console.log("hola mundo");
  $('#bar-rating-stars').barrating({
    theme: 'fontawesome-stars',
  });
});
