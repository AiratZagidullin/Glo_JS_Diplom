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

    modalOverlay.addEventListener('click', () => {
        modal.style.display = 'none'
        modalOverlay.style.display = 'none'
    })

    modal.addEventListener('click', (e) => {
        if (e.target.closest('.modal-close')) {
            modal.style.display = 'none'
            modalOverlay.style.display = 'none'
        }
    })
}

export default modal