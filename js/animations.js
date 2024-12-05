// Animation utility functions
export function fadeOut(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateX(-100px)';
    setTimeout(() => {
        element.classList.add('hidden');
        element.style.opacity = '';
        element.style.transform = '';
    }, 300);
}

export function fadeIn(element) {
    element.classList.remove('hidden');
    element.style.opacity = '0';
    element.style.transform = 'translateX(100px)';
    requestAnimationFrame(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
    });
}

// Leaf animation setup
export function setupLeafAnimation() {
    const leafContainer = document.querySelector('.leaf-animation');
    const numberOfLeaves = 10;

    for (let i = 0; i < numberOfLeaves; i++) {
        const leaf = document.createElement('i');
        leaf.className = 'fas fa-leaf';
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.animationDelay = `${Math.random() * 10}s`;
        leaf.style.fontSize = `${Math.random() * 20 + 10}px`;
        leafContainer.appendChild(leaf);
    }
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    setupLeafAnimation();
});