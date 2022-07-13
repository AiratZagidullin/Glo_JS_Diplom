const slider = () => {
    const sliderBlock = document.querySelector('.top-slider')
    const sliderItems = document.querySelectorAll('.item')
    const sliderText = document.querySelectorAll('.table')

    let currentSlide = 0
    let interval

    sliderText.forEach(text => {
        text.classList.add('active')
    })

    for (let i = 1; i < sliderItems.length; i++) {
        sliderItems[i].style.display = 'none'
    }

    const createDots = () => {
        let dotList = document.createElement("ul")
        dotList.classList.add('slick-dots')
        sliderBlock.append(dotList)
        let dot = document.createElement("li")
        dot.classList.add('dot')
        dot.classList.add('slick-active')
        dotList.append(dot)

        for (let i = 0; i < sliderItems.length - 1; i++) {
            let dot = document.createElement("li")
            dot.classList.add('dot')
            dotList.append(dot)
        }
    }

    const prevSlide = (elems, index, strClass) => {
        if (elems === sliderItems) {
            elems[index].style.display = strClass
        } else {
            elems[index].classList.remove(strClass)
        }
    }

    const nextSlide = (elems, index, strClass) => {
        if (elems === sliderItems) {
            elems[index].style.display = strClass
        } else {
            elems[index].classList.add(strClass)
        }
    }

    const autoSlide = () => {
        const dots = document.querySelectorAll('ul.slick-dots > li')
        prevSlide(sliderItems, currentSlide, 'none');
        prevSlide(dots, currentSlide, 'slick-active');
        currentSlide++;

        if (currentSlide >= sliderItems.length) {
            currentSlide = 0
        }

        nextSlide(sliderItems, currentSlide, 'block');
        nextSlide(dots, currentSlide, 'slick-active');
    }

    const startSlide = () => {
        interval = setInterval(autoSlide, 3000)
    }

    const stopSlide = () => {
        clearInterval(interval)
    }

    sliderBlock.addEventListener('click', (e) => {
        const dots = document.querySelectorAll('.dot')
        e.preventDefault()

        if (!e.target.matches('.dot')) {
            return
        }

        prevSlide(sliderItems, currentSlide, 'none');
        prevSlide(dots, currentSlide, 'slick-active');

        if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index
                }
            })
        }

        if (currentSlide >= sliderItems.length) {
            currentSlide = 0
        }

        if (currentSlide < 0) {
            currentSlide = sliderItems.length - 1
        }

        nextSlide(sliderItems, currentSlide, 'block');
        nextSlide(dots, currentSlide, 'slick-active');
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot')) {
            stopSlide()
        }
    }, true)

    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot')) {
            startSlide()
        }
    }, true)

    createDots()
    // startSlide()
}

export default slider