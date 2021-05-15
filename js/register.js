$(function() {
    let $registerForm = $("#validation-form");
    if ($registerForm.length) {
        $registerForm.validate({
            rules: {
                fName: {
                    required: true,
                },
                lName: {
                    required: true,
                },
                inputUsername: {
                    required: true,
                    minlength: 3
                },
                exampleInputPassword1: {
                    required: true,
                    minlength: 9
                },
                exampleInputPassword2: {
                    required: true,
                    minlength: 9,
                    equalTo: '#exampleInputPassword1'
                },
                
            },
            messages: {
                inputUsername: {
                    required: 'Username is missing!'
                },
                exampleInputPassword1: {
                    required: 'Password is missing!'
                },
                exampleInputPassword2: {
                    equalTo: 'Your passwords dont match!'
                },
                fName: {
                    required: 'First name is missing!',
                },
                lName: {
                    required: 'Last name is missing!',
                },
            }
        })
    }
})