// export default function Slider(){
const sliderContainer = [...document.querySelectorAll('.img-slider-container')];
const nextBtn = [...document.querySelectorAll('.next-slider')];
const prevBtn = [...document.querySelectorAll('.prev-slider')];

sliderContainer.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerwidth = containerDimension.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth;
    });

    prevBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth;
    });
})
// }