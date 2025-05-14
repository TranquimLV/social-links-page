// Create starry background
function createStars() {
    const container = document.createElement('div');
    container.className = 'stars-container';
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.zIndex = '-1';
    container.style.overflow = 'hidden';
    document.body.appendChild(container);

    // Create stars
    const starCount = 100;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.position = 'absolute';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.backgroundColor = 'white';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random();
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        // Animation
        const duration = 5 + Math.random() * 10;
        star.style.animation = `twinkle ${duration}s infinite alternate`;
        
        container.appendChild(star);
    }
}

// Add twinkle animation to style
const style = document.createElement('style');
style.textContent = `
@keyframes twinkle {
    0% { opacity: 0.2; transform: scale(0.5); }
    100% { opacity: 1; transform: scale(1); }
}
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    createStars();
    const links = [
        {
            title: 'Online Store',
            url: 'https://pgmall.my/s/MDC3/1123',
            icon: 'fas fa-shopping-bag'
        },
        {
            title: 'Instagram',
            url: 'https://www.instagram.com/rhealuxury_',
            icon: 'fab fa-instagram'
        },
        {
            title: 'Facebook',
            url: 'https://www.facebook.com/share/1AY4ejkbPj/?mibextid=LQQJ4d',
            icon: 'fab fa-facebook'
        },
        {
            title: 'WhatsApp',
            url: 'https://wa.me/60136236986',
            icon: 'fab fa-whatsapp'
        }
    ];

    const linksContainer = document.getElementById('linksContainer');
    
    links.forEach(link => {
        const linkElement = document.createElement('a');
        linkElement.href = link.url;
        linkElement.className = 'link-card';
        
        const iconElement = document.createElement('i');
        iconElement.className = link.icon;
        linkElement.appendChild(iconElement);
        
        linkElement.appendChild(document.createTextNode(' ' + link.title));
        linksContainer.appendChild(linkElement);
    });
});
