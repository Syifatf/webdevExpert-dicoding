import CONFIG from './config';

const API_ENDPOINT = {
  HOME_RESTO: `${CONFIG.BASE_URL}/list`,
  ADD_REVIEW: `${CONFIG.BASE_URL}/review`,
  SEARCH: `${CONFIG.BASE_URL}/search?q=query`,

  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,

};

export default API_ENDPOINT;
