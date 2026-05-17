import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightBox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

const createGallery = images => {
  return images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
          <li class="gallery-item">
            <a class="gallery-link" href=${largeImageURL}>
              <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
            </a>
            <ul class="img-info-list">
              <li class="img-info-item">
                <p class="info-type">Likes</p>
                <p class="img-info">${likes}</p>
              </li>
              <li class="img-info-item">
                <p class="info-type">Views</p>
                <p class="img-info">${views}</p>
              </li>
              <li class="img-info-item">
                <p class="info-type">Comments</p>
                <p class="img-info">${comments}</p>
              </li>
              <li class="img-info-item">
                <p class="info-type">Downloads</p>
                <p class="img-info">${downloads}</p>
              </li>
            </ul>
          </li>`;
      }
    )
    .join('');
};

const clearGallery = gallery => {
  gallery.innerHtml = '';
};
const hideLoader = loader => {
  loader.classList.remove('is-active');
};

const showLoader = loader => {
  loader.classList.add('is-active');
};

const hideLoadMoreBtn = loadBtn => {
  loadBtn.classList.add('is-hidden');
};

const showLoadMoreButton = loadBtn => {
  loadBtn.classList.remove('is-hidden');
};

export {
  lightBox,
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
  hideLoadMoreBtn,
  showLoadMoreButton,
};
