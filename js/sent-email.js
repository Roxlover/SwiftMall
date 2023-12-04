document.getElementById('subscription-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the default form submission action

  var name = document.getElementById('name-input').value;
  var email = document.getElementById('email-input').value;

  if(name && email) {
      alert('Hello ' + name + ', we subscribed your email');
  } else {
      alert('Please enter both your name and email.');
  }
});