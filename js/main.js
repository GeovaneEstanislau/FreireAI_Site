document.addEventListener('DOMContentLoaded', () => {
    // Add click effect to elements (Folha Seca Green)
    const interactiveElements = document.querySelectorAll('p, h1, h2, h3, span, a, li, blockquote');

    interactiveElements.forEach(el => {
        el.addEventListener('click', (e) => {
            // If it's a link, we don't want to prevent default, 
            // but the color change might only be visible briefly unless it's the same page
            el.classList.add('clicked');
        });
    });

    // Handle Active Link highlighting
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.classList.add('active-link');
        }
    });

    // Simple fade-in for page transitions (optional)
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});
