const faq = () => {
    const faqElem = document.querySelectorAll('.accordeon > .element')

    faqElem.forEach(elem => {

        elem.addEventListener('click', () => {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active')
            } else {
                faqElem.forEach(other => {
                    other.classList.remove('active')
                })
                elem.classList.add('active')
            }
        })
    })
}

export default faq