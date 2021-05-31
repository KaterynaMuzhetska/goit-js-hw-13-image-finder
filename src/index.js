import './index.css';

import CardApiService from './apiService';
import imgTmpl from './imageCard.hbs';


const cardApiService = new CardApiService();
const galleryEl = document.querySelector('.gallery');
const btnEl = document.querySelector('[data-action="load-more"]');

btnEl.classList.add('is-hidden');

function searchImages(event) {
    event.preventDefault();
    clearAImgContainer();
    cardApiService.searchQuery = event.currentTarget.elements.query.value;
    cardApiService.page=1;
    cardApiService.getImages().then(imgMarkup);
    btnEl.addEventListener('click', onLoadMore);
    btnEl.classList.remove('is-hidden');
}

function imgMarkup(hits) {
    galleryEl.insertAdjacentHTML('beforeend', imgTmpl(hits));
    galleryEl.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
}

function onLoadMore() {
    cardApiService.getImages().then(imgMarkup);
}

function clearAImgContainer() {
    galleryEl.innerHTML = '';
  }

const imgForm = document.getElementById('search-form');
imgForm.addEventListener('submit', searchImages);

