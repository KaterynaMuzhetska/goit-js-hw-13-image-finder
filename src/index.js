import CardApiService from './apiService';


const cardApiService = new CardApiService();


function searchImages(event) {
    event.preventDefault();

    //clearHitsContainer()
    cardApiService.searchQuery = event.currentTarget.elements.query.value;
    cardApiService.page=1;
    cardApiService.getImages().then(response => {
        console.log(response);
    });
}

const imgForm = document.getElementById('search-form');
imgForm.addEventListener('submit', searchImages);

