/* ---------- STARS ---------- */

for(let i = 0; i < 90; i++){

  const star = document.createElement("div");

  star.className = "star";

  star.style.left = Math.random() * 100 + "vw";
  star.style.top = Math.random() * 100 + "vh";

  star.style.animationDelay =
  Math.random() * 6 + "s";

  document.body.appendChild(star);

}



/* ---------- FLOATING HEARTS 💗 ---------- */

function spawnHeart(){

  const heart =
  document.createElement("div");


  heart.className =
  "heart";


  heart.innerHTML =
  "💗";


  heart.style.left =
  Math.random() * 100 + "vw";


  heart.style.animationDuration =
  8 + Math.random()*8 + "s";


  heart.style.fontSize =
  12 + Math.random()*12 + "px";


  document.body.appendChild(heart);


  setTimeout(()=>{

    heart.remove();

  },16000);

}


setInterval(spawnHeart,700);

/* ---------- MUSIC (YOUTUBE API) ---------- */

let player;
const sinceDate = new Date("2023-12-19T22:10:00");

function loadMusic(){

  if(player) return;


  const tag =
    document.createElement("script");


  tag.src =
    "https://www.youtube.com/iframe_api";


  document.body.appendChild(tag);

}

function onYouTubeIframeAPIReady() {

  player = new YT.Player("player", {

    videoId: "1T7I4dvE2t0",

    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: "1T7I4dvE2t0"
    },

    events: {
      onReady: (event) => {
  console.log("READY");

  event.target.playVideo();

  setTimeout(() => {
    console.log("Player State:", event.target.getPlayerState());
  }, 1500);
},

      onStateChange: (event) => {
        console.log("STATE:", event.data);
      },

      onError: (event) => {
        console.log("ERROR:", event.data);
      }
    }

  });

}



/* ---------- START EXPERIENCE ---------- */

function startExperience(){

  buildGallery();


  const observer =
  new IntersectionObserver(entry=>{


    if(entry[0].isIntersecting){


      document
      .querySelector(".ending")
      .classList.add("show");


      setTimeout(()=>{


        document
        .getElementById("finalLove")
        .classList.add("show");


      },2500);

    }


  },{
    threshold:.6
  });



  observer.observe(
    document.querySelector(".ending")
  );

}



/* ---------- IMAGE GALLERY ---------- */

function buildGallery(){


  const gallery =
  document.getElementById("gallery");



  // ONLY 10 IMAGES ❤️

  for(let i = 1; i <= 10; i++){


    const photo =
    document.createElement("div");


    photo.className = "photo";


    photo.innerHTML =
    `<img src="image${i}.jpg">`;



    gallery.appendChild(photo);



    new IntersectionObserver(entry=>{


      if(entry[0].isIntersecting){

        photo.classList.add("show");

      }


    }).observe(photo);


  }

}
function updateCounter() {

  const now = new Date();
  const diff = now - sinceDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );

  const minutes = Math.floor(
    (diff % (1000 * 60 * 60)) /
    (1000 * 60)
  );

  const seconds = Math.floor(
    (diff % (1000 * 60)) / 1000
  );

  document.getElementById("sinceCounter").innerHTML =
  `💖 We've been making memories together for<br>
   <b>${days}</b> days, <b>${hours}</b> hours, <b>${minutes}</b> minutes and <b>${seconds}</b> seconds.`;
}


/* ---------- AUTO START PAGE ---------- */

window.onload = ()=>{


  document.body.style.overflow =
  "auto";


  loadMusic();


  startExperience();
  setInterval(updateCounter, 1000);
updateCounter();


};
