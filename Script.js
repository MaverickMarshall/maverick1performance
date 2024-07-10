document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scroll
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 100) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Testimonial Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentTestimonial = 0;

    function showTestimonial(n) {
        testimonials[currentTestimonial].classList.remove('active');
        currentTestimonial = (n + testimonials.length) % testimonials.length;
        testimonials[currentTestimonial].classList.add('active');
    }

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => showTestimonial(currentTestimonial - 1));
        nextButton.addEventListener('click', () => showTestimonial(currentTestimonial + 1));
    }

    showTestimonial(0);

    // FAQ Accordion
    const accordions = document.querySelectorAll('.accordion-header');

    accordions.forEach((accordion) => {
        accordion.addEventListener('click', function() {
            const content = this.nextElementSibling;

            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For now we'll just log it to the console
            console.log('Form submitted');
            console.log('Name:', this.name.value);
            console.log('Email:', this.email.value);
            console.log('Subject:', this.subject.value);
            console.log('Message:', this.message.value);
            alert('Thank you for your message. We\'ll get back to you soon!');
            this.reset();
        });
    }

    // Hide loader
    window.addEventListener('load', function() {
        document.getElementById('loader').style.display = 'none';
    });
});


