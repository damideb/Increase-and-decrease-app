const click = document.getElementById('buttons')
let digit = document.getElementById('number')
const add = document.getElementById('increase')
const deduct = document.getElementById('decrease')
const start = document.getElementById('reset')

add.addEventListener("click", function(){
   digit.innerText++
})


deduct.addEventListener("click", function(){
   if(digit.innerText>0){
   digit.innerText--}
})

start.addEventListener("click", function(){
   digit.innerText =0
})






