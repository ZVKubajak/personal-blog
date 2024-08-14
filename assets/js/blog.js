// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement = document.getElementById('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM

function buildElement(tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
  element.className = className;
  mainElement.appendChild(element);
}

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked