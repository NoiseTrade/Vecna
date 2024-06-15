document.addEventListener('DOMContentLoaded', function() {

    //Nyx secret message
    function nyxMessage() {
      const message = document.createElement('p');
      message.className = 'secret-message';
      message.textContent = 'The orc is the culprit. His mind is lost.';
      document.body.appendChild(message);
      document.querySelector('#nyx-secret').removeEventListener('click', nyxMessage);
      window.scrollTo(0,document.body.scrollHeight);
    }
  
    document.querySelector('#nyx-secret').addEventListener('click', nyxMessage);

    function choices() {
      const choice1 = document.getElementById('choice-1');
      const choice2 = document.getElementById('choice-2');
      const para = document.querySelector('.story-text');
    
      if (choice1) {
        choice1.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-1';
          para.innerHTML = '<p>You continue to follow the trail, ignoring the shouting. You come to the end of the trail.</p> <p>One of the corrupted trees has wrapped itself around a body. You investigate and find another druid, you do not recognise them but you identify that they are from the circle of the moon.</p> <p>You gather their belongings hoping that you can find their circle and let them know what happened. You find a hastily scrawled note that indicates that what is happening here might be originating from the city of Neverwinter itself, and this druid was intending to go there and see what they could find.</p> <p>On the ground you find the staff that belonged to this druid.</p> <p><a href="https://www.dndbeyond.com/magic-items/4769-staff-of-the-woodlands">You add this to your inventory</a></p> <p>You make your way to the city of Neverwinter</p>' ;
        });
      }
    
      if (choice2) {
        choice2.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-2';
          para.innerHTML = '<p>You dimiss the trail and run in the direction of the shouting.</p><p>You find a clearing where a small outcropping of large rocks sit. At the top you see a gnome screaming for help. At the bottom you notice an animal of the forest snarling and acting irratically.</p><p>You distract the animal. It sets it`s sights on you and charges, you cast a spell. The animals attention becomes focused on the spell and it runs back into the forest.</p><p>The gnome clambers down from the rocks. They say,</p><p>`Phew, thanking you for helping me! If you weren`t nearby I have no idea what I would have done. My name is Umberto Noblin. I am a historian of sorts. I am out here because similar strange things appear to be happening in the city of Neverwinter! I am on my way there now if you wish to accompany me?` his eyes pleading `Oh here is something for the trouble!`</p><p>Umberto hands you three small red phials.</p> <p><a href="https://www.dndbeyond.com/magic-items/5351-elixir-of-health">You add these to your inventory</a></p><p>You make your way to the city of Neverwinter.</p>';
        });
      }
    }
    choices();
  });
  