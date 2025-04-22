document.addEventListener('DOMContentLoaded', () => {
    // Handle link clicks
    const links = document.querySelectorAll('.links p');
    links.forEach(link => {
        link.addEventListener('click', () => {
            const url = link.textContent.split('→')[1].trim();
            window.open(`https://${url}`, '_blank');
        });
    });

    // Add typing sound effect (optional)
    const typingSound = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU');
    
    // Simulate typing sound on page load
    document.querySelectorAll('.typing').forEach((element, index) => {
        setTimeout(() => {
            typingSound.play().catch(() => {}); // Ignore errors if audio fails to play
        }, index * 500);
    });
}); 