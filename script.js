'use strict'

// On selecton le formulaire à valider
var rform = document.forms.regisForm
var form = document.querySelector('.needs-validation')

// On bloque sa soumission tant que l'un des inputs ne satisfait pas les critères de validation
form.addEventListener('submit', validateForm, false)

// Ici on spécifie les critères de validation au cas par cas
function validateForm(event) {
    let pass = document.getElementsByClassName('pass')
    let passHint = document.getElementsByClassName('pass-hint')
    let submitBtn = document.querySelector("#submit")
    let emailHint = document.querySelector("#emailHelp")
    let correctEmail = /[@.]/.test(document.querySelector("#InputEmail").value)
    let isFormClean = true;

    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')

    // On vérifie si l'email est au bon format
    if (!correctEmail) {
        event.preventDefault()
    }

    // On change dynamiquement le style (ajout/rétraction) des champs de mot de passe en fonction de leurs validités
    for (let c = 0; c < pass.length; c++) {
        if (!checkPassword(pass[c]) || pass[0].value !== pass[1].value) {
            pass[c].classList.remove("is-valid")
            pass[c].classList.add("is-invalid")
            pass[c].classList.add("invalid")
            pass[c].classList.add("border-danger")
            pass[c].style.backgroundImage = "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\")";
            event.preventDefault()
        } else {
            pass[c].classList.remove("is-invalid")
            pass[c].classList.add("is-valid")
            pass[c].classList.add("valid")
            pass[c].classList.remove("border-danger")
            pass[c].style.backgroundImage = ""
        }
    }
}

// Cette fonction permet de faire une permuttation entre la visibilité du mot de passe en jouant avec son attribut 'type'
function toggleVisibility(inputField, eyeIcon) {
    document.querySelector(eyeIcon).classList.toggle("is-visible")
    if (document.querySelector(inputField).type == "password") {
        document.querySelector(inputField).type = "text"
    } else {
        document.querySelector(inputField).type = "password"
    }
}

// On définie les critères de validation du mot de passe (longeur,charactères spéciaux,..)
function checkPassword(inputField) {
    var correctPassword = /[@?&#$%-+=^!~]/.test(inputField.value);
    let ls = inputField.parentNode
    if (!correctPassword || inputField.value.length < 10) {
        return false
    }
    return true
}