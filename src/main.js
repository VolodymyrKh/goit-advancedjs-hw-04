import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  lightBox,
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  hideLoadMoreBtn,
  showLoadMoreButton,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.js-loader'),
  loadMore: document.querySelector('.js-load-more'),
};

let page = 0;
const per_page = 15;
let totalPages = 0;
let userQuery = '';

async function onSearchFormSubmit(event) {
  event.preventDefault();

  const { target: searchForm } = event;
  userQuery = searchForm.elements['search-text'].value.trim();

  if (!userQuery) {
    iziToast.warning({
      message: 'Search field cannot be empty. Please enter a keyword.',
      position: 'topRight',
    });

    return;
  }

  clearGallery(refs.gallery);
  showLoader(refs.loader);
  page = 1;

  try {
    const { hits, totalHits } = await getImagesByQuery(userQuery, page);
    if (hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
      });

      return;
    }

    refs.gallery.innerHTML = createGallery(hits);
    lightBox.refresh();

    totalPages = Math.ceil(totalHits / per_page);

    if (totalPages > 1) {
      showLoadMoreButton(refs.loadMore);
      refs.loadMore.addEventListener('click', onLoadMore);
    }
  } catch (err) {
    iziToast.error({
      message: err.message || 'Failed to load images!',
      position: 'topRight',
    });
  } finally {
    hideLoader(refs.loader);
    event.target.reset();
  }
}

const onLoadMore = async event => {
  hideLoadMoreBtn(refs.loadMore);
  showLoader(refs.loader);
  try {
    page++;
    const { hits } = await getImagesByQuery(userQuery, page);

    refs.gallery.insertAdjacentHTML('beforeend', createGallery(hits));
    lightBox.refresh();

    const { height } = document
      .querySelector('.gallery-item')
      .getBoundingClientRect();
    window.scrollBy({
      top: 2 * height,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
  } finally {
    hideLoader(refs.loader);

    if (page === totalPages) {
      refs.loadMore.removeEventListener('click', onLoadMore);
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }

    showLoadMoreButton(refs.loadMore);
  }
};

refs.form.addEventListener('submit', onSearchFormSubmit);
