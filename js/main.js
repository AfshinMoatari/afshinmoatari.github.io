---
layout: null
---
$(document).ready(function () {
  $('a.about-button').click(function (e) {
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      console.log("hi");
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').addClass('panel-cover--collapsed-top')
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 500, swing = 'swing', function () {})
    }
  })

  $('a.about-button').click(function () {
    $('#about').addClass('show')
  })

  $('a.resume-button').click(function () {
    $('.btn-mobile-menu').addClass('hide')
    $('.resume-wrapper').addClass('animated fadeIn')
    if($('.panel-cover').hasClass('panel-cover--collapsed-top') || $('.panel-cover').hasClass('panel-cover--collapsed')){
      $('.panel-cover').css({'max-width': 'none', 'width': '100%'})
    }
    $('.panel-main').removeClass('show')
    $('.panel-main').addClass('hide')
    $('.content-wrapper').addClass('hide')
    $('.resume-wrapper').removeClass('hide')
    $('.resume-wrapper').addClass('show')
  })

  if (window.location.hash && window.location.hash == '#resume') {
    $('.panel-main').removeClass('show')
    $('.panel-main').addClass('hide')
    $('.btn-mobile-menu').addClass('hide')
    $('.resume-wrapper').removeClass('hide')
    $('.resume-wrapper').addClass('show')
  }

  if (window.location.hash && window.location.hash == '#about') {
    
    if(window.location.hash == '#about') {
      $('#about').addClass('show')
    }
  }

  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.btn-mobile-menu').toggleClass('activated')
    $('.navigation-wrapper').toggleClass('visible animated slideInDown')
  })

  window.onload = canvas();
  function canvas(){
    var canvas = document.querySelector('canvas'),
    ctx = canvas.getContext('2d'),

    color = '#e5e5e5';
    canvas.width = $("body").innerWidth();
    canvas.height = $("body").innerHeight();
    ctx.fillStyle = color;
    ctx.lineWidth = .1;
    ctx.strokeStyle = color;
    var dots = {nb:canvas.width/6, distance:50, d_radius:10, array:[]};
    function Dot(){
      this.x = Math.random()*canvas.width;
      this.y = Math.random()*canvas.height;
      this.vx =- .5+Math.random();
      this.vy =- .5+Math.random();
      this.radius = .5+Math.random();
    }
    Dot.prototype = {
      create:function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fill();
      }
    };

    function makeDots(){
      for(i=0; i<dots.nb; i++){
        dots.array.push(new Dot());
      }
    }

    function moveDots(){
      for(i=0; i<dots.nb; i++){
        var dot = dots.array[i];
        if(dot.y<0 || dot.y>canvas.height){
          dot.vx = dot.vx;
          dot.vy =- dot.vy;
        }else if(dot.x<0 || dot.x>canvas.width){
          dot.vx =- dot.vx;
          dot.vy = dot.vy;
        }
        dot.x += dot.vx;
        dot.y += dot.vy;
      }
    }

    function animateDots(){
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for(i=0; i<dots.nb; i++){
        dot = dots.array[i];
        dot.create();
      }
      moveDots();
    }

    makeDots();
    setInterval(animateDots, 300);

  }

})
