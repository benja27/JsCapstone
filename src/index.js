import './index.css';
import html from "./index.html"
import createCards from './modules/create_cards.js';
import { showComments, closeModal } from './modules/show_comments.js';
import getPokemones from './modules/getPokemones.js';
import commentApi from './modules/comment_api.js';
import likeApi from './modules/like_api.js';
let array = [];
const involmentAppID = 'hrqIdiXTh94rmLQMrXcG';

document.addEventListener('DOMContentLoaded', async () => {
  array = await getPokemones();  
  createCards(array);
});

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.matches('.comments-window')) {
    let index = e.target.dataset.id    
    showComments(index, array);
  }
  if (e.target.matches('.fa-xmark')) {    
    closeModal();
  }


  if (e.target.matches('.like')) {
    likeApi(e);
  }
  if (e.target.matches('.comment-api')) {
    commentApi(e);
  }
});
