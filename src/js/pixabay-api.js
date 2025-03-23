import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const API_KEY = '49492514-812d245cc52e4f29e485c4df0';
const BASE_URL = 'https://pixabay.com/api/';

const REQUEST_PARAMS = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

function handleError(message) {
  iziToast.show({
    message,
    position: 'topRight',
    timeout: 7000,
    backgroundColor: '#EF4040',
    messageColor: '#FAFAFB',
    iconUrl: './img/icons/close.svg',
    closeOnEscape: true,
    closeOnClick: true,
    maxWidth: '432px',
  });
}

function fetchImagesFromAPI(searchQuery) {
  const loadingIndicator = document.getElementById('loader');
  loadingIndicator.style.display = 'flex';

  return axios
    .get(BASE_URL, {
      params: { ...REQUEST_PARAMS, q: searchQuery },
    })
    .then(response => response.data)
    .catch(() => handleError('Failed to fetch images'))
    .finally(() => {
      loadingIndicator.style.display = 'none';
    });
}

export { fetchImagesFromAPI, handleError };
