import { fetchImagesFromAPI } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const elements = {
  form: document.getElementById('searchForm'),
  inputField: document.getElementById('searchInput'),
};

elements.form.addEventListener('submit', event => {
  event.preventDefault();

  const searchQuery = elements.inputField.value.trim();

  if (!searchQuery) {
    return;
  }

  fetchImagesFromAPI(searchQuery)
    .then(renderImages)
    .catch(error => console.error(error))
    .finally(() => {
      elements.inputField.value = '';
      elements.inputField.blur();
    });
});

