const inputEmail = document.querySelector("#inputEmail");
const btnSubscribe = document.querySelector("#btnSubscribe");
const msgInvalid = document.querySelector("#msgInvalid");
const container = document.querySelector("#container");
const containerSucess = document.querySelector("#container-sucess");
const btnDimiss = document.querySelector("#btnDimiss");
const confirmedEmail = document.querySelector("#confirmed");

//funcoes

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function showOrHide() {
    container.classList.toggle("hide");
    containerSucess.classList.toggle("hide");
}

//eventos
btnSubscribe.addEventListener("click", (e) => {
    e.preventDefault();
    const email = inputEmail.value;
    if (validateEmail(email)) {
        console.log(email);
        msgInvalid.classList.add("hide");
        inputEmail.classList.remove("email-invalid");
        confirmedEmail.textContent = `${email}`;
        showOrHide();
    } else {
        console.log("email.invalido");
        msgInvalid.classList.remove("hide");
        inputEmail.classList.add("email-invalid");
    }
});

btnDimiss.addEventListener("click", (e) => {
    console.log("teste");
    showOrHide();
});
