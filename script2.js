let count = 0;
document.querySelector('.ls').addEventListener('click', () => {
  count++;
  localStorage.setItem('b1', count);
});
