// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.

function readLocalStorage () {
  let blogData = JSON.parse(localStorage.getItem('blogData'));

  if (!blogData) {
    blogData = [];
  }

  return blogData;
}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.

function storeLocalStorage () {
  readLocalStorage();

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