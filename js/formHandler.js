// Fungsi untuk slideshow
const initSlideshow = () => {
    const slideshow = document.querySelector('.slides');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    let currentSlide = 0;

    // Fungsi untuk mengganti slide
    const showSlide = (n) => {
        currentSlide = (n + totalSlides) % totalSlides;
        
        // Animasi slide
        slideshow.style.transition = 'transform 0.5s ease-in-out';
        slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Animasi teks
        slides.forEach((slide, index) => {
            const text = slide.querySelector('.slide-text');
            if (index === currentSlide) {
                text.style.opacity = '1';
                text.style.transform = 'translateY(0)';
            } else {
                text.style.opacity = '0';
                text.style.transform = 'translateY(20px)';
            }
        });

        // indikator
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentSlide].classList.add('active');
    };

    // Autoplay dengan interval 3 detik
    setInterval(() => showSlide(currentSlide + 1), 3000);

    // Inisialisasi slide pertama
    showSlide(0);
};

const initWelcomePopup = () => {
    Swal.fire({
        title: 'Selamat Datang!',
        input: 'text',
        inputLabel: 'Silakan masukkan nama Anda',
        inputPlaceholder: 'Nama Anda...',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: true,
        confirmButtonText: 'Lanjutkan',
        background: '#fff',
        customClass: {
            popup: 'welcome-popup',
            title: 'welcome-title',
            input: 'welcome-input',
            confirmButton: 'welcome-button'
        }
    }).then((result) => {
        let userName = result.value || 'Guest';
        updateWelcomeText(userName);
        
        // Welcome Message
        Swal.fire({
            title: `<span class="welcome-highlight">Halo, ${userName}!</span>`,
            html: `
                <div class="welcome-content">
                    <div class="welcome-icon">👋</div>
                    <h2>Selamat Datang di Website Saya!</h2>
                    <p>Senang bertemu dengan Anda</p>
                </div>
            `,
            showConfirmButton: true,
            confirmButtonText: 'Mulai Menjelajah',
            width: 600,
            padding: '3em',
            backdrop: `
                rgba(0,0,0,0.4)
                url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20z' fill='%23${Math.floor(Math.random()*16777215).toString(16)}' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E")
            `,
            customClass: {
                popup: 'animated-popup',
                title: 'animated-title',
                htmlContainer: 'animated-content',
                confirmButton: 'animated-button'
            },
            showClass: {
                popup: 'animate__animated animate__fadeInDown animate__faster'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp animate__faster'
            }
        });
    });
};

const updateWelcomeText = (name) => {
    const welcomeText = document.querySelector('.welcome-text');
    welcomeText.innerHTML = `Hi <span class="highlight">${name}</span>, Welcome To Website`;
    welcomeText.classList.add('animate__animated', 'animate__fadeIn');
};


const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID');
};


const updateCurrentTime = () => {
    const currentTime = document.getElementById('current-time');
    setInterval(() => {
        currentTime.textContent = new Date().toLocaleString('id-ID');
    }, 1000);
};


const defaultData = {
    name: "Ryan Dzakwan Adriansyah",
    email: "ryandzakwan282004@gmail.com",
    phone: "081296853753",
    dob: "2004-09-28",
    gender: "Laki-Laki",
    message: "Halo, saya Ryan Dzakwan Adriansyah, bisa dipanggil Ryan, salam kenal."
};


const displayMessage = (data) => {
    const messageDisplay = document.querySelector('.message-display');
    messageDisplay.innerHTML = `
        <div class="message-info">
            <p>Current Time <span id="current-time">${new Date().toLocaleString('id-ID')}</span></p>
        </div>
        <div class="message-info">
            <p>Nama <span>${data.name}</span></p>
        </div>
        <div class="message-info">
            <p>Email <span>${data.email}</span></p>
        </div>
        <div class="message-info">
            <p>No. Telepon <span>${data.phone}</span></p>
        </div>
        <div class="message-info">
            <p>Tanggal Lahir <span>${formatDate(data.dob)}</span></p>
        </div>
        <div class="message-info">
            <p>Jenis Kelamin <span>${data.gender}</span></p>
        </div>
        <div class="message-info">
            <p>Pesan <span>${data.message}</span></p>
        </div>
    `;
};


const handleMessageForm = () => {
    const form = document.querySelector('.message-form');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();


        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email')?.value || '-',
            phone: document.getElementById('phone')?.value || '-',
            dob: document.getElementById('dob').value,
            gender: document.querySelector('input[name="gender"]:checked')?.value,
            message: document.getElementById('message').value
        };


        if (!formData.name || !formData.dob || !formData.gender || !formData.message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Semua field harus diisi!'
            });
            return;
        }


        displayMessage(formData);


        Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: 'Pesan Anda telah terkirim',
            showConfirmButton: false,
            timer: 1500
        });

        // Reset form
        form.reset();
    });
};


const initSmoothScroll = () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');


    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; 
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });


    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100; 

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
};

const initMobileMenu = () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav .nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            mobileNav.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initSlideshow();
    updateCurrentTime();
    handleMessageForm();
    displayMessage(defaultData);
    initSmoothScroll();
    initMobileMenu(); // Add this line
});

window.onload = () => {
    initWelcomePopup();
};
