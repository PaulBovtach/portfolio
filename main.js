

addEventListener('scroll', function(){
    var scrollPos = window.pageYOffset;
    const hrefs = document.querySelectorAll('.href_header')
    if(900 > scrollPos > 0){
        hrefs[0].classList.add('active')
    }else{
        hrefs[0].classList.remove('active')
    }
})
addEventListener('scroll', function(){
    var scrollPos = window.pageYOffset;
    const hrefs = document.querySelectorAll('.href_header')
    if(scrollPos > 900){
        hrefs[1].classList.add('active')
    }
    else if(scrollPos < 900){
        hrefs[1].classList.remove('active')
    }
})

addEventListener('scroll', function(){
    var scrollPos = window.pageYOffset;
    const hrefs = document.querySelectorAll('.href_header')
    if(scrollPos > 1700){
        hrefs[1].classList.remove('active')
    }
})

addEventListener('scroll', function(){
    var scrollPos = window.pageYOffset;
    const hrefs = document.querySelectorAll('.href_header')
    if(scrollPos > 1700){
        hrefs[2].classList.add('active')
    }
    else if(scrollPos < 1700){
        hrefs[2].classList.remove('active')
    }
})






const hrefs = document.querySelectorAll('.href_header')

hrefs[0].addEventListener('click', function(){
    scrollTo(0, 0)
})
hrefs[1].addEventListener('click', function(){
    scrollTo(0, 1100)
})
hrefs[2].addEventListener('click', function(){
    scrollTo(0, 1800)
})


var project1 = document.querySelector('.cards1')
var project2 = document.querySelector('.cards2')
var project3 = document.querySelector('.cards3')
var project4 = document.querySelector('.cards4')

project1.addEventListener('click', function(){
    location.href = "https://paulbovtach.github.io/tvoyaosela/"
})
project2.addEventListener('click', function(){
    location.href = "https://paulbovtach.github.io/pauls_site/"
})
project3.addEventListener('click', function(){
    location.href = "https://paulbovtach.github.io/gamedesign/"
})
project4.addEventListener('click', function(){
    location.href = "https://irynabovtachbakery.github.io/home/"
})











/*INSTAGRAM*/

var instagram = document.querySelector('.instagram')
instagram.addEventListener('mouseover', function(){
    instagram.classList.add('active')
})
instagram.addEventListener('mouseout', function(){
    instagram.classList.remove('active')
})
instagram.addEventListener('click', function(){
    location.href = "https://www.instagram.com/paulbovtach074/"
})


/*TELEGRAM*/
var telegram = document.querySelector('.telegram')
telegram.addEventListener('mouseover', function(){
    telegram.classList.add('active')
})
telegram.addEventListener('mouseout', function(){
    telegram.classList.remove('active')
})
telegram.addEventListener('click', function(){
    location.href = "https://t.me/kote074"
})


/*GMAIL*/
var gmail = document.querySelector('.gmail')
gmail.addEventListener('mouseover', function(){
    gmail.classList.add('active')
})
gmail.addEventListener('mouseout', function(){
    gmail.classList.remove('active')
})
gmail.addEventListener('click', function(){
    var gmailAdress = "natanbov@gmail.com"
    navigator.clipboard.writeText('natanbov@gmail.com')
  .then(() => {}
  )
    var successGmail = document.querySelector('.succes_gmail')
    successGmail.classList.add('active')

    gmail.addEventListener('mouseout', function(){
        setTimeout(function(){
            successGmail.classList.remove('active')
        }, 400)
    })
    
})




/*PHONE*/
var phone = document.querySelector('.phone')
phone.addEventListener('mouseover', function(){
    phone.classList.add('active')
})
phone.addEventListener('mouseout', function(){
    phone.classList.remove('active')
})
phone.addEventListener('click', function(){
    var contexCall = document.querySelector('.contex_call')
    contexCall.classList.add('active')
})

var declineCall = document.querySelector('.decline_img')
declineCall.addEventListener('click', function(){
    var contexCall = document.querySelector('.contex_call')
    contexCall.classList.remove('active')
})
var callButton = document.querySelector('.call_button')
callButton.addEventListener('click', function(){
    location.href = "tel: +380999077122"
})







var clickMeImg = document.querySelector('.click_me_img')
clickMeImg.addEventListener('mouseover', function(){
    var click_MeInner = document.querySelector('.click_me_inner')
    click_MeInner.classList.add('active')
    clickMeImg.classList.add('active')
})

var click_Me = document.querySelector('.click_me')
var click_MeInner = document.querySelector('.click_me_inner')


    setInterval(function(){
        var click_MeInner = document.querySelector('.click_me_inner')
        click_MeInner.classList.remove('active')
        clickMeImg.classList.remove('active')
    }, 5000)




var telegramClickMe = document.querySelector('.telegram_logo_click_me')

telegramClickMe.addEventListener('click', function(){
    location.href = "https://t.me/kote074"
})




/*ANIMATION*/

var header = document.querySelector('.header_line')
var mainH1 = document.querySelector('.header_name_h1')
var mainP1 = document.querySelector('.header_name_p1')
var mainSummary = document.querySelector('.summary1')
var MainPhoto = document.querySelector('.main_photo');
window.onload = setTimeout(function(){
    mainH1.classList.add('active')
    mainP1.classList.add('active')
    mainSummary.classList.add('active')
    MainPhoto.classList.add('active')
    header.classList.add('active')
},270)





// Получаем нужный элемент
var MyWorks = document.querySelector('.my_works_wrapper_h1');

var Visible = function (target) {
  // Все позиции элемента
  var targetPosition = {
      top: window.pageYOffset + target.getBoundingClientRect().top,
      left: window.pageXOffset + target.getBoundingClientRect().left,
      right: window.pageXOffset + target.getBoundingClientRect().right,
      bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },
    // Получаем позиции окна
    windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

  if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
    targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
    targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
    targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
    // Если элемент полностью видно, то запускаем следующий код
     var addActive = (function addActive () {
        target.classList.add('active')
    })()


  } else {
    // Если элемент не видно, то запускаем этот код
    var removeActive = (function removeActive (){
        target.classList.remove('active')
    })()
  };
};

// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function() {
  Visible (MyWorks);
});




// Усі анімаціх при прокрутці
var MySkillsH1 = document.querySelector('.my_skills_h1');
var skill1 = document.querySelector('.skill1');
var skill2 = document.querySelector('.skill2');
var skill3 = document.querySelector('.skill3');
var contactMeH1 = document.querySelector('.contact_me_h1');





window.addEventListener('scroll', function() {
    Visible (mainH1);
  });

window.addEventListener('scroll', function() {
    Visible (mainP1);
  });


window.addEventListener('scroll', function() {
    Visible (mainSummary);
  });

window.addEventListener('scroll', function() {
    Visible (MySkillsH1);
  });

  window.addEventListener('scroll', function() {
    Visible (skill1);
  });
  
  window.addEventListener('scroll', function() {
    Visible (skill2);
  });

  window.addEventListener('scroll', function() {
    Visible (skill3);
  });


  window.addEventListener('scroll', function() {
    Visible (project1);
  });

  window.addEventListener('scroll', function() {
    Visible (project2);
  });
  
  window.addEventListener('scroll', function() {
    Visible (project3);
  });

  window.addEventListener('scroll', function() {
    Visible (project4);
  });



  window.addEventListener('scroll', function() {
    Visible (contactMeH1);
  });
  

