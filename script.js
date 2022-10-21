const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 80, slidesPerView: 5,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    
  });

  var sec = 0;
  function funkcija ( val ) { return val; }
  
  setInterval( function(){
      document.getElementById("value").innerHTML=funkcija(++sec%3000);
  }, 1);


  var sec = 0;
  function funkcij ( val ) { return val; }
  
  setInterval( function(){
      document.getElementById("value1").innerHTML=funkcij(++sec%20);
  }, 1);


  var sec = 0;
  function f ( val ) { return val; }
  
  setInterval ( function(){
      document.getElementById("value2").innerHTML=f(++sec%8);
  
  }, 1);



  var sec = 0;
  function funk ( val ) { return val; }
  
  setInterval ( function(){
      document.getElementById("value3").innerHTML=funk(++sec%170);
  }, 1);

  