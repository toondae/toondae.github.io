let headerFixed = document.getElementById('headerFixed');
window.onscroll = function(){
    if(window.pageYOffset > 100){
        headerFixed.style.position="fixed";
        headerFixed.style.top=0;
    } else {
        headerFixed.style.position='relative';
        headerFixed.style.top = 100 ;
    }
}

function toggleHam(x) {
  x.classList.toggle("change");

  let myMenu = document.getElementById("myMenu");
  if (myMenu.className === "header-menu") {
      myMenu.className += " menu-active";
  } else {
    myMenu.className = "header-menu";
  }
}



let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }









  