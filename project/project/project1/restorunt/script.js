document.addEventListener('DOMContentLoaded', function () {

    const homeSwiper = new Swiper(".home-slider", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        loop: true,
        effect: 'slide',
        speed: 1000,
    });

    const reviewSwiper = new Swiper(".review-slider", {
        spaceBetween: 25,
        centeredSlides: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        loop: true,
        speed: 800,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    const searchForm = document.querySelector('#search-form');
    const searchIcon = document.querySelector('#search-icon');
    const searchClose = document.querySelector('#close');

    if (searchIcon) {
        searchIcon.addEventListener('click', () => {
            searchForm.classList.add('active');
        });
    }

    if (searchClose) {
        searchClose.addEventListener('click', () => {
            searchForm.classList.remove('active');
        });
    }

    const menuBars = document.querySelector('#menu-bars');
    const navbar = document.querySelector('.navbar');

    if (menuBars) {
        menuBars.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }

    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.remove('active');
        }
        if (searchForm) {
            searchForm.classList.remove('active');
        }
    });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    function updateActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1); // Remove #
            if (href === current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                if (navbar) {
                    navbar.classList.remove('active');
                }
            }
        });
    });

    const orderForm = document.querySelector('.order form');

    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(orderForm);
            let orderDetails = '📋 તમારો ઓર્ડર (Your Order):\n\n';

            for (let [key, value] of formData.entries()) {
                if (value) {
                    orderDetails += `${key}: ${value}\n`;
                }
            }

            alert('✅ ઓર્ડર સફળતાપૂર્વક મોકલવામાં આવ્યો છે!\n\n' +
                'Order sent successfully!\n' +
                '------------------------\n' +
                orderDetails +
                '\n------------------------\n' +
                '🙏 આભાર! ફરી મુલાકાત લેશો.\n' +
                'Thank you! Visit again.');

            orderForm.reset();
        });
    }

    const searchFormElement = document.querySelector('#search-form');
    const searchBox = document.querySelector('#search-box');

    if (searchFormElement) {
        searchFormElement.addEventListener('submit', (e) => {
            e.preventDefault();

            const searchTerm = searchBox.value.trim();

            if (searchTerm) {
                alert(`🔍 શોધ પરિણામ: "${searchTerm}"\nSearch results for: "${searchTerm}"\n\nઆ સુવિધા ટૂંક સમયમાં ઉપલબ્ધ થશે.\nThis feature will be available soon.`);

                searchBox.value = '';
                searchFormElement.classList.remove('active');
            } else {
                alert('⚠️ કૃપા કરીને કંઈક શોધો.\nPlease enter something to search.');
            }
        });
    }

    document.addEventListener('click', (e) => {
        if (searchForm && searchForm.classList.contains('active')) {
            if (!e.target.closest('#search-form') && !e.target.closest('#search-icon')) {
                searchForm.classList.remove('active');
            }
        }
    });

    const heartButtons = document.querySelectorAll('.fa-heart');

    heartButtons.forEach(heart => {
        heart.addEventListener('click', (e) => {
            e.preventDefault();
            heart.style.transform = 'scale(1.3)';
            heart.style.color = '#e84342';

            setTimeout(() => {
                heart.style.transform = 'scale(1)';
            }, 200);

            alert('❤️ વાનગી ફેવરિટમાં ઉમેરાઈ!\nDish added to favorites!');
        });
    });

    const eyeButtons = document.querySelectorAll('.fa-eye');

    eyeButtons.forEach(eye => {
        eye.addEventListener('click', (e) => {
            e.preventDefault();
            const dishName = eye.closest('.box')?.querySelector('h3')?.textContent || 'વાનગી';

            alert(`👁️ ${dishName}\n\nવાનગીની વિગતો:\n- તાજા ઘટકો\n- પરંપરાગત રીત\n- શુદ્ધ ઘીમાં બનાવેલ\n\nDish details:\n- Fresh ingredients\n- Traditional method\n- Made in pure ghee`);
        });
    });

    const cartButtons = document.querySelectorAll('.btn');

    cartButtons.forEach(button => {
        if (button.textContent.includes('કાર્ટમાં ઉમેરો') || button.textContent.includes('add to cart')) {
            button.addEventListener('click', (e) => {
                e.preventDefault();

                const dishBox = button.closest('.box');
                const dishName = dishBox?.querySelector('h3')?.textContent || 'વાનગી';
                const dishPrice = dishBox?.querySelector('span')?.textContent || '₹---';

                button.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    button.style.transform = 'scale(1)';
                }, 200);

                alert(`🛒 ${dishName} કાર્ટમાં ઉમેરાયું!\n${dishPrice}\n\nAdded to cart!\n\nકુલ ખરીદી: ₹${calculateCartTotal()}`);
            });
        }
    });

    function calculateCartTotal() {
        return Math.floor(Math.random() * 500) + 200;
    }

    const cartIcon = document.querySelector('.fa-shopping-cart');

    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            alert('🛍️ તમારું કાર્ટ ખાલી છે.\nYour cart is empty.\n\nકૃપા કરીને વાનગીઓ ઉમેરો.\nPlease add some dishes.');
        });
    }

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.box, .slide, .row').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    window.addEventListener('load', () => {
        document.body.style.opacity = '1';
    });

    console.log('%c🍽️ ગુજરાતી રેસ્ટોરાં', 'font-size: 20px; color: #e84342; font-weight: bold;');
    console.log('%cWelcome to Gujarati Restaurant Website', 'font-size: 16px; color: #100d37;');
});