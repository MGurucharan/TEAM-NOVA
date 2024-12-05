import { fadeIn, fadeOut } from './animations.js';
import { getPrediction, showPredictionResults } from './prediction.js';

// Store form data
window.formData = {};

const pages = {
    page1: document.getElementById('page1'),
    page2: document.getElementById('page2')
};

export function showPage(pageId) {
    Object.keys(pages).forEach(key => {
        if (key === pageId) {
            fadeIn(pages[key]);
        } else {
            fadeOut(pages[key]);
        }
    });
}

window.showPage = showPage;

// Form validation
function validatePhoneNumber(input) {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
}

// Handle form submissions
document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const cropForm = document.getElementById('cropForm');

    validatePhoneNumber(document.getElementById('phone'));

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        window.formData = {
            ...window.formData,
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        };

        showPage('page2');
    });

    cropForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        window.formData = {
            ...window.formData,
            soilType: document.getElementById('soilType').value,
            month: document.getElementById('month').value,
            state: document.getElementById('state').value
        };

        const prediction = await getPrediction(window.formData);
        showPredictionResults(prediction);
    });
});