import './index.css';
import html from "./index.html"
import createCards from '../src/modules/create_cards.js';
import {showComments, closeModal} from './modules/show_comments.js';
import getPokemones from './modules/getPokemones.js';

let array = []
let involmentAppID= "kfs3iIyqcuFTf4F8U0L7"

document.addEventListener("DOMContentLoaded", async ()=>{
  array = await getPokemones()
  console.log(array)
  createCards(array)
})


document.querySelector("body").addEventListener("click", e => {
  if(e.target.matches(".comments-window")){
    showComments()
  }
  if(e.target.matches(".button-close-modal")){
     closeModal() 
  }
})






