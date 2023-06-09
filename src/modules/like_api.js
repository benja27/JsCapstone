const likeApi = (e) => {
  const involmentAppID = 'hrqIdiXTh94rmLQMrXcG';
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
};
export default likeApi;