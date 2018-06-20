(function($){
    $('#submit-btn').on('click', function (e) {

        e.preventDefault();

        const url = 'http://167.99.77.175:2999/login';
        // const url = 'http://167.99.77.175:2999/company/list';
        const username = $('#username').val();
        const password = $('#password').val();
        const $error = $('#error');
        let data;

        console.log(username);
        console.log(password)

        if (!username) {
            // $error.html('Username is required');
            showError('Username is required');
            return;
        }

        if (!password) {
            // $error.html('Password is required');
            showError('Password is required')
            return;
        }

        data = JSON.stringify({
            
            username: username,
            password: password
        });
        console.log(data);

        

        $.ajax({
            url,
            type: 'POST',
            data: data,
            contentType: "application/json",
            success: function (data, status) {
                
                if(data.code === 200) {

                    localStorage.setItem('jwt-token', data.content.token);
                    goToDashboard();

                } else {
                    showError(data.reason);
                }

            },
            error: function (err) {
                
                const msg = err.statusText || err.responseText ;
                showError(msg);
            }
        })

        // fetch(url, { 
            
        //     method: 'GET'
        //  })
        //     .then(res => console.log(res))
        //     .catch(e => console.log(e));

        function showError(msg) {
            $error.html(msg);
        }

    })
})(jQuery)

function goToDashboard() {
    location.replace('/');
}