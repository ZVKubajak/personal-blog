// TODO: Create a variable that selects the form element

const form = document.querySelector('form');

// TODO: Create a function that handles the form submission. Grab the form data and store it in local storage, then redirect to the blog page using the redirectPage function. If the form is submitted with missing data, display an error message to the user.

let formData = {
  username: '',
  title: '',
  content: ''
}

let formDataArray = [];

function readLocalStorage() {
  let username = document.getElementById('username').value;
  let title = document.getElementById('title').value;
  let content = document.getElementById('content').value;

  if (!username || !title || !content) {
    alert('Please fill out all fields');
    return;
  } else {
    formData.username = username;
    formData.title = title;
    formData.content = content;

    return readLocalStorage;
  }
}

function storeLocalStorage() {
  readLocalStorage();
  formDataArray.push(formData);
  localStorage.setItem('form-data', JSON.stringify(formDataArray));

  let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

redirectPage('blog.html');
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.

document.getElementById('submit-button').addEventListener('click', storeLocalStorage);