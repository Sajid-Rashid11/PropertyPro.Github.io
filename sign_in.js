function resetClass(element, classname){
    element.classList.remove(classname);
}

document.getElementsByClassName('show_sign_up')[0].addEventListener("click", function(){
    const form=document.getElementsByClassName("form")[0];
    resetClass(form, 'signin');
    resetClass(form, 'adminlogin');
    form.classList.add('signup');
    document.getElementById("submit").innerHTML = "Sign Up<i class='fa-solid fa-right-to-bracket'></i>";
});

document.getElementsByClassName('show_sign_in')[0].addEventListener("click",function(){
    const form=document.getElementsByClassName('form')[0];
    resetClass(form, 'signup');
    resetClass(form,'adminlogin');
    form.classList.add('signin');
    document.getElementById("submit").innerHTML = "Sign In<i class='fa-solid fa-right-to-bracket'></i>";
});

document.getElementsByClassName('show_admin_login')[0].addEventListener('click',function(){
    const form=document.getElementsByClassName('form')[0];
    resetClass(form,'signup');
    resetClass(form,'signin');
    form.classList.add('adminlogin');
    document.getElementById("submit").innerHTML = "Login In as Admin <i class='fa-regular fa-id-badge'></i>";
});