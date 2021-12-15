var track = document.querySelector('.carousel__track');
var slides = Array.from(track.children);
var nextButton = document.querySelector('.carousel__button--right');
var prevButton = document.querySelector('.carousel__button--left');
var dotsNav = document.querySelector('.carousel__nav');
var dots = Array.from(dotsNav.children);

var slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides next to one another

var setSlidePosition= (slide, index) => {
    slide.style.left = slideWidth*index + 'px';
}
slides.forEach(setSlidePosition);

function updateDots(currentDot, targetDot) {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

function hideShowArrows(slides, prevButton, nextButton, targetIndex) {
    if(targetIndex === 0) {
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if(targetIndex === slides.length - 1) {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    } else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//when i click left, move slides to the left

prevButton.addEventListener('click', e => {
    let currentSlide = track.querySelector('.current-slide');
    let prevSlide = currentSlide.previousElementSibling;
    const amountToMove = prevSlide.style.left;
    let currentDot = dotsNav.querySelector('.current-slide');
    let prevDot = currentDot.previousElementSibling;
    let prevIndex = slides.findIndex(slide => slide === prevSlide);
    // move to the next slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');

    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
})

//when i click right, move slides to the right

nextButton.addEventListener('click', e => {
    console.log(track);
    let currentSlide = track.querySelector('.current-slide');
    let nextSlide = currentSlide.nextElementSibling;
    const amountToMove = nextSlide.style.left;
    let currentDot = dotsNav.querySelector('.current-slide');
    let nextDot = currentDot.nextElementSibling;
    let nextIndex = slides.findIndex(slide => slide === nextSlide);
    // move to the next slide
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');

    updateDots(currentDot, nextDot);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

//when i click the nav indicators, move to that slide

dotsNav.addEventListener('click', e => {
    let targetDot = e.target.closest('button');

    if (!targetDot) return;
    
    let currentSlide = track.querySelector('.current-slide');
    let currentDot = dotsNav.querySelector('.current-slide');
    let targetIndex = dots.findIndex(dot => dot === targetDot);
    let targetSlide = slides[targetIndex];
    const amountToMove = targetSlide.style.left;

    console.log(targetIndex);
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

    updateDots(currentDot, targetDot);

    hideShowArrows(slides, prevButton, nextButton, targetIndex);

})

//Modal 

var card = document.querySelector('.card_container');
var cards = Array.from(card.children);

var modalWindow1 = document.querySelector('.modal_card1');
var modalWindow2 = document.querySelector('.modal_card2');
var modalWindow3 = document.querySelector('.modal_card3');

var modalClose = document.getElementsByClassName('modal_close');
console.log(modalClose);

cards[0].addEventListener('click', function() {
    console.log("working");
    modalWindow1.style.visibility = "visible";
})

cards[1].addEventListener('click', function() {
    console.log("working");
    modalWindow2.style.visibility = "visible";
})

cards[2].addEventListener('click', function() {
    console.log("working");
    modalWindow3.style.visibility = "visible";

})

modalClose[0].addEventListener('click', function() {
    modalWindow1.style.visibility = "hidden";
    modalWindow2.style.visibility = "hidden";
    modalWindow3.style.visibility = "hidden";
})

modalClose[1].addEventListener('click', function() {
    modalWindow1.style.visibility = "hidden";
    modalWindow2.style.visibility = "hidden";
    modalWindow3.style.visibility = "hidden";
})

modalClose[2].addEventListener('click', function() {
    modalWindow1.style.visibility = "hidden";
    modalWindow2.style.visibility = "hidden";
    modalWindow3.style.visibility = "hidden";
})

