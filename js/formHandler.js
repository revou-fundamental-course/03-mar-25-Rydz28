const defaultData = {
    name: "Ryan Dzakwan Adriansyah",
    email: "ryandzakwan282004@gmail.com",
    phone: "081296853753",
    dob: "2004-09-28",
    gender: "Laki-Laki",
    message: "Halo, saya Ryan Dzakwan Adriansyah, bisa dipanggil Ryan, salam kenal."
};

window.onload = function() {
    const time = new Date().toString();
    document.getElementById('currentTime').textContent = time;
    document.getElementById('outputName').textContent = defaultData.name;
    document.getElementById('outputEmail').textContent = defaultData.email;
    document.getElementById('outputPhone').textContent = defaultData.phone;
    document.getElementById('outputDob').textContent = defaultData.dob;
    document.getElementById('outputGender').textContent = defaultData.gender;
    document.getElementById('outputMessage').textContent = defaultData.message;
}

// Fungsi untuk menampilkan popup saat halaman dimuat
function showPopup() {
    document.getElementById('namePopup').classList.remove('hidden');
}

// Fungsi untuk menyimpan nama dari popup
function handleNameSubmit(event) {
    event.preventDefault();
    const nameInput = document.getElementById('popupName').value;
    document.getElementById('userName').textContent = nameInput;
    document.getElementById('namePopup').classList.add('hidden');
}

// Menambahkan event listener untuk memunculkan popup saat halaman dimuat
window.addEventListener('load', showPopup);

function handleSubmit(event) {
    event.preventDefault();
    
    const time = new Date().toString();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    document.getElementById('currentTime').textContent = time;
    document.getElementById('outputName').textContent = name;
    document.getElementById('outputEmail').textContent = email;
    document.getElementById('outputPhone').textContent = phone;
    document.getElementById('outputDob').textContent = dob;
    document.getElementById('outputGender').textContent = gender;
    document.getElementById('outputMessage').textContent = message;
}

function toggleMobileMenu() {  
    const menu = document.getElementById('mobileMenu');  
    menu.classList.toggle('hidden');  
} 

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });
});