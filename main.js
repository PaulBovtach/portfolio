

addEventListener('scroll', function(){
    var scrollPos = window.pageYOffset;
    console.log(scrollPos)
    const hrefs = document.querySelectorAll('.href_header')
    if(650 > scrollPos > 0){
        hrefs[0].classList.add('active')
    }else{
        hrefs[0].classList.remove('active')
    }
})
addEventListener('scroll', function(){
    var scrollPos = window.pageYOffset;
    const hrefs = document.querySelectorAll('.href_header')
    if(scrollPos > 650){
        hrefs[1].classList.add('active')
    }
    else if(scrollPos < 650){
        hrefs[1].classList.remove('active')
    }
})

addEventListener('scroll', function(){
    var scrollPos = window.pageYOffset;
    const hrefs = document.querySelectorAll('.href_header')
    if(scrollPos > 1350){
        hrefs[1].classList.remove('active')
    }
})

https://irynabovtachbakery.github.io/home/
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
