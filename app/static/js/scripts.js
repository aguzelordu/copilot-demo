document.addEventListener('DOMContentLoaded', function() {
    // Add any interactive features here
    const aboutButton = document.getElementById('about-button');
    if (aboutButton) {
        aboutButton.addEventListener('click', function() {
            window.location.href = '/about';
        });
    }
});