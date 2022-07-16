const sendForm = () => {
    const form = document.querySelector('.rf form[name="form-callback"]')
    const formInput = form.querySelectorAll('.form-control')
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Данные отправлены'

    const validate = (list) => {
        let success = true

        list.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false
            }
        })

        return success
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm = () => {
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (validate(formInput)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText

                    formInput.forEach(input => {
                        input.value = ''
                    })
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            statusBlock.textContent = 'Заполните поля'
        }
    }

    formInput.forEach(input => {
        input.addEventListener('input', (e) => {

        })
    })

    try {
        if (!form) {
            throw new Error('Форма отсутствует')
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault()

            submitForm()
        })
    } catch (error) {
        console.log(error.message)
    }
}

export default sendForm