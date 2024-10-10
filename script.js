
const searchInput = document.getElementById('searchInput');
const suggestionsBox = document.getElementById('suggestionsBox');
const suggestions = [
    { name: 'Home', url: 'Index.html' },
    { name: 'About', url: 'about.html' },
    { name: 'Guestroom', url: 'guestroom.html' },
    { name: 'offers', url: 'offers.html' },
    { name: 'gallery', url: 'gallery.html' },
    { name: 'bookings', url: 'bookings.html' },
    { name: 'Reservations', url: 'bookings.html' },
    { name: 'events', url: 'offers.html' },
    { name: 'food', url: 'offers.html' },
    { name: 'location', url: 'about.html' }
];

// end function for search 

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

// function for dropdown
function toggleDropdown(dropdownId) {
    var dropdownContent = document.getElementById(dropdownId);
    dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

window.onclick = function (event) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (!event.target.matches('.dropdown') && openDropdown.style.display === 'block') {
            openDropdown.style.display = 'none';
        }
    }
};
// end function for dropdown

// function volunteer submission
function handleFormSubmit() {
    alert("You are now part of Greenlife Guardians!");
    return false; // Prevent form submission
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

