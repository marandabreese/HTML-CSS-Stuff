function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var slides = document.getElementsByClassName('slides');
    runThisLoop();
    if (n > slides.length) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex = slides.length
    };
    slides[slideIndex - 1].style.display = 'block';
}

function runThisLoop() {
    var slides = document.getElementsByClassName('slides');
    for (let i = 0; i < slides.length; i++) {
        console.log(slides[i]);
        slides[i].style.display = 'none';
    };
}