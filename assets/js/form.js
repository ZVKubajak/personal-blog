// TODO: Create a variable that selects the form element

const submitForm = document.getElementById('submit');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with missing data, display an error message to the user.

function formSubmission () {
  const formData = {
    username: document.getElementById('username').value,
    title: document.getElementById('title').value,
    content: document.getElementById('content').value
  };

  if (formData.username === '' || formData.title === '' || formData.content === '') {
    const error = document.getElementById('error');
    error.textContent = 'Please fill out all fields.';
    return;
  } else {
    localStorage.setItem('formData', JSON.stringify(formData));
    redirectPage('blog.html');
    return;
  }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

submitForm.addEventListener('click', function (event) {
  event.preventDefault();
  formSubmission();
});