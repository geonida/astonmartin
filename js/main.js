$('body').on('mousewheel',function(e,d){
    

    if(d>0){
      $('#wrap').stop().animate({'top':0},1500,'easeOutExpo')
    }else if(d<0){
        $('#wrap').stop().animate({'top' : '-100%'},2000,'easeOutExpo')
    }
})

$('.list p').on('click',function(){
  let i = $(this).index();
  $('.image').eq(i).show().siblings().hide();

  $('.video').children().eq(i).show().siblings().hide();

  let vid= $('.video').children().eq(i).get(0);

  vid.play();
  vid.currentTime = 0;

})

$('.list p').on('click',function(){
  let txt = $(this).text();

  $('main').removeClass().addClass(txt);
 
})

