
const nextBtn = $('.next-btn');
const preBtn= $('.pre-btn');
const boxImages = $$('.slider__items');
const mainSlide = $('.slider__wrap');
const size = boxImages[0].offsetWidth;

console.log(boxImages.length)

function silderCustomer() {
    let counter = 0;

    // mainSlide.style.transform = `translateX(${-size * counter}px)`;
    
    nextBtn.addEventListener('click', function() {
        if(counter >= boxImages.length) return;
        mainSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;

        if( counter >= boxImages.length ) {
          counter = boxImages.length - 1
        }

        mainSlide.style.transform = `translateX(${-size * counter}px)`
       
    });

    preBtn.addEventListener('click', function() {
        if(counter <= 0) return;
        mainSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        if(counter <= 0 ) {
          counter = 0
        }
        mainSlide.style.transform = `translateX(${-size * counter}px)`

    });

    
}

silderCustomer();


