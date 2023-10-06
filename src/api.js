'use strict';

import axios from 'axios';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';

const apiKey = '39827668-13c2fa0efedd451aadbb8d885';
const BASE_URL = 'https://pixabay.com/api/';

export async function searchPhoto(query) {
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

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};