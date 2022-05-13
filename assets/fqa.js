
function fqa(container){
    console.log(container)
    
    const listQuestion = $$(`#shopify-section-${container} .list-questions__item`);
    const questionMore = $$(`#shopify-section-${container} .list-questions__title span`);
    const solve = $$(`#shopify-section-${container} .solve`);
    
    listQuestion[0].querySelector('span').innerHTML = "-"
    
    // active menu 
    
    const menuItem = $$(`#shopify-section-${container} .fqa-menu__item`);
    const menuLink = $$(`#shopify-section-${container} .fqa-menu__link`);
    const question = $$(`#shopify-section-${container} .question`);

    question[0].classList.add('active')
    
    
    
    const heightSolveEle = solve[2].clientHeight;
    console.log(heightSolveEle)
    
    
    listQuestion.forEach(function(ele, index)
    {   solve[index].style.height = '0';
        document.querySelector('.solve.active').style.height = `${heightSolveEle}px`;
    
        ele.addEventListener('click', function(e){
            if(questionMore[index].innerText === '+'){
                questionMore[index].innerHTML = '-';
                solve[index].style.height = `${heightSolveEle}px`;
    
            }
            else {
                questionMore[index].innerHTML = '+';
                solve[index].style.height = '0';
    
            }
            solve[index].style.transition = 'all 0.5s ease';
        })
    })
    
    
    // menu
    
    menuItem[0].classList.add('active')
    menuLink[0].classList.add('fqa-menu__link--active')
    menuItem.forEach(function(ele, index){
        ele.addEventListener('click', function(e){
            document.querySelector('.active.fqa-menu__item').classList.remove('active');
            document.querySelector('.fqa-menu__link--active.fqa-menu__link').classList.remove('fqa-menu__link--active');
    
            ele.classList.add('active');
            menuLink[index].classList.add('fqa-menu__link--active');
    
            document.querySelector('.question.active').classList.remove('active');
            question[index].classList.add('active');
        })
    })
}
fqa()