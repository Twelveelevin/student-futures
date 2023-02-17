function navbarToggle(){
    var state = false
    var iconOpen = document.querySelector(".side-bar-icon i")
    var darkSkin = document.querySelector(".nav-link .dark-skin")
    var sideBarNav = document.querySelector(".nav-link ul")
    var iconClose = document.querySelector(".nav-link .close-icon i")

    iconOpen.addEventListener("click", function(){
        if(state == false){
            state = true
            darkSkin.style.display = "block"
            sideBarNav.style.left = "0px"
        }
    })

    iconClose.addEventListener("click", function(){
        if(state == true){
            state = false
            darkSkin.style.display = "none"
            sideBarNav.style.left = "-75%"
        }
    })
    
}





navbarToggle()