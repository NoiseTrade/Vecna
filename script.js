document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    alert('The link cannot be unbroken.');
  });

  function showMessage1() {
		const message = document.createElement('p');
		message.textContent = 'Keep looking for secrets. They bring power';
		document.body.appendChild(message);
		document.querySelector('.image').removeEventListener('click', showMessage1);
}

document.querySelector('.image').addEventListener('click', showMessage1);


    function showMessage2() {
		const message = document.createElement('p');
		message.textContent = 'One of the mages are not what they seem.';
		document.body.appendChild(message);
		document.querySelector('#secret-word').removeEventListener('click', showMessage2);
}

document.querySelector('#secret-word').addEventListener('click', showMessage2);