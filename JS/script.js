// Execute JavaScript code after the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to fetch data button
    const fetchDataBtn = document.getElementById('fetch-data-btn');
    // Add click event listener to fetch data button
    fetchDataBtn.addEventListener('click', fetchData);
});

// Function to fetch data from external API
function fetchData() {
    // Clear previous data and error messages
    document.getElementById('data-container').innerHTML = '';
    document.querySelector('.error-message').innerHTML = '';

    // Create new XMLHttpRequest object
    const xhr = new XMLHttpRequest();
    // Specify GET request to API endpoint
    xhr.open('GET', 'https://www.boredapi.com/api/activity', true);
    // Event listener for successful response
    xhr.onload = function() {
        // Check if response status is in the success range
        if (xhr.status >= 200 && xhr.status < 300) {
            // Parse JSON response
            const data = JSON.parse(xhr.responseText);
            // Display fetched data
            displayData(data);
        } else {
            // Display error message for failed response
            document.querySelector('.error-message').innerHTML = 'Error fetching data';
        }
    };
    // Event listener for network errors
    xhr.onerror = function() {
        // Display network error message
        document.querySelector('.error-message').innerHTML = 'Network error';
    };
    // Send the HTTP request
    xhr.send();
}

// Function to display fetched data dynamically
function displayData(data) {
    // Get reference to data container
    const container = document.getElementById('data-container');
    // Create unordered list element
    const ul = document.createElement('ul');
    // Create list item
    const li = document.createElement('li');
    // Set text content for list item
    li.textContent = data.activity;
    // Append list item to unordered list
    ul.appendChild(li);
    // Append unordered list to data container
    container.appendChild(ul);
}
