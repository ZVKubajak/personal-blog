// TODO: Create a variable that selects the form element

const submitForm = document.getElementById('submit');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function getFormData () {
  const formData = {
    username: document.getElementById('username').value,
    title: document.getElementById('title').value,
    content: document.getElementById('content').value
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}

function formSubmission () {
  getFormData();
  redirectPage('blog.html');
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

submitForm.addEventListener('click', function (event) {
  event.preventDefault();
  formSubmission();
});