import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com';

export const getImagesByQuery = async (query, page, per_page = 15) => {
  const params = {
    key: '15336169-fb8ecea9b4c4a863b6c6a9193',
    q: query,
    page,
    per_page,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const { data } = await axios.get('/api', { params });

  return data;
};
