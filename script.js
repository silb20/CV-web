////////   VALIDACION DE FORMULARIO   //////////////

//DOM ELEMENTS

const NAME = document.getElementById('f_name');
const SURNAME = document.getElementById('f_surname');
const EMAIL = document.getElementById('f_email');
const PHONE = document.getElementById('f_phone');
const COMMENT = document.getElementById('f_comment');
const BTN_SUBMIT = document.getElementById('button_submit');

const FORM_LABELS = document.querySelectorAll('.form-label');
const FORM = document.getElementById('contact-form');

function validateForm() {
    let name = validateInput(NAME, 'text');
    let surname = validateInput(SURNAME, 'text');
    let email = validateInput(EMAIL, 'email');
    let phone = validateInput(PHONE, 'phone');
    let comment = validateInput(COMMENT, 'text');

    console.log(name, surname, email, phone, comment)

    if (!name || !surname || !email || !phone || !comment) {
        return false;
    }

    return true;
}


function validateInput(source, type) {
    let value = source.value;
    let valid = false;

    switch (type) {
        case 'text':
            valid = validateText(value)
            break;
        case 'email':
            valid = validateEmail(value)
            break;
        case 'phone':
            valid = validateNumber(value)
            break;
        default:
            valid = validateText(value)
            break;
    }

    setInputError(source, valid);

    return valid;
}

function validateText(value) {
    let text = value.trim();
    while (text.indexOf('  ') != -1) {
        text = text.replaceAll('  ', ' ');
    }
    if (text.length < 3) {
        return false;
    }
    return true;
}

function validateEmail(email) {
    if (!email || email.indexOf(' ') != -1 || email.indexOf('@') === -1 || email.indexOf('.', email.indexOf('@')) === -1) {
        return false;
    }
    return true;
}

function validateNumber(number) {
    if (number.length < 9) {
        return false;
    }
    return true;
}

function setInputError(source, valid) {
    let error = document.getElementById(`${source.id}-error`);
    let text = '';

    if (!valid) {
        if (source === NAME || source === SURNAME || source === COMMENT) {
            if (source === NAME) {
                word = 'nombre';
            } else if (source === SURNAME) {
                word = 'apellido'
            } else {
                word = 'mensaje'
            }
            text = `Introduce un ${word} de más de 3 caracteres`
        } else if (source === EMAIL) {
            text = 'Introduce un e-mail válido'
        } else if (source === PHONE) {
            text = 'Introduce un número de teléfono válido'
        }
        error.textContent = text;
        error.style.color = 'crimson';
    } else {
        error.textContent = '';
        error.style.color = '';
    }
}


FORM.addEventListener('submit', function (event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

////// AUTO HIDE MENU  //////
const ITEMS = document.querySelectorAll('.menu-item');
const CK_MENU = document.getElementById('ck_menu');

for (const element of ITEMS) {
    element.onclick = () => {CK_MENU.checked = false}    
}
