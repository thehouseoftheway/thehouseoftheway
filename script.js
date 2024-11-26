function openModal(imageSrc, captionText) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    caption.innerHTML = captionText;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.mySlides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

showSlides(); // Initial call to show slides
 
