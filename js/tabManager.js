import { showPage } from './forms.js';

export function initializeTabManager() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        const closeButton = document.createElement('button');
        closeButton.className = 'close-tab';
        closeButton.innerHTML = '<i class="fas fa-times"></i>';
        closeButton.addEventListener('click', closeCropPredictionTab);
        page.insertBefore(closeButton, page.firstChild);
    });
}

function closeCropPredictionTab() {
    // Reset all form data
    document.getElementById('userForm').reset();
    document.getElementById('cropForm').reset();
    
    // Reset stored form data
    window.formData = {};
    
    // Remove prediction results if they exist
    const predictionResult = document.querySelector('.prediction-result');
    if (predictionResult) {
        predictionResult.remove();
    }
    
    // Show first page
    showPage('page1');
}