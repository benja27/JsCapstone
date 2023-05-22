const createCards = async (cards) => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/kfs3iIyqcuFTf4F8U0L7/likes/');
  const data = await response.json();

  console.log(cards);
  const container = document.querySelector('.items-container');

  container.innerHTML = '';

  setTimeout(() => {
    for (const item of cards) {
      const like = data[item.id - 1].likes;
      const card = document.createElement('div');
      card.setAttribute('class', 'card card-item text-center');
      container.appendChild(card);
      const cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');
      card.appendChild(cardBody);
      const h4 = document.createElement('h4');
      h4.setAttribute('class', 'card-title');
      const img = document.createElement('img');
      img.setAttribute('src', `${item.picture}`);
      cardBody.append(h4, img);
      const cardHeader = document.createElement('div');
      cardHeader.setAttribute('class', 'card-header text-center d-flex justify-content-around');
      card.appendChild(cardHeader);
      const h5 = document.createElement('h5');
      h5.innerText = `${item.name.charAt(0).toUpperCase() + item.name.slice(1)}`;
      const likes = document.createElement('div');
      likes.setAttribute('class', 'd-flex flex-column gap-2');
      const icon = document.createElement('i');
      icon.setAttribute('class', 'fa-solid fa-heart like');
      icon.setAttribute('data-id', `${item.id}`);
      const heart = document.createElement('div');
      heart.setAttribute('class', 'd-flex gap-2');
      const h6 = document.createElement('h6');
      h6.innerText = `${like} likes`;
      heart.appendChild(h6);
      likes.append(icon, heart);
      cardHeader.append(h5, likes);
      const buttons = document.createElement('div');
      buttons.setAttribute('class', 'card-header item-buttons-container d-flex flex-column gap-3');
      card.appendChild(buttons);
      const comments = document.createElement('button');
      comments.setAttribute('type', 'button');
      comments.setAttribute('class', 'btn btn-primary comments-window');
      comments.innerText = 'Comments';
      const reservations = document.createElement('button');
      reservations.setAttribute('type', 'button');
      reservations.setAttribute('class', 'btn btn-primary');
      reservations.innerText = 'Reservations';
      buttons.append(comments, reservations);
    }
  }, 1000);
};

export default createCards;