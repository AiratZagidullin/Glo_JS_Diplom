const valid = () => {
    const name = document.querySelector('input[name="fio"]')
    const tel = document.querySelector('input[name="tel"]')

    const valid = (element, reg, testReg) => {
        element.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(reg, "")
            if ((e.target.value.trim() === '')) {
                e.target.classList.remove('success')
            } else if (testReg.test(e.target.value)) {
                e.target.classList.add('success')
            }

        })
    }

    valid(name, /[^а-яА-Я\-]+/, /[а-яА-Я\-]+/gi)
    valid(tel, /[^\+\d]+/, /[\+\d]+/g)
}
export default valid