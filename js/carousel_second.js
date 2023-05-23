const buttonForward = document.querySelector('#main_forward');
const first_number = document.querySelector('#slide_number');
const second_number = document.querySelector('.second_number');
const took1 = document.querySelector('.took1');
const took2 = document.querySelector('.took2');
const took3 = document.querySelector('.took3');
let numberOne = 1;
let objElements = {
   "elem1": took1,
   "elem2": took2,
   "elem3": took3
}

second_number.innerHTML = `03`;
const NextSlide = () => {

   numberOne = numberOne + 1;
   numberOne === 4 ? numberOne = 1 : numberOne;
   first_number.innerText = numberOne;

   Object.values(objElements).map((value) => {

      if ((window.getComputedStyle(value)).getPropertyValue('transform') == 'matrix(1, 0, 0, 1, 0, 0)') {
         value.style.animation = "FirstSlide 1s forwards";
      }
      if ((window.getComputedStyle(value)).getPropertyValue('transform') == 'matrix(0.898311, -0.240702, 0.240702, 0.898311, 250, -50)') {
         value.style.animation = "SecondSlide 1s forwards";
      }
      if ((window.getComputedStyle(value)).getPropertyValue('transform') == 'matrix(0.685807, 0.183762, -0.183762, 0.685807, 468, -81)') {
         value.style.animation = "ThirdSlide 1s forwards";
      }
      buttonForward.disabled = true;
      setTimeout(() => {
         buttonForward.disabled = false;
      }, 1000)
   })

}
buttonForward.addEventListener('click', NextSlide);


