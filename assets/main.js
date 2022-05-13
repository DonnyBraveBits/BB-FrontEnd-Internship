
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// varible căn giữa btn category
const btnCategory = $$('.btn-category');

// variable icon heart
const productsHeart = $$('.feature-product .feature-icon');
const productHeartFill = $$('.feature-product .feature-icon--active');

// variable menu

const menuOpen = $('.menu-icon');
const menuClose = $('.close-icon');


// căn giữa btn category
btnCategory.forEach(function(ele)
{
    ele.style.left = `calc(50% - ${ele.clientWidth/2}px)`;
})

// icon heart
productsHeart.forEach(function(ele, index)
{
    ele.onclick = function(event)
    {
        event.target.classList.add('disable');
        productHeartFill[index].classList.add('active');
    }
   
})

productHeartFill.forEach(function(ele, index)
{
    ele.onclick = function(event)
    {
        event.target.classList.remove('active');
        productsHeart[index].classList.remove('disable');
    }
   
})

// heart-on-detail

function heart(){
    const detailHeart = $('.option-like__icon');
    const detailHeartFill = $('.option-like__icon-fill');
    
    if((detailHeart || detailHeartFill) === null) return;
    
    detailHeart.onclick = function(event)
    {
        detailHeart.classList.remove('active');
        detailHeartFill.classList.add('active');
    }
    detailHeartFill.onclick = function(event)
    {
        detailHeartFill.classList.remove('active');
        detailHeart.classList.add('active');
    } 

}

heart();

// close-open menu mobile 

menuOpen.addEventListener('click',function() {
    document.querySelector('.header-list').style.transition = 'all 0.5s ease';
    document.querySelector('.header-list').style.height = '367px';
    menuOpen.classList.add('disabled');
    menuClose.classList.add('active');
    document.querySelector('.overlay').style.display='block';

})

menuClose.addEventListener('click',function() {
    document.querySelector('.header-list').style.height = '0';
    menuOpen.classList.remove('disabled');
    menuClose.classList.remove('active');
    document.querySelector('.overlay').style.display='none';

})

// open-menu-2

const iconArrowDown = $('.header-items svg');
const menuHeight = $('.product-option');
const headerItem = $$('.header-items');


console.log()

if(iconArrowDown){
    
    iconArrowDown.addEventListener('click',function() {
        if(menuHeight.offsetHeight === 0) {
            iconArrowDown.classList.add('icon-rotate');
            menuHeight.style.height = '80px';
            menuHeight.style.marginTop = '10px';
            headerItem[2].style.paddingBottom = '0'
        }
        else {
            iconArrowDown.classList.remove('icon-rotate');
            menuHeight.style.height = '0px';
            menuHeight.style.marginTop = '0px';
            headerItem[2].style.paddingBottom = '15px'
        }
        
    });
}






  
