// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })

    var form = document.getElementById('form');
    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch(form.action, {
            method: "POST",
            body: new FormData(document.getElementById("form")),
        }).then(
            response => response.json()
        ).then((html) => {
            // you can put any JS code here
            alert('ส่งข้อมูลสำเร็จ')
        });

        //line message push
        fetch('https://api.line.me/v2/bot/message/push', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ZRweCbPe5aUf5E1HG9ma+Me7ve9PdF9eeSIBevafHRMxHrXVeXNIFKDQgg9sYYZZP/tXGYNvpZd9babQrCt8bB9PzzeMSe49ydE6MGZU/mWPyD9pBYLVEmOqKJUKk+1/kWkANqE1k50DQHTXAb42VAdB04t89/1O/w1cDnyilFU='
            }
            ,
            body: JSON.stringify({
                "to": "U50f2726d03fb8e8b0f6b424eaaf0bf54",
                "messages": [
                    {
                        "type": "text",
                        "text": "มีคนส่งข้อมูลแล้ว"
                    }
                ]
            })

        }).then(
            response => response.json()
        ).then((html) => {
            // you can put any JS code here
            alert('ส่งข้อมูลสำเร็จ')
        }
        );


    });
})()