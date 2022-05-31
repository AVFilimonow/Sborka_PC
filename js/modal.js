let modalFunc = () => {
    let modalBtn = document.querySelector('.modal__button')
    let modal = document.querySelector('.modal')

    modalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    })

    modal.addEventListener('click', (event) => {
        const modalContent = event.target.closest('.modal__inner')

        if (!modalContent) {
            modal.style.display = 'none';
        }
    })
}

modalFunc();