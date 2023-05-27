const countItems = () => {
  const items = document.querySelectorAll('.card-item');
  return items.length;
};

export default countItems;