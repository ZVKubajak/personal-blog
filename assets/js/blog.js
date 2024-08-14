// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement = document.getElementById('main');
const backButton = document.getElementById('back');

// TODO: Create a function that builds an element and appends it to the DOM

function buildElement () {

  const formData = JSON.parse(localStorage.getItem('formData'));

  const ul = document.createElement('ul');
    const li = document.createElement('li');
      const article = document.createElement('article');
        const h2 = document.createElement('h2');
        h2.textContent = formData.title;
        const blockquote = document.createElement('blockquote');
        blockquote.textContent = `Posted by: ${formData.username}`;
        const p = document.createElement('p');
        p.textContent = formData.content;

  mainElement.appendChild(ul);
    ul.appendChild(li);
      li.appendChild(article);
        article.appendChild(h2);
        article.appendChild(blockquote);
        article.appendChild(p);
}

buildElement();
buildElement();
buildElement();
buildElement();
buildElement();

// TODO: Create a function that handles the case where there are no blog posts to display

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

// TODO: Call the `renderBlogList` function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked