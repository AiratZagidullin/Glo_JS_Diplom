const faq = () => {
    const faqElem = document.querySelectorAll('.accordeon > .element')

    faqElem.forEach(elem => {
        const faqBtn = elem.querySelector('.title')
        const faqContent = elem.querySelector('.element-content')

        faqBtn.addEventListener('click', () => {
            if (elem.classList.contains('active')) {
                elem.classList.remove('active')
                faqContent.style.display = 'none'
            } else {
                elem.classList.add('active')
                faqContent.style.display = 'block'
            }
        })
    })
}

export default faq