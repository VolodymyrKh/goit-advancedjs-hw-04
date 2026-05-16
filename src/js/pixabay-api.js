import axios from 'axios';

export const getImagesByQuery = (query) => {
  const params = new URLSearchParams({
    key: '15336169-fb8ecea9b4c4a863b6c6a9193',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios
    .get(`https://pixabay.com/api/?${params}`)
    .then(response => response.data);
}
