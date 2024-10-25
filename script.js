
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

// This part is modal function
var modal = document.getElementById("myModal");
var images = document.querySelectorAll("img[id^='myImg']");

images.forEach(function (img) {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}
// end part is modal function 


function openModal(imageSrc, imageCaption) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    
    modal.style.display = "block"; // Show the modal
    modalImg.src = imageSrc; // Set the image source
    captionText.innerHTML = imageCaption; // Set the caption
  }
  
  function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none"; // Hide the modal
  }
  
  // Close modal when clicking outside of the image
  window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
      closeModal();
    }
  }
 
  
 