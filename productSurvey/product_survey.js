function submitFeedback() {
}

const username = document.getElementById('userName').innerHTML = username;
const age = document.getElementById('userAge').innerHTML = age;
const email = document.getElementById('userEmail').innerHTML = email;
const job = document.getElementById('userJob').innerHTML = job;
const designation = document.getElementById('userDesignation').innerHTML = designation;
const productType = document.getElementById('userProductChoice').innerHTML = productType;
const feedback = document.getElementById('userFeedback').innerHTML = feedback;

const submitButton=document.getElementById('submitBtn');

submitButton.onclick = submitFeedback;

alert('Thank you for your valuable feedback')

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      submitFeedback();
    }
  });