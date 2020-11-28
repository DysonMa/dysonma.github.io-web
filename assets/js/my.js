function playTextAnimation(tag){
    var introDiv = $(`#intoduction .${tag}`).text()
    var charArray = introDiv.split(" ")

    // map()也可放index
    function divWrapper(x, index){
    return `<div class=${tag} style="animation-delay:${index/2}s">${x}&nbsp;</div>`
    }
    var result = charArray.map(divWrapper).join(" ")
    $(`#intoduction .${tag}`).html(result)
}

playTextAnimation('text')
playTextAnimation('text2')

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if( scroll >= 200){
      $("#intro").css('filter','blur(10px)')
      $('.nav-menu a').css('color','#FFFFFF')
      $('.nav-menu .drop-down ul').css('background','rgba(0,0,0,1)')

      
      // $('.nav-menu a').hover(function(){
      //   $(this).css('color','#5CADAD')
      // })
    //   box-shadow:0 0 1px 1px rgba(0,150,200,1);
    //   $("#navbar").removeClass("navbarInitial")
      
      // playTextAnimation()
      // playInfoAnimation()
    }
    // else if(scroll = 150){
    //   playTextAnimation()
    //   return 
    // }
    else{
      $("#intro").css('filter','blur(0px)')
      $('.nav-menu a').css('color','rgba(0,0,0,0.6)')
      $('.nav-menu .drop-down ul').css('background','#FFF')
    }
  });