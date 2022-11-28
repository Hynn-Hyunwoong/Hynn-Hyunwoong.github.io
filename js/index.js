const menuM = querySelector('#header > #navmenu')

EventHandler(e){
    console.log('hello')
}

menuM.appEventsListeners.mouseover(EventHandler)