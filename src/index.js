'use strict';

console.log(document);

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
let query = ''

btnLoadMore.style.display = 'none';

