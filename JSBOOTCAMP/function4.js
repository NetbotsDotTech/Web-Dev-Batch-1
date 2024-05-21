function LoginUserMassage(username){
    if(username===undefined){
       console.log("please enter username ")
       return
    }
    return '${ username } just logged in'
}
console.log(LoginUserMassage())