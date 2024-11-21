const arrow = document.querySelectorAll('.span-arrow');
const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer-content');

question.forEach((q, index) => {
  q.addEventListener('click', () => {

    if(!answer[index].classList.contains('active')) {
      answer[index].classList.toggle('active');
      arrow[index].style.animation = 'arrow-animation 1s ease-in-out';
      arrow[index].style.transform = 'rotate(180deg)';
    }
    else {
      answer[index].classList.toggle('active');
      arrow[index].style.transform = 'rotate(0deg)';
    }
  })
});
