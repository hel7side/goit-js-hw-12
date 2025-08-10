import axios from 'axios';

const API_KEY = '51535484-ce6dacd6a97960c9e0e55a6bc';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15; // кількість картинок на одну сторінку

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: PER_PAGE,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch images: ' + error.message);
  }
}
