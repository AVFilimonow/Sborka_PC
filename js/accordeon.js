let accordeonFunc = () => {
    const contentList = document.querySelectorAll('.program-line__content')

    contentList.forEach((el) => {
        const title = el.querySelector('.program-line__title')
        const descr = el.querySelector('.program-line__descr')

        title.addEventListener('click', (el) => {
            descr.classList.toggle('active')
        })
    })
}

accordeonFunc();

