const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const img_icon_nome = document.getElementById("img-icon-nome");
const img_icon_email = document.getElementById("img-icon-email");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();

  if (nomeValue === "") {
    img_icon_nome.style.visibility = "visible";
    changeIcons(img_icon_nome, "imagens/error.svg");
    errorValidation(nome);
  } else {
    img_icon_nome.style.visibility = "visible";
    changeIcons(img_icon_nome, "imagens/success.svg");
    successValidatio(nome);
  }

  if (emailValue === "") {
    img_icon_email.style.visibility = "visible";
    changeIcons(img_icon_email, "imagens/error.svg");
    errorValidation(email);
  } else {
    img_icon_email.style.visibility = "visible";
    changeIcons(img_icon_email, "imagens/success.svg");
    successValidatio(email);
  }
}

function changeIcons(input, iconType) {
  input.src = iconType;
}

function errorValidation(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control error";
}

function successValidatio(input) {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
}
