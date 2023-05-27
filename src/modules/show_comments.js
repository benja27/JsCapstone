const showComments = async (index, arrayOfPokemons) => {
  const modal = document.querySelector('.modal-pokemon');
  modal.className = 'modal-pokemon active d-flex align-items-center justify-content-center';
  index -= 1;

  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/hrqIdiXTh94rmLQMrXcG/comments?item_id=${index + 1}`);
  const data = await response.json();
  const commentsArray = [];
  const nameArray = [];
  const creationArray = [];
  for (let i = 0; i < data.length; i += 1) {
    commentsArray.push(data[i].comment);
    nameArray.push(data[i].username);
    creationArray.push(data[i].creation_date);
  }

  modal.innerHTML = '';
  const card = document.createElement('div');
  card.setAttribute('class', 'card col-10 col-md-8');
  modal.appendChild(card);
  const cardBody = document.createElement('div');
  cardBody.setAttribute('class', 'card-body  d-sm-flex');
  card.appendChild(cardBody);
  const closeButton = document.createElement('div');
  closeButton.setAttribute('class', 'button-close-modal');
  const x = document.createElement('i');
  x.setAttribute('class', 'fa-solid fa-xmark');
  closeButton.appendChild(x);
  const pokeinfo = document.createElement('div');
  pokeinfo.setAttribute('class', 'col-sm-6');
  const pokeImg = document.createElement('img');
  pokeImg.setAttribute('src', `${arrayOfPokemons[index].picture}`);
  pokeImg.setAttribute('alt', '');
  const pokeName = document.createElement('h4');
  pokeName.setAttribute('class', 'text-center');
  pokeName.innerText = `${arrayOfPokemons[index].name}`;
  const pokeH1 = document.createElement('h6');
  pokeH1.innerText = `Hablity #1:  ${arrayOfPokemons[index].mov1}`;
  const pokeH2 = document.createElement('h6');
  pokeH2.innerText = `Hability #2:  ${arrayOfPokemons[index].mov2}`;
  const h5 = document.createElement('h5');
  h5.innerText = `Comments (${creationArray.length})`;
  const comments = document.createElement('div');
  comments.setAttribute('class', 'box-comments');
  for (let i = 0; i < data.length; i += 1) {
    const comment = document.createElement('h6');
    comment.innerText = `${`${creationArray[i]}, ${nameArray[i]}, ${commentsArray[i]}`}`;
    comments.appendChild(comment);
  }
  pokeinfo.append(pokeImg, pokeName, pokeH1, pokeH2, h5, comments);
  const formDiv = document.createElement('div');
  formDiv.setAttribute('class', 'col-sm-6 d-flex align-items-center justify-content-center');
  const form = document.createElement('form');
  form.setAttribute('action', '');
  form.setAttribute('class', 'd-flex flex-column justify-content-around w-100');
  formDiv.appendChild(form);
  const nameDiv = document.createElement('div');
  nameDiv.setAttribute('class', 'mb-3');
  const addComment = document.createElement('h6');
  addComment.innerText = 'Add a comment';
  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('class', 'form-control');
  nameInput.setAttribute('name', '');
  nameInput.setAttribute('id', '');
  nameInput.setAttribute('aria-describedby', 'helpId');
  nameInput.setAttribute('placeholder', 'your name');
  nameDiv.append(addComment, nameInput);
  const commentDiv = document.createElement('div');
  commentDiv.setAttribute('class', 'mb-3 flex-grow-1');
  const commenText = document.createElement('textarea');
  commenText.setAttribute('class', 'form-control');
  commenText.setAttribute('name', '');
  commenText.setAttribute('id', '');
  commenText.setAttribute('aria-describedby', 'helpId');
  commenText.setAttribute('placeholder', 'your insights');
  commentDiv.appendChild(commenText);
  const commentButton = document.createElement('button');
  commentButton.setAttribute('type', 'button');
  commentButton.setAttribute('data-id', `${index + 1}`);
  commentButton.setAttribute('class', 'btn btn-primary align-self-end justify-self-end comment-api');
  commentButton.innerText = 'Comment';
  form.append(nameDiv, commentDiv, commentButton);
  cardBody.append(closeButton, pokeinfo, formDiv);
};

const closeModal = () => {
  const modal = document.querySelector('.modal-pokemon');
  modal.className = 'modal-pokemon d-flex align-items-center justify-content-center check';
  modal.innerHTML = '';
};

export { showComments, closeModal };