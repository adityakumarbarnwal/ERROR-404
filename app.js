const api_Key = 'eda6222e6b0d461da0c3e6a58f44f741';
const numverifyApiKey = '637cde1723e110539d29c73f4a6b113b';
const apiKey = '72dc5a2d4e651e472e41def70c428c1dd6ee21dccfd4f5a93ad7bb7d2000f474';

// Function to check email
function httpGetAsync(url, callback) {
		const email = document.getElementById('emailInput').value;

                  const xmlHttp = new XMLHttpRequest();
                  xmlHttp.onreadystatechange = function() {
                      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                      callback(xmlHttp.responseText);
                  }
                  xmlHttp.open("GET", url, true); // true for asynchronous
                  xmlHttp.send(null);
              }

              const url = "https://emailvalidation.abstractapi.com/v1/?api_key=${api_key}&email=${email}"

              httpGetAsync(url)

// Function to check phone number
async function checkPhone() {
    const phone = document.getElementById('phoneInput').value;
    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = "Checking phone number...";

    const response = await fetch(`http://apilayer.net/api/validate?access_key=${numverifyApiKey}&number=${phone}`);
    const result = await response.json();
    
    if (result.valid) {
        document.getElementById('result').innerHTML = `<span class="success">Valid Phone Number!</span>`;
    } else {
        document.getElementById('result').innerHTML = `<span class="error">Invalid Phone Number!</span>`;
    }
}

// Function to check website
async function checkURL() {
    const urlInput = document.getElementById('urlInput').value;
    // Replace with your VirusTotal API key
    
    if (!urlInput) {
        document.getElementById('result').innerHTML = 'Please enter a valid URL.';
        return;
    }
    
    const apiUrl = `https://www.virustotal.com/vtapi/v2/url/report?apikey=${apiKey}&resource=${encodeURIComponent(urlInput)}`;

    try {
        // Show the user that the check is in progress
        document.getElementById('result').innerHTML = 'Checking URL...';

        const response = await fetch(apiUrl, {
            method: 'GET'
        });

        const result = await response.json();

        if (result.response_code === 1) {
            if (result.positives > 0) {
                document.getElementById('result').innerHTML = `
                    The URL has been flagged by ${result.positives} out of ${result.total} security vendors as unsafe.
                `;
            } else {
                document.getElementById('result').innerHTML = 'The URL is safe!';
            }
        } else {
            document.getElementById('result').innerHTML = 'The URL was not found in VirusTotal’s database.';
        }
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('result').innerHTML = 'An error occurred while checking the URL.';
    }
}
