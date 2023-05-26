const commentApi = (e) => {
  const involmentAppID = 'hrqIdiXTh94rmLQMrXcG';
  const index = Number(e.target.dataset.id);
  const date = new Date();
  const month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  const num = month[date.getMonth()];
  const actualDate = `${date.getFullYear()}-${num}-${date.getDate()}`;
  const name = e.target.parentElement.children[0].children[1].value;
  const comment = e.target.parentElement.children[1].children[0].value;
  if (name.length < 1 && comment.length < 1) {
    return false;
  }
  fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${involmentAppID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: index,
      comment,
      username: name,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const commentBox = e.target.parentElement.parentElement.parentElement.children[1].children[5];
  const com = document.createElement('h6');
  com.innerText = `${`${actualDate}, ${name}, ${comment}`}`;
  commentBox.appendChild(com);
  const text = e.target.parentElement.parentElement.parentElement.children[1].children[4];
  const count = Number(text.innerText.slice(10, text.innerText.length - 1));
  text.innerText = `${text.slice(0, 10)}${count + 1}${text.innerText.slice(text.innerText.length - 1)}`;
  return true;
};

export default commentApi;