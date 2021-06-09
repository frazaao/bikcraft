const menu = document.querySelectorAll("#menu")

const nav = document.querySelector("#nav")

const navigation = document.querySelector("nav")

nav.addEventListener("click", function(event){
    clickMenu();    
})

function clickMenu() {   

    navigation.classList.toggle("navigator")
    navigation.classList.toggle("disabled")

    

    // menu.forEach(toggleView)

    // function toggleView(obj){         

    //     obj.classList.toggle("disabled")  
        
    // }
}