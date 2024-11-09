const hamburger = document.querySelector (".hammy");
const navLinks = document.querySelector(".nav-links");

// Event listener for the hamburger menu
hamburger.addEventListener ("click", () => {
    navLinks.classList.toggle("active"); // Toggle 'active' class to show/hide links
 } ) ;
// Get the modal
var modal = document.getElementById("videoModal");

// Get the button that opens the modal
var btn = document.querySelector(".cta-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "flex"; // Show modal
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none"; // Hide modal
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; // Hide modal
    }
};
// 'Back to Top' Button Functionality
const backToTopButton = document.querySelector('.back-to-top a');

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
