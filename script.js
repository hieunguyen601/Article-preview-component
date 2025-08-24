const shareBtn = document.querySelector('.share-button');
const links = document.querySelector('.links');

shareBtn.addEventListener('click', () => {
  links.classList.toggle('show');

  if (links.classList.contains('show')) {
    shareBtn.classList.add('show');
  } else {
    shareBtn.classList.remove('show');
  }
});