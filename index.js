
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q",
    "R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2",
     "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
     "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let boxLeft = document.getElementById("boxleft")
let boxRight = document.getElementById("boxright")
let randomIndexOne = Math.floor(Math.random() * characters.length)
let randomIndexTwo = Math.floor(Math.random() * characters.length)

const copiedMessage = document.getElementById("copiedMessage")

function generate() {
    boxLeft.textContent = ""
    boxRight.textContent = ""
    for (let i = 0 ; i < 15 ; i++) {
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        let randomIndexTwo = Math.floor(Math.random() * characters.length)
        boxLeft.textContent += characters[randomIndexOne]
        boxRight.textContent += characters[randomIndexTwo]
        

    }
    

}


function showCopiedMessage() {
    copiedMessage.classList.add("show")

    setTimeout(() => {
        copiedMessage.classList.remove("show")
    }, 1500)
}

boxLeft.addEventListener("click", function() {
    navigator.clipboard.writeText(boxLeft.textContent)
    showCopiedMessage()
})

boxRight.addEventListener("click", function() {
    navigator.clipboard.writeText(boxRight.textContent)
    showCopiedMessage()
})


