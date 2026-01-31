const inviteScreen = document.getElementById("invite");
const loadingScreen = document.getElementById("loading");
const houseScreen = document.getElementById("house");
const planetInfo = document.getElementById("planet-info");

function showScreen(screenToShow){
  [inviteScreen, loadingScreen, houseScreen].forEach(s=>s.classList.remove("active"));
  screenToShow.classList.add("active");
}

function openPortal(){
  showScreen(loadingScreen);
  setTimeout(()=>{ showScreen(houseScreen); }, 3000);
}

function showInfo(planet){
  const info = {
    sun: "Tye's rejoiced Virgo Sun is his guiding luminary. In the 9th House his visibility and presence is strong and his Sun is sitting in its throne. When the Sun's hot and life-giving temperament sits in Virgo's cold, dry, mutable abode it creates someone like Tye whose guiding luminary has aligned him on the path of philosophical, spiritual and astrological truth. It gives him purpose, it allows him to recognize himself better through these ideologies, and in return he shares his wisdom with the world.",
    mercury: "Tye's domicile and exalted Virgo Mercury is both home and sitting on her throne. The natural dry temperament of Mercury is situated in Virgo's cold, dry and mutable abode. Here she functions as her natural state intends. Tactfully, productively, and purposefully. Her flexible nature allows her to connect collected patterns and translate them within the physical plane and the spiritual plane into the professor of the heavens that we love and know so well.",
    venus: "Tye's 9th House Venus is a representation of where he's called and inspired to experience the joys life has to offer. When Venus's moist and fertile temperament sits in Virgo's cold, dry, mutable home, Venus has no choice but to adjust to the structure of Virgo's abode. Here, Venus acts demurely; she's cautious, considerate, and eloquent. She's thoughtful about what she creates, how she forms union with others, and holds her creations and others to the same standards she holds herself up to. To have walked along Tye's 9th house and encountered his Venus is to be seen and loved."
  };
  planetInfo.innerText = info[planet];
}

function exitHouse() {
  const planets = document.querySelectorAll('.planet');
  planets.forEach(p => p.classList.add('exit-planet'));
  setTimeout(() => {
    planets.forEach(p => p.classList.remove('exit-planet'));
    showScreen(inviteScreen);
  }, 2000);
}

// GENERATE GOLD STARS
function createStars(numStars = 150){
  const starsContainer = document.querySelector('.stars');
  for(let i = 0; i < numStars; i++){
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * 100 + 'vh';
    star.style.left = Math.random() * 100 + 'vw';
    star.style.width = (Math.random() * 2 + 1) + 'px';
    star.style.height = star.style.width;
    starsContainer.appendChild(star);
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  document.body.style.opacity=0;
  setTimeout(()=>{ document.body.style.transition="opacity 1.5s ease"; document.body.style.opacity=1; },100);
  createStars();
});

window.openPortal = openPortal;
window.showInfo = showInfo;
window.exitHouse = exitHouse;

