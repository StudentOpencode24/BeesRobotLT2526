
    // --- СКРИПТ КНОПКИ НАВЕРХ ---
    const mybutton = document.getElementById("scrollTopBtn");

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    function topFunction() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // --- СКРИПТ ДЛЯ ПРОСМОТРА ФОТО (LIGHTBOX) ---
    document.addEventListener("DOMContentLoaded", function() {
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("img01");
        const closeBtn = document.querySelector(".close");
        
        const galleryImages = document.querySelectorAll(".gallery img");

        galleryImages.forEach(img => {
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });

        function closeModal() {
            modal.style.display = "none";
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
        
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeModal();
            }
        });
    });

    // --- ПЛАВНАЯ ПРОКРУТКА МЕНЮ ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 60;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- АНИМАЦИЯ ПОЯВЛЕНИЯ КОМАНДЫ ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const teamObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                teamObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.team-card').forEach(card => {
        teamObserver.observe(card);
    });
