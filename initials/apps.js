// document.addEventListener('DOMContentLoaded', () => {
//     // Image slideshow for sidebar
//     const slides = [
//         'http://static.photos/aerial/1200x630/1',
//         'http://static.photos/nature/1200x630/2',
//         'http://static.photos/cityscape/1200x630/3',
//         'http://static.photos/technology/1200x630/4'
//     ];
    
//     const slideShow = document.getElementById('slideShow');
//     const nextBtn = document.getElementById('nextSlide');
//     const prevBtn = document.getElementById('prevSlide');
    
//     let currentSlide = 0;
    
//     function showSlide(index) {
//         slideShow.style.backgroundImage = `url(${slides[index]})`;
//         slideShow.style.backgroundSize = 'cover';
//         slideShow.style.backgroundPosition = 'center';
//     }
    
//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slides.length;
//         showSlide(currentSlide);
//         animateSlideTransition('right');
//     }
    
//     function prevSlide() {
//         currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//         showSlide(currentSlide);
//         animateSlideTransition('left');
//     }
    
//     function animateSlideTransition(direction) {
//         gsap.fromTo(slideShow, 
//             { opacity: 0, x: direction === 'right' ? 50 : -50 },
//             { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }
//         );
//     }
    
//     nextBtn.addEventListener('click', nextSlide);
//     prevBtn.addEventListener('click', prevSlide);
    
//     // Initialize first slide
//     showSlide(currentSlide);
    
//     // Auto slide change every 5 seconds
//     setInterval(nextSlide, 5000);
    
//     // Password visibility toggle
//     document.querySelectorAll('[data-feather="eye"]').forEach(eyeIcon => {
//         eyeIcon.addEventListener('click', (e) => {
//             const passwordInput = e.target.closest('.relative').querySelector('input');
//             const isPassword = passwordInput.type === 'password';
            
//             passwordInput.type = isPassword ? 'text' : 'password';
//             e.target.setAttribute('data-feather', isPassword ? 'eye-off' : 'eye');
//             feather.replace();
//         });
//     });
    
//     // Form submission
//     document.querySelector('form').addEventListener('submit', (e) => {
//         e.preventDefault();
//         // Add your form submission logic here
//         alert('Login functionality would be implemented here!');
//     });
// });