const modal = () => {
    const modal = document.querySelector('.modal-callback')
    const modalOverlay = document.querySelector('.modal-overlay')
    const buttons = document.querySelectorAll('.fancyboxModal')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            modalOverlay.style.display = 'block'
        })
    })

    console.log(modal)
    console.log(modalOverlay)
    console.log(buttons)
}

export default modal