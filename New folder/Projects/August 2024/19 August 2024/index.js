// document.addEventListener('DOMContentLoaded',()=>{
//     const loginForm=document.getElementById('loginForm')
//     loginForm.addEventListener('submit',(e)=>{
//         e.preventDefault();

//         const firstName=document.getElementById('firstName').value;
//         const lastName=document.getElementById('lastName').value;
//         const UserName=document.getElementById('userName').value;
//         const email=document.getElementById('email').value;
//         const Password=document.getElementById('password').value;
//         const ConfirmPassword=document.getElementById('confirmPassword').value;

//         if(firstName&&lastName&&UserName&&email&&Password){

//             alert(`FirstName:${firstName}\nLastName:${lastName}\nUserName:${UserName}\nEmail:${email}\nPassword:${Password}\nConfirmPassword:${ConfirmPassword}`)
//         }
//         else{
//             alert('Please fill in all feilds')
//         }
//     })
// })




document.addEventListener("DOMContentLoaded",()=>{
    const loginForm=document.getElementById("loginForm")
    loginForm.addEventListener("submit",(e)=>{
        e.preventDefault()
        const firstName=document.getElementById("firstName").value
        const lastName=document.getElementById("lastName").value
        const userName=document.getElementById('userName').value
        const email=document.querySelector("#email").value
        const password=document.getElementById('password').value
        const confirmPassword=document.getElementById("confirmPassword").value
        if(firstName&&lastName&&userName&&email&&password===confirmPassword){

            alert(`FirstName:${firstName}\nLastName:${lastName}\nUserName:${userName}\nEmail:${email}\nPassword:${password}\nConfirmPassword:${confirmPassword}`)
        }else{
            alert("Something went Wronge")
        }
    })
})
 




























