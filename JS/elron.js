document.addEventListener('DOMContentLoaded', function() {

    //Nyx secret message
    function elronMessage() {
      const message = document.createElement('p');
      message.className = 'secret-message';
      message.textContent = 'If she speaks to you in a certain tongue. You will become cursed.';
      document.body.appendChild(message);
      document.querySelector('#elron-secret').removeEventListener('click', elronMessage);
      window.scrollTo(0,document.body.scrollHeight);
    }
  
    document.querySelector('#elron-secret').addEventListener('click', elronMessage);

    function choices() {
      const choice1 = document.getElementById('choice-1');
      const choice2 = document.getElementById('choice-2');
      const para = document.querySelector('.story-text');
    
      if (choice1) {
        choice1.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-1';
          para.innerHTML = '<p>You forsake the guard and leave them to their fate. You run out of your cell.</p> <p>You are in the Halls of Justice, where the government and the Neverwinter Guard reside. The structure stands atop a cliff to the west of the city looking out to sea.</p> <p>Chaos erupts around you. Reality is warping before your very eyes. Buildings and people are changing just like they did in Oakhurst. Is this really happening?</p> <p>You take this opportunity to descend the cliffs and make it to the city below. As you are climbing your hand clasps a ring that has wedged itself in one of cliffside crevices</p> <p><a href="https://www.dndbeyond.com/magic-items/4720-ring-of-evasion">You add this to your inventory</a></p> <p>You make your way into the city of Neverwinter.</p>' ;
        });
      }
    
      if (choice2) {
        choice2.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-2';
          para.innerHTML = '<p>You rush to the horror attacking the guard.</p> <p>You keep hitting until a red bloody mess is left on the floor. The guard looks at you from floor their eyes wide and frightened. You have a moment of clarity and lower your bloodied fists.</p> <p>The guard says `Th... th.. thank you for saving me. I don`t know what`s going on! Everything has gone crazy` they look at you and hesitate for a moment. `I don`t what you are in here for but I figure my chances of getting out alive are better with you`</p> <p>You leave with the guard and make your way through the prison. You have to fight a few horrors on the way out. You dispatch them swiftly. One of them was carrying an interesting weapon. You decide to pick it up since yours was taken away.</p> <p><a href="https://www.dndbeyond.com/magic-items/2407478-devotees-censer">You add these to your inventory</a></p><p>You make your way into the city of Neverwinter.</p>';
        });
      }
    }
    choices();
  });
  