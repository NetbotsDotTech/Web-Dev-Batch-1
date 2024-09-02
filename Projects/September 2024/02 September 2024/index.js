const passwordBox=document.querySelector("#password")
const length=12;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ "
const lowerCase=" abcdefghijklmnopqrstuvwxyz"
const number="1234567890"
const char="~`!@#$%^&*()_+=><?/.,|\""
const allChar=upperCase+lowerCase+number+char
function createPassword(){
    let password='';
    password+=char[Math.floor(Math.random()*char.length)]
    password+=upperCase[Math.floor(Math.random()*upperCase.length)]
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    password+=char[Math.floor(Math.random()*char.length)]

    while(length>password.length){
        password+=allChar[Math.floor(Math.random()*allChar.length)]

    }
    passwordBox.value=password
}