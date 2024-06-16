document.addEventListener('DOMContentLoaded', function() {


    function saelenMessage() {
      const message = document.createElement('p');
      message.className = 'secret-message';
      message.textContent = 'Their faith is waining. They don`t want the task anymore.';
      document.body.appendChild(message);
      document.querySelector('#saelen-secret').removeEventListener('click', saelenMessage);
      window.scrollTo(0,document.body.scrollHeight);
    }
  
    document.querySelector('#saelen-secret').addEventListener('click', saelenMessage);

    function choices() {
      const choice1 = document.getElementById('choice-1');
      const choice2 = document.getElementById('choice-2');
      const para = document.querySelector('.story-text');
    
      if (choice1) {
        choice1.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-1';
          para.innerHTML = '<p>You don`t have time to react. You step through the portal. Time and space bend around you for a split second and as you take another step you find yourself in a city. An assortment of confused bystanders look in your direction.</p> <p>Chaos has erupted here too. You see the monster that took the patron and chase after it.</p> <p>It notices you again, throwing the person away and decides to fight back. You avoid the first flurry of attacks thrown your way but as you dodge the monster is quicker than first expected. You know this blow is going to hurt so you follow through, thrusting your blade through it`s jaw up into it`s skull.</p> <p>You are knocked to the ground. The strike from the monster hurt but not as much as you expected? You take a moment to check yourself over. Oddly as you look down you notice that your armour has changed? It`s definitely much shinier and apparently tougher! You look over to see the monster slain. You take a moment to look around. The portal is gone. You find someone nearby. `Where am I?` you ask. `What? You are in Neverwinter!` they reply. You notice the city in turmoil. Something within you stirs. There is glory to be found here.....</p> <p><a href="https://www.dndbeyond.com/magic-items/5370-adamantine-armor">You add this to your inventory</a></p> <p>You make your way into the city of Neverwinter.</p>' ;
        });
      }
    
      if (choice2) {
        choice2.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-2';
          para.innerHTML = '<p>You stop. `He is right! What am I doing?!` you think to yourself. Never rush into a situation without proper preperation and consideration. For a moment the lightning stops all around and there is an eerie silence. Yalrut and others approach behind you and spend a moment looking in the portal. You can see a city, it looks like something similar to what happened here is happening there?</p> <p>Yalrut speaks `That looks like Neverwinter!` and just as soon as it had appeared the portal dissapears. The purple hue in the sky lingers now like a bad omen. The patrons nearby begin to head back to the Waypoint Tavern to try and recover. You do the same.</p> <p>You can`t rest. You keep thinking about what happened. You keep thinking of Neverwinter. It gives you a crazy idea.</p> <p>Morning comes. You leave the inn and your crew along with Yalrut are preparing the horses for the rest of the journey to Westgate. You approach the team and speak `Sorry guys. Change of plan. We are going to Neverwinter!` One of them speaks up `What?! That miles away in the opposite direction!` Yalrut looks at you and smiles `It would certainly make a good story.....` It`s settled.</p> <p>On the road Yalrut speaks to you. `I had something I wanted to give to you for the upcoming tournament.` He unwraps a kercheif and inside is a ring. You raise a cheeky eyebrow in his direction. `Not like that you fool! It`s got magical properties. I figured it would spice up the memoir!`</p> <p><a href="https://www.dndbeyond.com/magic-items/4722-ring-of-free-action">You add this to your inventory</a></p><p>You make your way to the city of Neverwinter.</p>';
        });
      }
    }
    choices();
  });
  