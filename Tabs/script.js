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