// Register

$('.form').submit(function (e) {
    let a = document.forms['registration-form']['password'].value;
    let b = document.forms['registration-form']['password-retyped'].value;

    if (a != b) {
        alert('Passwords do not match!');
        return false;
    }
});