
document.addEventListener("DOMContentLoaded", function() {
  
    const headings = document.querySelectorAll('.heading');
    headings.forEach(heading => {
        heading.style.fontSize = "2.5rem"; 
     
    });

 
    const homeContent = document.querySelector('.home .content h1');
    homeContent.style.fontSize = "3.5rem";

    const homeText = document.querySelector('.home .content p');
    homeText.style.fontSize = "1.2rem"; 


    const testimonialImages = document.querySelectorAll('.testimonials-item img');
    testimonialImages.forEach(image => {
        image.style.borderRadius = "50%";
        image.style.width = "150px";    
        image.style.height = "150px";    
    });

    const buttons = document.querySelectorAll('.grb');
    buttons.forEach(button => {
        button.addEventListener('mouseover', function() {
        
        });
        button.addEventListener('mouseout', function() {
            button.style.backgroundColor = "";
            button.style.color = "";
        });
    });
});

    document.addEventListener('DOMContentLoaded', function () {
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.querySelector('.navbar');

        menuIcon.addEventListener('click', function () {
            navbar.classList.toggle('active');
        });
    });

