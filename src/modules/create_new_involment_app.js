const createApp = () => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(url, config)
    .then((Response) => Response.text())
    .then((data) => data)
    .catch((error) => error);
};

export default createApp;