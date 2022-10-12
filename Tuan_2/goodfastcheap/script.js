/* JavaScript */
let good = document.querySelector('.good'),
    fast = document.querySelector('.fast'),
    cheap = document.querySelector('.cheap');

function changed(el){
    let isGood = good.checked;
    let isFast = fast.checked;
    let isCheap = cheap.checked;

    if(isGood && isFast && isCheap && el === cheap){
        fast.checked = false;
    }
    if(isGood && isCheap && isFast && el === fast){
        good.checked = false;
    }
    if(isCheap && isFast && isGood && el === good){
        cheap.checked = false;
    }

}