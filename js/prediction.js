// Mock AI prediction function (replace with actual API call)
export async function getPrediction(formData) {
    // Simulate API call
    return new Promise((resolve) => {
        setTimeout(() => {
            // Mock response - replace with actual AI model integration
            resolve({
                crop: 'Rice',
                season: 'Kharif',
                farmingMethods: [
                    'Use organic fertilizers',
                    'Implement crop rotation',
                    'Maintain proper irrigation'
                ]
            });
        }, 1500);
    });
}

// Display prediction results directly in the page
export function showPredictionResults(prediction) {
    const page2 = document.getElementById('page2');
    const existingResults = page2.querySelector('.prediction-result');
    if (existingResults) {
        existingResults.remove();
    }
    
    const resultsElement = document.createElement('div');
    resultsElement.className = 'prediction-result';
    
    resultsElement.innerHTML = `
        <h3>🌾 Recommended Crop</h3>
        <p>${prediction.crop}</p>
        
        <h3>🌞 Best Growing Season</h3>
        <p>${prediction.season}</p>
        
        <h3>🌱 Sustainable Farming Methods</h3>
        <ul>
            ${prediction.farmingMethods.map(method => `<li>${method}</li>`).join('')}
        </ul>
    `;
    
    page2.appendChild(resultsElement);
}