const showAside = () => {
    const aside = document.querySelector('.aside')
    if (!aside) return
    const asideBtn = document.querySelector('.aside__button')
    if (!asideBtn) return
    asideBtn.addEventListener('click', () => {
        console.log('click');
        aside.classList.toggle('show')
    })
}

document.addEventListener('DOMContentLoaded', showAside)