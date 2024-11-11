// Back to Top Button Functionality
const backToTopButton = document.getElementById("backToTop");

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Show the button
    } else {
        backToTopButton.style.display = "none"; // Hide the button
    }
};
// Scroll to the top smoothly when the button is clicked
backToTopButton.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scrolling effect
    });
});
const hamburger = document.querySelector (".hammy");
const navLinks = document.querySelector(".nav-links");

// Event listener for the hamburger menu
hamburger.addEventListener ("click", () => {
    navLinks.classList.toggle("active"); // Toggle 'active' class to show/hide links
 } ) ;