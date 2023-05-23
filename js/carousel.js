let position = 0;
let slidesToShow = 3;
let countIt = 1;
const slidesToScroll = 1;
const container = document.querySelector('.gallery_sector');
const items = document.querySelectorAll('.gallery_img');
const btnPrev = document.querySelector('#gallery_backward');
const btnNext = document.querySelector('#gallery_forward');
const itemsCount = items.length;

btnNext.addEventListener('click', () => {

   position -= 408 * slidesToScroll;
   position = Math.min(position, 0)

   container.style.marginLeft = position + 'px';

   items[countIt].style.animation = 'carousel-up 1s forwards';
   items[countIt + 1].style.animation = 'carousel-down 1s forwards';


   countIt += 1;
   checkBtns();
})

btnPrev.addEventListener('click', () => {
   countIt -= 1;
   checkBtns();

   position += 408 * slidesToScroll;
   container.style.marginLeft = position + 'px';
   position = Math.max(position, -408 * (items.length - slidesToScroll));
   items[countIt].style.animation = 'carousel-down 1s forwards';
   items[countIt + 1].style.animation = 'carousel-up 1s forwards';





})

const checkBtns = () => {
   console.log(countIt);
   btnPrev.disabled = countIt === 1;
   btnNext.disabled = countIt === 3;

}