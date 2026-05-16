import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  lightBox,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
};

function onSearchFormSubmit(event) {
  event.preventDefault();

  const { target: searchForm } = event;
  const userQuery = searchForm.elements['search-text'].value.trim();

  if (!userQuery) {
    iziToast.warning({
      message: 'Search field cannot be empty. Please enter a keyword.',
      position: 'topRight',
    });

    return;
  }

  clearGallery(refs.gallery);
  showLoader(refs.loader);

  getImagesByQuery(userQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          position: 'topRight',
        });

        return;
      }

      refs.gallery.innerHTML = createGallery(data.hits);
      lightBox.refresh();
    })
    .catch(err => {
      console.log(err.message)
      iziToast.error({
        message: err.message || 'Failed to load images!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader(refs.loader);
      event.target.reset();
    });
}

refs.form.addEventListener('submit', onSearchFormSubmit);