// Arrays to hold the websites and phone numbers
let fakeWebsites = {review: [], confirmed: []};
let fakePhoneNumbers = {review: [], confirmed: []};
let fakeEmails = {review: [], confirmed: []};

// Regular expression for URL validation
const websiteRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;

// Function to validate and add a fake website
function addFakeWebsite() {
    const websiteInput = document.getElementById('website-input')?.value.trim();
    
    // Check if the input is empty
    if (websiteInput === "") {
        alert("Please enter a website URL.");
        return;
    }

    // Validate the website format
    if (!websiteRegex.test(websiteInput)) {
        alert("Please enter a valid website URL.");
        return;
    }

    // Check if the website has already been entered
    if (fakeWebsites.review.includes(websiteInput) || fakeWebsites.confirmed.includes(websiteInput)) {
        alert("This website has already been entered.");
        return;
    }

    // Add the website to the 'review' list
    fakeWebsites.review.push(websiteInput);
    displayFakeWebsites();
    document.getElementById('website-input').value = ''; // Clear input field
}

// Function to display fake websites
function displayFakeWebsites() {
    const reviewList = document.getElementById('review-websites');
    const confirmedList = document.getElementById('confirmed-websites');
    
    if (reviewList) {
        reviewList.innerHTML = fakeWebsites.review.map(site => `<li>${site}</li>`).join('');
    }
    if (confirmedList) {
        confirmedList.innerHTML = fakeWebsites.confirmed.map(site => `<li>${site}</li>`).join('');
    }
}

// Regular expression for phone number validation (e.g., +1234567890, 8-16 digits)
const phoneRegex =/^\+\d{10,17}$/;

// Function to validate and add a fake phone number
function addFakePhoneNumber() {
    const phoneInput = document.getElementById('phone-input')?.value.trim();

    if (phoneInput === "") {
        alert("Please enter a phone number.");
        return;
    }

    // Validate phone number format
    if (!phoneRegex.test(phoneInput)) {
        alert("Please enter in the correct format, e.g. +1234567890!");
        return;
    }

    // Check if the phone number has already been entered
    if (fakePhoneNumbers.review.includes(phoneInput) || fakePhoneNumbers.confirmed.includes(phoneInput)) {
        alert("This phone number has already been entered.");
        return;
    }

    // Add the phone number to the 'review' list
    fakePhoneNumbers.review.push(phoneInput);
    displayFakePhoneNumbers();
    document.getElementById('phone-input').value = ''; // Clear input field
}

// Function to display fake phone numbers
function displayFakePhoneNumbers() {
    const reviewList = document.getElementById('review-phones');
    const confirmedList = document.getElementById('confirmed-phones');
    
    if (reviewList) {
        reviewList.innerHTML = fakePhoneNumbers.review.map(phone => `<li>${phone}</li>`).join('');
    }
    if (confirmedList) {
        confirmedList.innerHTML = fakePhoneNumbers.confirmed.map(phone => `<li>${phone}</li>`).join('');
    }
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function addEmail() {
    const emailInput = document.getElementById('email-input')?.value.trim();

    if (emailInput === "") {
        alert("Please enter an email.");
        return;
    }

    if (!emailRegex.test(emailInput)) {
        alert("Please enter a valid email.");
        return;
    }

    if (fakeEmails.review.includes(emailInput) || fakeEmails.confirmed.includes(emailInput)) {
        alert("This email has already been entered.");
        return;
    }

    fakeEmails.review.push(emailInput);
    displayFakeEmails();
    document.getElementById('email-input').value = '';
}

function displayFakeEmails(){
    const reviewList = document.getElementById('review-emails');
    const confirmedList = document.getElementById('confirmed-emails');

    if (reviewList) {
        reviewList.innerHTML = fakeEmails.review.map(email => `<li>${email}</li>`).join('');
    }
    if (confirmedList) {
        confirmedList.innerHTML = fakeEmails.confirmed.map(email => `<li>${email}</li>`).join('');
    }
}
