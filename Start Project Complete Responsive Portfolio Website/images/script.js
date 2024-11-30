let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

// Function to handle scrolling and updating active navigation link
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
        }
    });
}

// Function to toggle mobile menu
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Functionality for "Read More" buttons to toggle dropdown content
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const serviceBox = button.closest('.service-box');
        serviceBox.classList.toggle('expanded');
        const dropdownContent = serviceBox.querySelector('.dropdown-content');
        if (serviceBox.classList.contains('expanded')) {
            dropdownContent.style.display = 'block';
        } else {
            dropdownContent.style.display = 'none';
        }
    });
});
