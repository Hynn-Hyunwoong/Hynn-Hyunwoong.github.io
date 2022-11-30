const menuicon = document.querySelector('#header > #menuicon')
const navmenu = document.querySelector('#header > #navmenu')
const menuItem = document.querySelectorAll ('#header > #navmenu > li')
const ContactDB = document.querySelector('#Contact_input')
const Name = document.querySelector('#con_name')
const Email = document.querySelector('#con_mail')
const Subject = document.querySelector('#con_subject')
const Body = document.querySelector('#con_body')
const btn = document.querySelector('.btn')

function EventHandler(e){
    navmenu.classList.add('on')
}

function EventHandler2(e){
    navmenu.classList.remove('on')
}

function EventHandler3(e){
    console.log('hello')
    if (Name.value == '', Email.value == '',Subject.value == '',Body.value == '') {
        alert('Please Insert your Information')
    }else {
        alert('Thanks for Contact Hynn, We will soon update your Contact Information')       
    }
    }   

btn.addEventListener('click', EventHandler3)

menuicon.addEventListener('click', EventHandler)
navmenu.addEventListener('click', EventHandler2)