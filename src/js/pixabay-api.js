export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43667424-dd140ea76a88c51b2026f12f2';

export const options = {
  params: {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};
