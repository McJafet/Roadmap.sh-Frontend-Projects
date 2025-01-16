const buttonDrop = document.querySelector('.dropdown-button');
const dropdownList = document.querySelector('.dropdown-list');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const arrow = document.querySelector('.arrow');

arrowDown = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 arrow">
                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>`;

buttonDrop.addEventListener('click', () => {
    dropdownList.classList.toggle('active');
    arrow.classList.toggle('active');
})

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        buttonDrop.innerHTML = item.textContent + arrowDown;
        dropdownList.classList.remove('active');
    })
})