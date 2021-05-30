const BASE_URL = 'https://pixabay.com/api/';
const KEY = '21861740-2e8326a7e68da7a305e28803b';


export default class CardApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }
    getImages() {
        return fetch(`${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`)
            .then(r => r.json())
            .then(({ hits }) => {
                this.page += 1;
                return hits;
            })
            .catch(error =>
                console.log('error', error));
    }
    
}    
