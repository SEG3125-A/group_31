document.addEventListener('DOMContentLoaded', (event) => {
  const toastPlaceholder = document.getElementById('liveToastPlaceholder');
  const surveyForm = document.getElementById('surveyForm');

  const appendToast = (message, type) => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = `
          <div class="toast align-items-center text-white bg-${type} border-0" role="alert" aria-live="assertive" aria-atomic="true">
              <div class="d-flex">
                  <div class="toast-body">
                      ${message}
                  </div>
                  <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
          </div>
      `;
      toastPlaceholder.appendChild(wrapper);
      var toastElList = [].slice.call(document.querySelectorAll('.toast'))
      var toastList = toastElList.map(function (toastEl) {
          return new bootstrap.Toast(toastEl, { autohide: false })
      });
      toastList.forEach(toast => toast.show()); // This show them
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
      if (!textQuestion && !radioQuestion && !listQuestion && checkboxes.length === 0 && !visualAppeal && !comments) {
          appendToast('Please select at least one field', 'warning');
          return false;
      }

      if (!textQuestion || !radioQuestion || !listQuestion || checkboxes.length === 0 || !visualAppeal || !comments) {
          appendToast('Please complete all fields', 'warning');
          return false;
      }

      return true;
  };

  if (surveyForm) {
      surveyForm.addEventListener('submit', (e) => {
          e.preventDefault();
          
          if (validateForm()) {
              // If form is valid, show success toast
              appendToast('Thank you, we received your survey!', 'success');
              
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
});
