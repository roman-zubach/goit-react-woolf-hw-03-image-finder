import axios from 'axios';
import { PIXABAY_API_DOMAIN, PIXABAY_API_KEY } from '../../constant/pixabay';

const instance = axios.create({
  baseURL: PIXABAY_API_DOMAIN,
});

export const getImageApi = async (query, page) => {
  const { data } = await instance.get('/api', {
    params: {
      key: PIXABAY_API_KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page,
      q: query,
    },
  });

  return data;
};
