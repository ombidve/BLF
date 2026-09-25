document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('disclaimerOverlay');
    const agreeBtn = document.getElementById('agreeBtn');
    const disagreeBtn = document.getElementById('disagreeBtn');
    const openDisclaimerLink = document.getElementById('openDisclaimer');

    // Check if user has already accepted the disclaimer
    const isAccepted = localStorage.getItem('borhade_disclaimer_accepted');

    if (!isAccepted) {
        showDisclaimer();
    } else {
        hideDisclaimer();
    }

    // Function to show disclaimer
    function showDisclaimer() {
        overlay.classList.remove('hidden');
        document.body.classList.add('modal-open');
    }

    // Function to hide disclaimer
    function hideDisclaimer() {
        overlay.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }

    // Handle "I AGREE" button
    agreeBtn.addEventListener('click', function() {
        localStorage.setItem('borhade_disclaimer_accepted', 'true');
        hideDisclaimer();
    });

    // Handle "I DISAGREE" button
    disagreeBtn.addEventListener('click', function() {
        alert("As per the Bar Council of India guidelines, you must agree to the terms to view this website.");
        window.location.href = "https://www.google.com";
    });

    // Allow user to re-open disclaimer from footer
    if (openDisclaimerLink) {
        openDisclaimerLink.addEventListener('click', function(e) {
            e.preventDefault();
            showDisclaimer();
        });
    }

    // Consultation Form submission handler
    const consultationForm = document.getElementById('consultationForm');
    if (consultationForm) {
        consultationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("Thank you! Your request has been sent. Our team will contact you shortly. / तुमची विनंती पाठवली गेली आहे. आमची टीम लवकरच तुमच्याशी संपर्क साधेल.");
            this.reset();
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});