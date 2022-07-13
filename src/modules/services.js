import slider from "./slider"

const services = () => {
    const services = document.querySelectorAll('.services-carousel > div')
    const arrows = document.querySelector('.services-arrow')

    for (let i = 0; i < services.length; i++) {
        if (i > 2) {
            services[i].style.display = 'none'
        }
    }

    const slide = () => {
        services.forEach(item => {
            if (item.style.display === 'none') {
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    }

    arrows.addEventListener('click', (e) => {
        if (e.target.matches('.arrow-left') || e.target.matches('.arrow-right')) {
            slide()
        }
    })

}

export default services