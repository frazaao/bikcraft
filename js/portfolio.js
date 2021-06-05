
const btn = document.querySelector("#slide")

const a = btn.querySelectorAll(".slide-btn")

var img = document.querySelector(".portfolio")

function addListener(a){
    a.addEventListener("click", function(event){
        event.target.classList.toggle("active")

            img.childNodes.forEach(function(element){

                if(element.nodeType === 1){
                    element.classList.toggle("grid1")
                    element.classList.toggle("grid2")
                }
            
            })       
            
        
    })
}

a.forEach(addListener)
