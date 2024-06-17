document.addEventListener('DOMContentLoaded', function() {


    function nylaMessage() {
      const message = document.createElement('p');
      message.className = 'secret-message';
      message.textContent = 'They want to escape. They want their life back.';
      document.body.appendChild(message);
      document.querySelector('#nyla-secret').removeEventListener('click', nylaMessage);
      window.scrollTo(0,document.body.scrollHeight);
    }
  
    document.querySelector('#nyla-secret').addEventListener('click', nylaMessage);

    function choices() {
      const choice1 = document.getElementById('choice-1');
      const choice2 = document.getElementById('choice-2');
      const para = document.querySelector('.story-text');
    
      if (choice1) {
        choice1.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-1';
          para.innerHTML = '<p>You fire a spell at the robed figure grabbing your father and they drop to the ground. You get one last glimpse before Torsten is taken through the portal and it closes behind him. As quick as they had opened the portals all close. Only you, your father and the dead research assistant are left.</p> <p>Your father speaks `Thank Talos your aim was true Nyla. Worry not for Torsten. He is a strong lad and Talos will look after him.` You begin to bubble up but can`t not in front of your father. `Enough!` you snap at him `Help me look around and see what they were doing and who they are.` You search the robed figure who just had hold of your father. Clearly some sort of cultists.</p> <p>As you inspect the robes you notice a sigil stitched into them. A hand with an eye in the center of the palm. Otherwise you find nothing of importance. The anger begins to build up.</p> <p>Suddenly you hear a small voice behind you. It`s the research assistant who asked for your help. You storm up to him and ask `What were you doing here?! Who are they? Tell me now!` Flustered he explains `We were on an expedition from Neverwinter. There is currently some strange happenings going on in Neverwinter and Sarcelle thought it was linked to planar travel. She found that there was a strong source here and well... then these people showed up`</p> <p>You have heard enough. If they were from Neverwinter you will make a start there and find Torsten. You storm out of the cave and head back to the village with the intention of sailing yourself to Neverwinter.</p> <p>You hear your futher shouting and huffing as he tries to keep up with you `Nyla, please. I come with you!` You repond `NO! .. I mean no, I need you to stay and look after everyone.` He pauses but he ultimately agrees`s. `Then please take this with you.` He hands you his amulet from around his neck.</p> <p><a href="https://www.dndbeyond.com/magic-items/2411862-amulet-of-the-devout-2">You add this to your inventory</a></p> <p>You make your way to the city of Neverwinter.</p>' ;
        });
      }
    
      if (choice2) {
        choice2.addEventListener('click', function() {
          document.getElementById('choices').style.display = 'none';
          para.className = 'fadeInAnimated';
          para.id = 'choice-2';
          para.innerHTML = '<p>You fire a spell at the robed figure grabbing Torsten and they drop to the ground. You get one last glimpse before your father is taken through the portal and it closes behind him. Torsten manages to quickly get up and sprint to Sarcelle before she is taken and pulls her back. As quick as they had opened the portals all close. You, Torsten and Sarcelle stand in the cave for a moment.</p> <p>You think to yourself `Again! My father, always getting into these situations then it`s me who needs to fix it!` Sarcelle sits on the ground panting. Torsten asks her `What was all that? What happened here?` Sarcelle responds,</p> <p>`We came over from Neverwinter. Currently unnatural things appear to be happening there. I have some theories. You see I study the other planes of existence as well as planar travel. I have an idea of who is behind this. They call him the whispered one. I came here because this place has a particular strong inter planar energy. I just wasn`t expecting the whispered ones cultists to be here either`</p> <p>You and Torsten have a glance at each other. Torsten helps Sarcelle up and he says `Okay then, so we go to Neverwinter and we find Nyla`s father.` You grab his bulky bicep and say `No. Just me Torsten, my father, my mess. Besides I need someone I can trust to look after the village?` He gives you that knowing glance, no matter how good his argument you always get your way so he smiles.</p> <p>You head back to the village and prepare your boat. Sarcelle accompanies you.</p> <p>Before you leave Torsten approaches. `Here it`s something I have been meaning to give you.` He winks as he hands you a ring.</p> <p><a href="https://www.dndbeyond.com/magic-items/4730-ring-of-spell-storing">You add this to your inventory</a></p><p>You make your way to the city of Neverwinter.</p>';
        });
      }
    }
    choices();
  });
  