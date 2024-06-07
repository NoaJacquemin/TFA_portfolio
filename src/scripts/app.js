"use strict";

//Slider
let prevButton = document.querySelector(".btn__prev");
let nextButton = document.querySelector(".btn__next");

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);


document.addEventListener("keydown", keyboardListener);

function keyboardListener(event){
    if(event.code == "ArrowLeft"){
        prevSlide();
    } else if(event.code == "ArrowRight"){
        nextSlide();
    }
}

function prevSlide(){
    let activeSlideEl = document.querySelector(".slider__el--show");
    let prevSlideEl =  activeSlideEl.previousElementSibling;
    if(!prevSlideEl){
        prevSlideEl = activeSlideEl.parentNode.lastElementChild;
    }
    activeSlideEl.classList.remove("slider__el--show");
    prevSlideEl.classList.add("slider__el--show");
}

function nextSlide(){
    let activeSlideEl = document.querySelector(".slider__el--show");
    let nextSlideEl =  activeSlideEl.nextElementSibling;
    if(!nextSlideEl){
        nextSlideEl = activeSlideEl.parentNode.firstElementChild;
    }
    activeSlideEl.classList.remove("slider__el--show");
    nextSlideEl.classList.add("slider__el--show");
}

//cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e =>{
    cursor.setAttribute('style', 'top:'+(e.pageY - 15)+"px; left:"+(e.pageX - 15)+"px;")
})

document.addEventListener('click',()=>{
    cursor.classList.add('expand');

    setTimeout(()=>{
        cursor.classList.remove("expand");
    }, 500)
})

