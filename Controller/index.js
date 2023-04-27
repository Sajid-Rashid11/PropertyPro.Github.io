const sign_up=document.querySelector(".show_sign_up")
const sign_in=document.querySelector(".show_sign_in")
const signUp_Btn=document.getElementById("submit")
const signIn_Btn=document.getElementById("sign_in_btn")
const confirmpass=document.getElementById("confirm_password")
const userform=document.querySelector(".form-ele")
const user_name=document.getElementById("name")

sign_up.addEventListener('click', function(){
    signUp_Btn.style.display='block'
    signIn_Btn.style.display='none'
    confirmpass.style.display='block'
    user_name.style.display='block'
    confirmpass.style.marginLeft = (userform.offsetWidth - confirmpass.offsetWidth) / 2 + "px";
    user_name.style.marginLeft = (userform.offsetWidth - user_name.offsetWidth) / 2 + "px";
    signUp_Btn.style.marginLeft = (userform.offsetWidth - signUp_Btn.offsetWidth) / 2 + "px";

})

sign_in.addEventListener('click', function(){
    signIn_Btn.style.display='block'
    signUp_Btn.style.display='none'
    confirmpass.style.display='none'
    user_name.style.display='none'
    signIn_Btn.style.marginLeft = (userform.offsetWidth - signIn_Btn.offsetWidth) / 2 + "px";

})

