const scroll = () => {
    const services = document.getElementById('services')
    const upBtn = document.querySelector('.up')

    window.addEventListener('scroll', () => {
        if (window.scrollY < services.offsetTop) {
            upBtn.style.display = 'none'
        } else {
            upBtn.style.display = 'block'
        }
    })

    upBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    })
}

export default scroll