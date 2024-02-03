document.querySelector('.read-more-link').addEventListener('click', function() {
    document.getElementById('popupOverlay').style.display = 'block';
  });
  
  function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
  }
  
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }

  //View more button
  function toggleViewMore() {
    var viewMoreContent = document.getElementById('viewMoreContent');
    var viewMoreButton = document.querySelector('.button-85');
  
    if (viewMoreContent.classList.contains('show')) {
      viewMoreContent.classList.remove('show');
      setTimeout(function() {
        viewMoreContent.style.display = 'none';
        viewMoreButton.classList.remove('hidden');
      }, 1000); // Adjust the delay to match the transition duration
    } else {
      viewMoreContent.style.display = 'block';
      viewMoreButton.classList.add('hidden');
      setTimeout(function() {
        viewMoreContent.classList.add('show');
      }, 100);
    }
  }
  