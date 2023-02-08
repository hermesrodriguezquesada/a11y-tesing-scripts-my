document.addEventListener('click', function(event) {
  if (event.altKey && event.target.tagName === 'TD') {
    event.target.parentNode.style.display = 'none';
  }
}, false);
