const menuicon = document.querySelector('#header > #menuicon')
const navmenu = document.querySelector('#header > #navmenu')
const menuItem = document.querySelectorAll ('#header > #navmenu > li')



function EventHandler(e){
    navmenu.classList.add('on')
}

function EventHandler2(e){
    navmenu.classList.remove('on')
}

menuicon.addEventListener('mouseover', EventHandler)
navmenu.addEventListener('click', EventHandler2)