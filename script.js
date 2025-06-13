// Initialize AOS (Animate on Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-solid');
            navbar.classList.remove('navbar-transparent');
        } else {
            navbar.classList.add('navbar-transparent');
            navbar.classList.remove('navbar-solid');
        }
    });

    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    
    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    // Music player toggle
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    let isPlaying = false;

    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicToggle.innerHTML = '<i class="fas fa-music"></i>';
        } else {
            bgMusic.play();
            musicToggle.innerHTML = '<i class="fas fa-volume-mute"></i>';
        }
        isPlaying = !isPlaying;
    });

    // RSVP form handling
    const rsvpForm = document.getElementById('rsvpForm');
    const attendingOptions = document.getElementById('attending-options');
    const attendingRadios = document.querySelectorAll('input[name="attending"]');
    const rsvpSuccess = document.getElementById('rsvp-success');
    const submitText = document.getElementById('submit-text');
    const submitLoading = document.getElementById('submit-loading');

    // Show/hide additional fields based on attendance
    attendingRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'yes') {
                attendingOptions.style.display = 'block';
            } else {
                attendingOptions.style.display = 'none';
            }
        });
    });

    // Form submission
    rsvpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show loading state
        submitText.style.display = 'none';
        submitLoading.style.display = 'inline-block';
        
        // Simulate form submission (replace with actual form submission)
        setTimeout(function() {
            rsvpForm.style.display = 'none';
            rsvpSuccess.style.display = 'block';
        }, 1500);
    });
});

// Gallery lightbox
const galleryImages = [
    { src: 'https://placeholder.svg?height=600&width=800', alt: 'Couple at the beach' },
    { src: 'https://placeholder.svg?height=600&width=800', alt: 'Engagement photo' },
    { src: 'https://placeholder.svg?height=600&width=800', alt: 'Couple hiking' },
    { src: 'https://placeholder.svg?height=600&width=800', alt: 'Date night' },
    { src: 'https://placeholder.svg?height=600&width=800', alt: 'First vacation together' },
    { src: 'https://placeholder.svg?height=600&width=800', alt: 'Holiday celebration' },
    { src: 'https://placeholder.svg?height=600&width=800', alt: 'Proposal moment' },
    { src: 'https://placeholder.svg?height=600&width=800', alt: 'Family gathering' }
];

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    
    lightboxImage.src = galleryImages[index].src;
    lightboxCaption.textContent = galleryImages[index].alt;
    lightbox.style.display = 'block';
    
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Close lightbox with escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});