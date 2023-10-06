'use strict';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchPhoto } from './api';

const apiKey = '39827668-13c2fa0efedd451aadbb8d885';

const searchForm = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const btnLoadMore = document.querySelector('.load-more');

const perPage = 40;
let page = 1;


btnLoadMore.style.display = 'none';

const onSearch = async (e) => {
  e.preventDefault();
     console.log(e.target.elements)
    try {
      
        const query = e.target.elements.searchQuery.value.trim();
        console.log(query)
    if (query === '') { 
      Notiflix.Notify.warning('Enter your search query, please!');
      return;
    }

        const data = await searchPhoto(query, page); //pobranie danych

    if (data.hits.length === 0) { // sprawdzam czy znaleziono jakis obraz
      Notiflix.Notify.warning('Sorry, there are no images matching your search query. Please try again.'); // jeśli nie to info
    } else {
    
      galleryElements(data.hits);  // Wyświetl znalezione obrazy

      const totalHits = data.totalHits; // wyświetlenie ile jest obrazów
      Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);

      // Sprawdź, czy należy wyświetlić przycisk btnLoadMore
      if (data.totalHits <= page * perPage) {
        btnLoadMore.style.display = 'none';
        Notiflix.Notify.warning("We're sorry, but you've reached the end of search results.");
      } else {
        btnLoadMore.style.display = 'block';
      }
    }
  } catch (err) {
    console.error('Error:', err);
    Notiflix.Notify.failure('Oops! Something went wrong. Please try again later.');
  }
};
  
searchForm.addEventListener('submit', onSearch);