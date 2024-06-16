document.addEventListener('DOMContentLoaded', function() {


    function dolramMessage() {
      const message = document.createElement('p');
      message.className = 'secret-message';
      message.textContent = 'Add a secret message here ;)';
      document.body.appendChild(message);
      document.querySelector('#dolram-secret').removeEventListener('click', dolramMessage);
      window.scrollTo(0,document.body.scrollHeight);
    }
  
    document.querySelector('#dolram-secret').addEventListener('click', dolramMessage);

    function choices() {
      const choice1 = document.getElementById('choice-1');
      const choice2 = document.getElementById('choice-2');
      const para = document.querySelector('.story-text');
    
      if (choice1) {
        choice1.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-1';
          para.innerHTML = '<p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p><a href="https://www.dndbeyond.com/magic-items/2411862-amulet-of-the-devout-2">You add this to your inventory</a></p> <p>You make your way to the city of Neverwinter.</p>' ;
        });
      }
    
      if (choice2) {
        choice2.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-2';
          para.innerHTML = '<p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p></p> <p><a href="https://www.dndbeyond.com/magic-items/4730-ring-of-spell-storing">You add this to your inventory</a></p><p>You make your way to the city of Neverwinter.</p>';
        });
      }
    }
    choices();
  });
  