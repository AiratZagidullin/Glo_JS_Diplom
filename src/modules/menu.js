const menu = () => {
    const menuList = document.querySelectorAll('.top-menu > ul > li > a')

    menuList.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();

            let href = e.target.getAttribute('href').substring(1);
            const scrollTarget = document.getElementById(href);
            const elementPosition = scrollTarget.getBoundingClientRect().top;

            window.scrollBy({
                top: elementPosition,
                behavior: "smooth"
            })
        })
    })
}

export default menu