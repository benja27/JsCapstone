import './index.css';
import html from "./index.html"
import createCards from './modules/create_cards.js';
import { showComments, closeModal } from './modules/show_comments.js';
import getPokemones from './modules/getPokemones.js';

let array = [];
const involmentAppID = 'kfs3iIyqcuFTf4F8U0L7';

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
    const index = Number(e.target.dataset.id);
    fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involmentAppID}/likes/`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: index,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const text = e.target.parentElement.children[1].children[0].innerText;
    const number = Number(text.slice(0, text.length - 6));
    e.target.parentElement.children[1].children[0].innerText = `${number + 1}${text.slice(text.length - 6, text.length)}`;
  }
});
