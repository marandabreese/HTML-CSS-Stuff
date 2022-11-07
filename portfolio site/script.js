function checkNumber() {
    let formCheck = document.forms['myCoolForm']['phone'].value;
    if (formCheck == '') {
        alert("Phone Number cannot be blank");
        return false;
    }
}

function openForm() {
    document.getElementById('contact').style.display = 'block';
}

function closeForm() {
    document.getElementById('contact').style.display = 'none';
}

var slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    var slides = document.getElementsByClassName('slides');
    var dots = document.getElementsByClassName('dot');
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

document.addEventListener('click', function(event){
    if (event.target.matches('.cancel') || !event.target.closest('#contact')) {
        closeForm();
    }
})