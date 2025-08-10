import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a');

function getLoader() {
  return document.querySelector('.loader');
}

export function showLoader() {
  const loaderEl = getLoader();
  if (loaderEl) {
    loaderEl.classList.remove('hidden');
  }
}

export function hideLoader() {
  const loaderEl = getLoader();
  if (loaderEl) {
    loaderEl.classList.add('hidden');
  }
}
export function clearGallery() {
  gallery.innerHTML = '';
}

export function createGallery(images) {
  const markup = images
    .map(
      image => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${image.likes}</p>
          <p>Views: ${image.views}</p>
          <p>Comments: ${image.comments}</p>
          <p>Downloads: ${image.downloads}</p>
        </div>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
export function showLoadMoreButton() {
  const btn = document.querySelector('.load-more');
  if (btn) btn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  const btn = document.querySelector('.load-more');
  if (btn) btn.classList.add('hidden');
}


