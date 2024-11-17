let cookie = document.getElementById('cookie-consent')
let cookieBtn = document.getElementById('accept-btn')
let overlay = document.getElementById('overlay')

const hasGiveConsent = () => {
    return localStorage.getItem('cookie-consent') === 'true'
}

const showCookieConsent = () => {
    overlay.style.display = 'flex'
}

const acceptConsent = () => {
    localStorage.setItem('cookie-consent', 'true')
    overlay.style.display = 'none'
}

window.addEventListener('DOMContentLoaded', () => {
    if (!hasGiveConsent()) {
        showCookieConsent()
    }
})

cookieBtn.addEventListener('click', acceptConsent)


let tab_item = document.querySelectorAll('.tab-item');
let tab_content = document.querySelectorAll('.box-text');

tab_item.forEach((item, index) => {
    item.addEventListener('click', () => {
        tab_item.forEach((item) => {
            item.classList.remove('active');
        })
        item.classList.add('active');
        tab_content.forEach((content) => {
            content.classList.remove('active');
        })
        tab_content[index].classList.add('active');
    })
})