document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('questionnaireForm');
  const audio = document.getElementById('background-audio');
  const audioControlButton = document.getElementById('audio-control');
  const playPauseIcon = document.getElementById('play-pause-icon');

  // Form submission handler
  form.addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    const formData = new FormData(form);
    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        window.location.href = "submit.html";
      } else {
        alert('There was a problem submitting your form.');
      }
    }).catch(error => {
      alert('There was a problem submitting your form.');
    });
  });

  // Display a message when the image is clicked
  function showMessage1() {
    const message = document.createElement('p');
    message.textContent = 'Keep looking for secrets. They bring power.';
    document.body.appendChild(message);
    document.querySelector('.image').removeEventListener('click', showMessage1);
  }

  document.querySelector('.image').addEventListener('click', showMessage1);

  // Display a message when the secret word is clicked
  function showMessage2() {
    const message = document.createElement('p');
    message.textContent = 'One of the mages is not what they seem.';
    document.body.appendChild(message);
    document.querySelector('#secret-word').removeEventListener('click', showMessage2);
  }

  document.querySelector('#secret-word').addEventListener('click', showMessage2);

  // Play/Pause background audio
  audioControlButton.addEventListener('click', function() {
    if (audio.paused) {
      audio.play();
      playPauseIcon.classList.remove('fa-play');
      playPauseIcon.classList.add('fa-pause');
    } else {
      audio.pause();
      playPauseIcon.classList.remove('fa-pause');
      playPauseIcon.classList.add('fa-play');
    }
  });
});
