const pwd = document.querySelector('#pwd');
const pwdConf = document.querySelector('#pwd-conf');

const pwdCheck = function(pss){
    return pss.value
}


const confirm = function(){   
    const textConfirm = document.querySelector("#pwd-conf~p")
    if (pwdCheck(pwd) !== pwdCheck(pwdConf)) {
        textConfirm.textContent = "passwords do not match"
        pwdConf.style.border = "1px solid red";
    } else {
        textConfirm.textContent = ""
        pwdConf.style.border = "1px solid #E5E7EB"
    }
    textConfirm.style.color = 'red';
    textConfirm.style.fontSize = "0.7rem";
    textConfirm.style.textTransform = 'uppercase';
}

pwdConf.addEventListener(`input`, confirm)
pwd.addEventListener(`input`, confirm)