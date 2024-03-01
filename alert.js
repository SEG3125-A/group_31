const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const surveyForm = document.getElementById('surveyForm');

const appendAlert = (message, type) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;
    alertPlaceholder.innerHTML = ''; // Clear existing alerts
    alertPlaceholder.appendChild(wrapper);
};

const validateForm = () => {
    // Check if any input is selected
    const textQuestion = document.getElementById('textQuestion').value.trim();
    const radioQuestion = document.querySelector('input[name="radioQuestion"]:checked');
    const listQuestion = document.getElementById('listQuestion').value;
    const checkboxes = document.querySelectorAll('input[name="checkboxQuestion"]:checked');
    const visualAppeal = document.querySelector('input[name="visual_appeal"]:checked');
    const comments = document.getElementById('comments').value.trim();

    // Validate here as needed
    if (!textQuestion || !radioQuestion || !listQuestion || checkboxes.length === 0 || !visualAppeal || !comments) {
        appendAlert('Please complete all fields', 'warning');
        return false;
    }

    return true;
};

if (surveyForm) {
    surveyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // If form is valid, show success alert
            appendAlert('Thank you, we received your survey!', 'success');
            
            // Serialize form data
            const formData = new FormData(surveyForm);
            const jsonData = {};
            formData.forEach((value, key) => {
                jsonData[key] = value;
            });

            // Send a POST request with the form data
            fetch('http://localhost:5501/submit_survey', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonData)
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            }).then(data => {
                console.log('Success:', data);
            }).catch((error) => {
                console.error('Error:', error);
            });

            // Clear the form
            surveyForm.reset();
        }
    });
}
