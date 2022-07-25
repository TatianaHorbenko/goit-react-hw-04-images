const BASE_URL = 'https://pixabay.com/api/';
const KEY = '26995706-055ab01891f8792046b22d312';
const perPage = 12;

function fetchImages(query, page = 1) {
  return fetch(
    `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`
  ).then(response => {
    if (!response.ok) {
      return Promise.reject(new Error(`Request -${query}- not found`));
    }
    return response.json();
  });
}


export default api;
