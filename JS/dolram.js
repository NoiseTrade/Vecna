document.addEventListener('DOMContentLoaded', function() {


    function dolramMessage() {
      const message = document.createElement('p');
      message.className = 'secret-message';
      message.textContent = 'Don`t let them speak in that tongue. it will curse you.';
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
          para.innerHTML = '<p>You do it. You take the chance. You step through the portal. You feel time and space bend around you and with a flash you are through the otherside.</p> <p>This is no longer the shadowfell. You can hardly believe it. You look up, you see the night sky lit with stars and a strange purple hue. You take a deep breath, oh the sweetness of the air. You feel the wind, you hear waves crashing. You remember all these things from your prvious life. </p> <p>`Excuse me` you hear. You snap back to reality. You notice you are standing atop a hill overlooking a city. Standing just up ahead you see the woman you helped just moments ago. She says to you `Well you are a smart lad for getting out of there. Sadly it may have only delayed your troubles though.` She points to the city below.</p> <p>You look and notice it for yourself. Those same purple sparks of energy emenating from the city. You ask her `Where are we? And who are you?` She responds `Well we are just on the outskirts of the city of Neverwinter. You may refer to me as Tasha. Listen, you are pretty good in a pinch and we have some work to do so you better follow along.` She begins descending the hill. you are compelled to follow.</p> <p>You reach for your sword and stop. You unsheathe it. You can`t feel it. You can`t feel the power. You outstretch your hand. Nothing. You try and listen and hear nothing.</p> <p>You feel fear, you feel mortal for the first time in a long time.</p> <p>[More power comes to those who wait - temporarily lose your warlock pact]</p> <p>You make your way to the city of Neverwinter.</p>' ;
        });
      }
    
      if (choice2) {
        choice2.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-2';
          para.innerHTML = '<p>You stop. You can`t do it, who knows what would happend if you did. The portal closes.</p> <p>The tear grows and you run in the opposite direction. After a while you stop and catch your breath. You grab the hilt of your sword and just before you begin trying to summon her you hear her voice.</p> <p>`Dolram. I can sense it and I do not have much time. The whispered one has unleashed his plan and I won`t be able to stop it. He has deceived us all and we were blind. I need you to undertake this task.` You take a moment, this is the most direct this has ever been from the Raven Queen. You look behind you. You see the purple rip in reality growing bigger and faster. You have no time to ponder.</p> <p>`I accept.` you say, despite never having the choice. `What do you need me to do` you ask. She responds `I need you to travel to the material plane. The servants of the whispered on are carrying out his plan. You must find them and stop them.`</p> <p>You understand the assignment. It`s not unlike what you have done before for her. Before the tear can take you, a black swirling portal appears before you. You do not hesitate and step through.You feel time and space bend around you and with a flash you are through the otherside.</p> <p>You appear at the top of a grassy hill. This is no longer the shadowfell. You can hardly believe it. You look up, you see the night sky lit with stars and a strange purple hue. You take a deep breath, oh the sweetness of the air. You feel the wind, you hear waves crashing. You remember all these things from your prvious life. And yet the shadowfell still lingers on you.</p> <p>You see a city down below. You notice similar purple energy emenating from the city. You begin heading in that direction.</p><p>As you begin descending the hill you notice a weight around your neck and as your hand reaches up, you feel a necklace that was not there before.</p><a href="https://www.dndbeyond.com/magic-items/27044-dark-shard-amulet">You add this to your inventory</a></p><p>You make your way to the city of Neverwinter.</p>';
        });
      }
    }
    choices();
  });
  