
// Burger menu
$('.mobile-menu-btn').on('click', function() {
  
  if($(this).hasClass('active')) {
    $('.mobile-menu-btn').removeClass('active');
  } else {
    $('.mobile-menu-btn').addClass('active');
  }
  });
$('.cancel-menu').click(function(){
  $('.mobile-menu-btn').removeClass('active');

})

//////////////////Isotop
// Links
let all = $('.work-ul__elem--all');
let wd = $('.work-ul__elem--wd');
let md = $('.work-ul__elem--md');
let ph = $('.work-ul__elem--ph');
let ul__elem = $('.work-ul__elem');
// elements
let elems = $('.work-tile__elem');
let wd_elem = $('.work-tile__elem--web-design');
let md_elem = $('.work-tile__elem--mobile-design');
let ph_elem = $('.work-tile__elem--photograpy');
// //functional
all.click(function(){
  worktile.isotope({ filter: '*' });
})
wd.click(function(){
  worktile.isotope({ filter: '.work-tile__elem--web-design' });
})
md.click(function(){
  worktile.isotope({ filter: '.work-tile__elem--mobile-design' });
})
ph.click(function(){
  worktile.isotope({ filter: '.work-tile__elem--photograpy' });
})

var worktile = $('.work-tile').isotope({
  itemSelector: '.work-tile__elem',
  layoutMode: 'fitRows'
});

//////////// Checkboxes of the types bassein
$('.type-bassein').click(function(){
  $(this).toggleClass('active')
  
})

var typebassein = $('.type-bassein');
for(i = 0; i < typebassein.length; i++) {
  typebassein[i].onclick = function(){
        $(this).addClass('active').find('.circle-button').addClass('actives');             
        $(this).siblings().removeClass('active');
        $(this).siblings().find('.circle-button').removeClass('actives') ;
  }
}
//Send to email 
$('#end').on('click', function(e){
  e.preventDefault();
  let typebassein = $('#step1').find('.type-bassein.active').find('input[type="radio"]').attr('value');
  let formabassein = $('#step2').find('.type-bassein.active').find('input[type="radio"]').attr('value');
  let razmerbasseina = $('#razmer input').val();
  let placebasseina = $('#place input').val();
  let raspolojenie = $('#step5').find('.type-bassein.active').find('input[type="radio"]').attr('value');
  let colorbassein = $('#step6').find('.type-bassein.active').find('input[type="radio"]').attr('value');
  let oborydovaniebassein = $('#step7').find('.type-bassein.active').find('input[type="radio"]').attr('value');
  let attrakcioni = $('#step8').find('.type-bassein.active').find('input[type="radio"]').attr('value');
  let variant = $('#step9').find('.type-bassein.active').find('.variant').text();
  let start = $('#step10').find('.type-bassein.active').find('.start').text();
  let quizarray = {
        typebassein: typebassein,
        formabassein: formabassein,
        razmerbasseina: razmerbasseina,
        placebasseina: placebasseina,
        raspolojenie: raspolojenie,
        colorbassein: colorbassein,
        oborydovaniebassein: oborydovaniebassein,
        attrakcioni: attrakcioni,
        variant: variant,
        start: start
      }
    $('.kviz').hide();
    $('.kviz.last').show().find('.quiz').addClass('active');
  console.log(quizarray);
  
})


$('#place').submit(function (e) {
    console.log(1);
    e.preventDefault();
    let place = $('input').val();
    $.ajax({
        type: 'POST',
        url: 'quiz.php',
        data: place,
        success: (data) => {
          console.log(data);
          
        },
        error: () => console.log('Ошибка отправки.')
    });
  

  });


$('#next').click(function(e){
  e.preventDefault();
  let nextItem = $('.quiz.active').next();

  if($('.quiz.active').hasClass('step10')) {
    $('.evenly').addClass('none')
  }
  if(nextItem.hasClass('quiz')) {
    $('.quiz.active').removeClass('active');
    nextItem.addClass('active');

  }
  nextItem.parent().find('.progress-bar').addClass('procent1');
  $('.step2.active').parent().find('.progress-bar').addClass('procent1');
  $('.step3.active').parent().find('.progress-bar').addClass('procent2');
  $('.step4.active').parent().find('.progress-bar').addClass('procent3');
  $('.step5.active').parent().find('.progress-bar').addClass('procent4');
  $('.step6.active').parent().find('.progress-bar').addClass('procent5');
  $('.step7.active').parent().find('.progress-bar').addClass('procent6');
  $('.step8.active').parent().find('.progress-bar').addClass('procent7');
  $('.step9.active').parent().find('.progress-bar').addClass('procent8');
  $('.step10.active').parent().find('.progress-bar').addClass('procent9');
})
$('#prev').click(function(e){
  e.preventDefault();
  let prevItem = $('.quiz.active').prev();
  if(prevItem.hasClass('quiz')) {
    $('.quiz.active').removeClass('active');
    prevItem.addClass('active');
  }
  $('.step1.active').parent().find('.progress-bar').removeClass('procent1');
  $('.step2.active').parent().find('.progress-bar').removeClass('procent2');
  $('.step3.active').parent().find('.progress-bar').removeClass('procent3');
  $('.step4.active').parent().find('.progress-bar').removeClass('procent4');
  $('.step5.active').parent().find('.progress-bar').removeClass('procent5');
  $('.step6.active').parent().find('.progress-bar').removeClass('procent6');
  $('.step7.active').parent().find('.progress-bar').removeClass('procent7');
  $('.step8.active').parent().find('.progress-bar').removeClass('procent8');
  $('.step9.active').parent().find('.progress-bar').removeClass('procent9');
  //$('.quiz.active').prev().addClass('active').siblings('.quiz').removeClass('active'); 
})


$('.work-ul__elem').click(function(){
  $(this).addClass('active').siblings().removeClass('active');
})

$(document).ready(function(){
  $('.owl-carousel-first').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items:5,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },

        1000:{
            items:1.2
        }
    }
  });

});

var ocs = $('.owl-carousel-second')
ocs.owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  items:5,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      768:{
        items:2
      },
      1000:{
          items: 2
      }
      
  }
})


let x = $($('.owl-item.active')[1])

$('.owl-carousel-second').find(x).next().animate({
  opacity: 0.5,
  padding: "50px",
  transition: "ease"
});


console.log($('.owl-item.active:eq(1)'));

var bs = $('.bs');
for(i = 0; i < bs.length; i++) {
  bs[i].onclick = function(){
      $(this).addClass('activeb');
      $(this).parent().siblings().find('.bs').removeClass('activeb');
  }
}

$('.calling-elem-1').hide();

jQuery('.bs').on('click',function() { 
  jQuery('.calling-item').hide();
  let filter = jQuery(this).attr('data-toggle');
  let visiblecallingitem = jQuery('.calling-item.' + filter);
  visiblecallingitem.show();

  
})

$('.wdrop').on('click', function(){
  $(this).toggleClass('roate');
  $('.whats-up__dropdown').toggleClass('active');
})



// //Кнопки
// $('.header-button .button-img').mousedown(function(){
//   console.log('1');
//   $(this).animate({
//     boxShadow: "0 -7px 0 0 #3e80c5"
//   })
// })

