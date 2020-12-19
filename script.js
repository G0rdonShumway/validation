let phoneError = 'Телефон должен содержать от 7 до 11 цифр!',
    emailError = 'Введите Email в формате example@example.com!',
    passError = 'Пароль должен состоять из 8-15 символов и содержать минимум 1 число, 1 заглавную и 1 строчную букву!';
let error = document.createElement('span');
error.style.color = 'red';
error.style.display = 'block';

document.getElementById('img').addEventListener('mousedown', function () {
    document.getElementById('pass').setAttribute('type', 'text');
    document.querySelector('path').setAttribute('fill', 'yellow');
    document.querySelector('#pass').style.borderColor = 'yellow';
});
document.getElementById('img').addEventListener('mouseup', function () {
    document.getElementById('pass').setAttribute('type', 'password');
    document.querySelector('path').setAttribute('fill', 'black');
    document.querySelector('#pass').style.borderColor = '#ccc';
})

let regPhone = /^(\d{7,11})$/,
    regMail = /\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/,
    regPass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}/;
let errorCount = false;

function validate(reg, field, errorText) {
    if (reg.test(document.querySelector('#' + field + '').value)) {
        document.querySelector('#' + field + '').setAttribute('style', 'background:#9aff9a;border-color:#9aff9a');
        if (document.querySelector('[for*=' + field + '] + span')) {
            document.querySelector('[for*=' + field + '] + span').remove();
        }
        errorCount = true;
    } else {
        document.querySelector('#' + field + '').setAttribute('style', 'background:#ff8f8f;border-color:#ff8f8f');
        if (!document.querySelector('[for*=' + field + '] + span')) {
            let error = document.createElement('span');
            error.textContent = errorText;
            error.setAttribute('style', 'color:red;display:block');
            document.querySelector('[for*=' + field + ']').after(error);
        }
        errorCount = false;
    }
}

document.querySelector('form').addEventListener('submit', function () {
    validate(regPhone, 'phone', phoneError);
    validate(regMail, 'email', emailError);
    validate(regPass, 'pass', passError);
    if (errorCount) {
        document.querySelector('form').remove();
        document.querySelector('.wrapper').innerHTML = '<h1>Данные заполнены верно</h1>';
    }
    return false;
});
