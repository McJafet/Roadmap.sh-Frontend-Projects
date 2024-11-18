let cookieConsent = document.getElementById('cookie-consent')
let acceptBtn = document.getElementById('accept-btn')
let overlay = document.getElementById('overlay')
let tab_item = document.querySelectorAll('.tab-item');
let textareaContent = document.querySelectorAll('.textarea-content');
let areatext = document.querySelectorAll('.textarea');
let count = document.querySelectorAll('.count');
let counter = document.querySelectorAll('.counter');
let countValue = 0;
let maxCount = 250;

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

acceptBtn.addEventListener('click', acceptConsent)


tab_item.forEach((item, index) => {
    item.addEventListener('click', () => {
        tab_item.forEach((item) => {
            item.classList.remove('active');
        })
        item.classList.add('active');
        textareaContent.forEach((content) => {
            content.classList.remove('active');
        })
        textareaContent[index].classList.add('active');
    })
})

areatext.forEach((item, index) => {
    item.addEventListener('input', () => {
        countValue = item.value.length;
        count[index].innerHTML = `${countValue} `;

        if (countValue >= maxCount) {
            counter[index].classList.add('full-count');
            areatext[index].classList.add('full-textarea');
            areatext[index].style.borderColor = 'red';
        } else {
            counter[index].classList.remove('full-count');
            areatext[index].classList.remove('full-textarea');
            areatext[index].style.borderColor = '';
        }
    })
})






