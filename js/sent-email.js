document.getElementById('subscription-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission action

  let name = document.getElementById('name-input').value;
  let email = document.getElementById('email-input').value;

  if(name && email) {
    modalContent2.innerHTML = `<p>Welcome to our community! We\'re thrilled to have you on board. You\'ve just taken a step towards staying updated with the latest and greatest from our corner.</p>`;

    document.getElementById('name-input').value='';
    document.getElementById('email-input').value='';
  }
   else {
    modalContent2.innerHTML = '<p>Please fill out all contact information fields.</p>';

  }
  $('#infoModal2').modal('show');
});
