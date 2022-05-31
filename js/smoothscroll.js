let smoothScrollFunc = () => {
    let navbar = document.querySelector('.header__nav')
    let links = navbar.querySelectorAll('a')

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = document.querySelector(link.getAttribute('href'))
            if (section) {
                section.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth',
                }

                );
            }
        })
    })
}

smoothScrollFunc();