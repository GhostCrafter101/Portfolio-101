const toggleButton = document.getElementById('toggleButton');
const navbar = document.querySelector('.navbar');

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
    const exploreButton = document.getElementById('exploreButton');

    exploreButton.addEventListener('click', function (event) {
        event.preventDefault();

        const targetElement = document.querySelector('.video'); 

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});