import './index.css';
import createCards from './modules/create_cards.js';
import { showComments, closeModal } from './modules/show_comments.js';
import getPokemones from './modules/getPokemones.js';
import commentApi from './modules/comment_api.js';
import likeApi from './modules/like_api.js';

let array = [];

document.addEventListener('DOMContentLoaded', async () => {
  array = await getPokemones();
  createCards(array);
});

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.matches('.comments-window')) {
    const index = e.target.dataset.id;
    showComments(index, array);
  }
  if (e.target.matches('.fa-xmark')) {
    closeModal();
  }

  if (e.target.matches('.like')) {
    likeApi(e);
    const text = e.target.parentElement.children[1].children[0].innerText;
    const number = Number(text.slice(0, text.length - 6));
    e.target.parentElement.children[1].children[0].innerText = `${number + 1}${text.slice(text.length - 6, text.length)}`;
  }
  if (e.target.matches('.comment-api')) {
    commentApi(e);
  }
});
