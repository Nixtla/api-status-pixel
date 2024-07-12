// Function to check the status of Google and Nixtla APIs
async function checkAPIs() {
  try {
      // Fetch response from Google
      const googleResponse = await fetch('https://www.google.com');
      // Fetch response from Nixtla API
      const nixtlaResponse = await fetch('https://api.nixtla.io');

      // Check if Google responded with 200 and Nixtla responded with status > 399
      // if (googleResponse.status === 200 && nixtlaResponse.status > 399) {
          renderAlertDiv();
      // }
  } catch (error) {
      console.error('Error fetching API data:', error);
  }
}

// Function to render the alert div
function renderAlertDiv() {
  const alertDiv = document.createElement('div');
  alertDiv.textContent = 'API is down';
  alertDiv.style.position = 'absolute';
  alertDiv.style.top = '0';
  alertDiv.style.right = '0';
  alertAlertDiv.style.background = 'red';
  alertDiv.style.zIndex = '10000';
  document.body.appendChild(alertDiv);
}

// Call the checkAPIs function when the script loads
checkAPIs();