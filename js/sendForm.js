let sendFormFunc = () => {
    const form = document.querySelector('.modal')
    const header = form.querySelector('.modal__header')

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const text = form.querySelector('input[type=text]')
        const tel = form.querySelector('input[type=tel]')
        const email = form.querySelector('input[type=email]')

        const sendObj = {
            name: text.value,
            phone: tel.value,
            email: email.value
        }

        fetch('https://jsonplaceholder.cypress.io/posts', {
            method: 'POST',
            body: JSON.stringify(sendObj),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(() => {
                console.log('Отправлено');
                text.value = ''
                tel.value = ''
                email.value = ''
                header.textContent = 'Ваша заявка получена!'
            })


    })
}

sendFormFunc()