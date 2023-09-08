/* this JS code prevents the default behaviour of accordion function coming from Bootstrap which jumps to the bottom of page.*/

document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".accordion-button");
    
    accordionButtons.forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
        });
    });
});
