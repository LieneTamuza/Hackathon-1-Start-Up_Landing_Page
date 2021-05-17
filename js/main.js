// Register

$('.form').submit(function (e) {
    let password = document.forms['registration-form']['password'].value;
    let passwordRetyped = document.forms['registration-form']['password-retyped'].value;

    if (password != passwordRetyped) {
        alert('Passwords do not match!');
        return false;
    }
});