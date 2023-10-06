'use strict';

import axios from 'axios';

const apiKey = '39827668-13c2fa0efedd451aadbb8d885';
const BASE_URL = 'https://pixabay.com/api/';

export async function searchPhoto(query, page) {
      try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: apiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        perPage: 40,
      },
    });
          console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};