
let slideIndex = 0;
showSlides();

function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}

slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
setTimeout(showSlides, 3500); // Change image every 3.5 seconds
} 

function toggleLogin() {
    const loginForm = document.getElementById('loginForm');
    loginForm.classList.toggle('hidden'); // Toggle visibility
    loginForm.classList.toggle('show'); // Add/Remove show class 
  }  



  