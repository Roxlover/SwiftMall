document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission action

    let firstName = document.getElementById('first-name').value;
    let lastName = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (firstName && lastName && email && message) {
        modalContent.innerHTML = '<p>Hello ' + firstName + ', thank you for reaching out! We\'ll get back to you as soon as possible.</p>';

        document.getElementById('first-name').value = '';
        document.getElementById('last-name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        modalContent.innerHTML = '<p>Please fill out all contact information fields.</p>';
    }
    $('#infoModal').modal('show');
});