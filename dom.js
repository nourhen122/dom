var plusBtn = document.querySelectorAll('.plus')
console.log(plusBtn)
var minusBtn = document.querySelectorAll('.minus')
var tab = document.querySelectorAll('.price')
var total = document.getElementById('total')
console.log(total)
console.log(tab)
    

// var zéro = document.querySelectorAll('p')
// console.log(zéro)

function handleButton(event){
var specificBtn = event.target
// console.log(specificBtn)
var diiiv= specificBtn.parentElement 
// console.log(diiiv)
var numéro= diiiv.querySelector('p').innerHTML
// console.log(numéro) 
var num=Number(numéro)
if(specificBtn.className==="minus"&&num>0){
    num--
}
if(specificBtn.className==="plus"){
num++
}
diiiv.querySelector('p').innerHTML = num
// console.log(num)

var trr= diiiv.parentElement
var tdd=trr.parentElement
var price = tdd.querySelector('.price').innerHTML
var up = tdd.querySelector('.unitPrice').innerHTML
var num1 = Number(up)
var num2 = Number(price)
num2= num1*num
tdd.querySelector('.price').innerHTML = num2

// var tddd = tddd.querySelector('#total').innerHTML

var somme = 0;
for (let i = 0; i < tab.length; i++) {
    console.log(tab[i].innerHTML)
    var n =Number(tab[i].innerHTML)
    somme += n
    
}
console.log(somme)
total.innerHTML=somme
}


for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener('click',handleButton)
     
}
for (let i = 0; i < minusBtn.length; i++) {
    minusBtn[i].addEventListener('click',handleButton)
    
} 
var like = document.querySelectorAll('.like')
console.log(like)
for (let i = 0; i < like.length; i++) {
    like[i].addEventListener('click',likeBtn)  
}
 function likeBtn(e){
     var specificHeart = e.target;
     console.log(specificHeart)
     if (specificHeart.style.color==="red"){
         specificHeart.style.color="grey"
     }else specificHeart.style.color="red"
 }

