let nextbutton = document.getElementById('next');
let prevbutton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listitems = document.querySelector('.carousel .list');
let thumbnail = document.querySelector('.carousel .thumbnail');

nextbutton.onclick = function () {
    showSlider('next');
}

prevbutton.onclick = function(){
    showSlider('prev');
}

let timeRunning = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun;
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item');
    if (type === 'next') {
        listitems.appendChild(itemSlider[0]);
        thumbnail.appendChild(itemthumbnail[0]);
        carousel.classList.add('next');
    }else{
        let positionLast = itemSlider.length-1;
        listitems.prepend(itemSlider[positionLast]);
        thumbnail.prepend(itemthumbnail[positionLast]);
        carousel.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(()=>{
        carousel.classList.remove(type);
    },timeRunning);
}