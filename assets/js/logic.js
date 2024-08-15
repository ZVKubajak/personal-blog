// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.

const toggleMode = document.getElementById('toggle');
const body = document.body;

if (localStorage.getItem('mode') === 'dark') {
  body.classList.add('dark');
} else {
  body.classList.remove('dark');
}

toggleMode.addEventListener('click', function () {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.setItem('mode', 'light');
  } else {
    body.classList.add('dark');
    localStorage.setItem('mode', 'dark');
  }
});

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

// Implement the following code into a function.

let blogData = JSON.parse(localStorage.getItem('blogData'));

if (!blogData) {
  blogData = [];
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  blogData.push(formData);

  const updatedBlogData = JSON.stringify(blogData);
  localStorage.setItem('blogData', updatedBlogData);

  console.log(JSON.parse(localStorage.getItem('blogData')));

  return;
}

// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};