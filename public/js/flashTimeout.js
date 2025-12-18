// public/js/flashTimeout.js for editing & adding books

document.addEventListener('DOMContentLoaded', (event) => {
    const flashMessage = document.getElementById('flash-message');

    if (flashMessage) {
        setTimeout(() => {
            flashMessage.classList.add('fade-out');
            flashMessage.addEventListener('animationend', () => {
                flashMessage.remove();
            });
        }, 3000); 
    }
});
