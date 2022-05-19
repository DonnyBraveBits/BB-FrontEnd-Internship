
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

const heightLine = document.querySelector('.header-items').offsetHeight;
const amountLine = document.querySelectorAll('.header-items').length
let menuHeight = heightLine * amountLine + 60

menuOpen.addEventListener('click',function() {
    document.querySelector('.header-list').style.transition = 'all 0.5s ease';
    document.querySelector('.header-list').style.height = `${menuHeight}px`;
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
const subMenuHeight = $('.product-option');
const headerItem = $$('.header-items');

const amountSubMenu = $$('.select-product__option-level').length
const amountSubMenuHeight = $('.select-product__option-level').offsetHeight
const totalSubMenuHeight = amountSubMenu * amountSubMenuHeight
console.log(amountSubMenu)
console.log(totalSubMenuHeight)



console.log()

if(iconArrowDown){
    
    iconArrowDown.addEventListener('click',function() {
        
        if(subMenuHeight.offsetHeight === 0) {
            document.querySelector('.header-list').style.height = `${menuHeight + totalSubMenuHeight }px`;
            iconArrowDown.classList.add('icon-rotate');
            console.log(totalSubMenuHeight)
            subMenuHeight.style.height = `${ totalSubMenuHeight }px`;
            subMenuHeight.style.marginTop = '10px';
            headerItem[2].style.paddingBottom = '0'
        }
        else {
            document.querySelector('.header-list').style.height = `${menuHeight}px`;
            iconArrowDown.classList.remove('icon-rotate');
            subMenuHeight.style.height = '0px';
            subMenuHeight.style.marginTop = '0px';
            headerItem[2].style.paddingBottom = '14px'
        }
        
    });
}






  
