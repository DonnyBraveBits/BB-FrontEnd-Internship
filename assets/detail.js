
const  preBtn = $('.detail-pre-btn');
const  nextBtn = $('.detail-next-btn');
const boxImages = $$('.detail-show__main-slide .detail-show__main-img');
const mainSlide = $('.detail-show__main-slide');
const subBoxImages = $$('.detail-show__items');
const SubMainSlide = $('.sub-main-slide');


const size = boxImages[0].offsetWidth;
const subSize = subBoxImages[0].offsetWidth;

function silderCustomer() {
    let counter = 0;
    let subCount = 0;

    // mainSlide.style.transform = `translateX(${-size * counter}px)`;
    console.log(boxImages.length  )
    nextBtn.addEventListener('click', function() {
        if(counter >= boxImages.length-1) return;
        mainSlide.style.transition = "transform 0.4s ease-in-out";

        
        counter++;
        subCount++
        mainSlide.style.transform = `translateX(${-size * counter}px)`;
        
        if(subCount >= boxImages.length) {
          subCount = boxImages.length-1
        }

        console.log(counter)
        console.log(subCount)
        if(subCount >= 4) {
          SubMainSlide.style.transform = `translateX(${-subSize * (subCount-3) - 20*(subCount-3) }px)`;
        }
        
        // document.querySelector('.detail-show__items.active').classList.remove('active')
        // subBoxImages[counter].classList.add('active');

       
    });

    preBtn.addEventListener('click', function() {
        if(counter < 1) return;
        // if(subCount < 1) return;

        mainSlide.style.transition = "transform 0.4s ease-in-out";
        counter--;
        subCount--;
        if(subCount < 0) {
            subCount = 0;
        }
        console.log(counter)
        console.log(subCount)

        mainSlide.style.transform = `translateX(${-size * counter }px)`;

        
        if(subCount >= 3)
        {
          SubMainSlide.style.transform = `translateX(${-subSize * (subCount-3) - 20*(subCount-3)}px)`;

        }
        

        // document.querySelector('.detail-show__items.active').classList.remove('active')
        // subBoxImages[counter].classList.add('active');
    });

}

silderCustomer();


const menuItem = $$('.fqa-menu__item');
const menuLink = $$('.fqa-menu__link');
const productInfo = $$('.detail-product__info');


menuItem.forEach(function(ele, index){
    ele.addEventListener('click', function(e){
        document.querySelector('.active.fqa-menu__item').classList.remove('active');
        document.querySelector('.fqa-menu__link--active.fqa-menu__link').classList.remove('fqa-menu__link--active');

        ele.classList.add('active');
        menuLink[index].classList.add('fqa-menu__link--active');

        document.querySelector('.detail-product__info.active').classList.remove('active');
        productInfo[index].classList.add('active');
    })
})