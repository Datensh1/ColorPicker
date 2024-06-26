
let sum  = 0

let saveEl = document.getElementById("save-el")
let sumEl = document.getElementById("sum-el")


function adds() {
    sum += 1
   
    if(sum >= 100){
        sum = 0
  
    }
    sumEl.textContent = sum 
}

function minus() {

    sum += -1
    if(sum <=0){
        sum = 0
    }
    sumEl.textContent = sum

}
function saves(){
let sumStr = sum + "  - "

saveEl.textContent += sumStr
sumEl.textContent = 0
sum = 0

}
function saves(){
  
    if(sum >= 8 ){
        word = + sum + "congrats!"
    } else if(sum <=8){
        word = + sum + "Drink more water!"
    }
    saveEl.textContent += word
    
}
function delet() {
    sum = 0
    zero = 0
    let word ="previous entry"
    let sumStr = word
    sumEl.textContent = zero
saveEl.textContent = sumStr
}

function add(sum) {
    let word;
    if( sum ==100){

        word = "error";
    } return word;}