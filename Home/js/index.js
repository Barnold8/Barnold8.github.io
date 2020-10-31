//$(document).ready(function() {
//   $(window).on('scroll', function() {
//    if($(window).scrollTop() < 1000) {
//      $('.hero').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
//      $('.hero h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
//      $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
//    }
//     
//       $('.nav-bg').removeClass('bg-hidden');
 //      $('.nav-bg').addClass('bg-visible');
//     } else {
 //      $('.nav-bg').removeClass('bg-visible');
//       $('.nav-bg').addClass('bg-hidden');
//     }
 // });
//});

function setup() {
  createCanvas(windowWidth, windowHeight);
  rainArray = [];

  for (i = 0; i < 100; i++) {										//Code tested at https://editor.p5js.org/Barnold__/sketches/kKasHUrgO

    rainArray.push(new Rain(random(width), random(height)));

  }

}

function draw() {
  clear();
  background('rgba(0,0,0, 0.00)');
  for (i = 0; i < rainArray.length; i++) {

    rainArray[i].show();
    rainArray[i].fall();


  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  for (i = 0; i < rainArray.length; i++) {

    rainArray[i].x = random(width);
    rainArray[i].y = random(height);

  }
}

