// =================================
// Mobile Menu
// =================================

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");


menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// =================================
// Close Mobile Menu
// =================================

const links = document.querySelectorAll(".nav-links a");


links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =================================
// Current Year
// =================================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =================================
// Contact Form
// =================================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for contacting me! " +
        "I will get back to you soon."
    );

    contactForm.reset();

});


// =================================
// Scroll Animation
// =================================

const sections =
    document.querySelectorAll(".section");


const observer =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


sections.forEach(function (section) {

    observer.observe(section);

});