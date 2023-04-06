let string = ""
let btn = document.querySelectorAll(".btn")
Array.from(btn).forEach((button) => {
    button.addEventListener("click", (e) => {
        if(e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector(".input").value = string
        } else if(e.target.innerHTML == "AC") {
            string = ""
            document.querySelector(".input").value = string
        } else if(e.target.innerHTML == "DEL") {
            string = string.slice(0,-1); // removes the last digit from the number
            document.querySelector(".input").value = string
        } else {
            string = string + e.target.innerHTML
            document.querySelector(".input").value = string
        }
        
    })
})