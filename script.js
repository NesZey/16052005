// Otomatik Fotoğraf Değişimi
const photos = ['images/foto1.jpg', 'images/foto2.jpg', 'images/foto3.jpg'];
let currentPhoto = 0;

setInterval(() => {
  currentPhoto = (currentPhoto + 1) % photos.length;
  document.getElementById('photo').src = photos[currentPhoto];
}, 5000);

// Müzik Değiştirici
const musicList = ['music/sarki1.mp3', 'music/sarki2.mp3'];
let currentMusic = 0;

function changeMusic() {
  currentMusic = (currentMusic + 1) % musicList.length;
  const player = document.getElementById('music-player');
  player.src = musicList[currentMusic];
  player.play();
}

/* █ CUSTOM AUDIO PLAYER █ */
let currentTrack = 0;
const audio        = document.getElementById("player");
const playBtn      = document.getElementById("play-pause");
const prevBtn      = document.getElementById("prev");
const nextBtn      = document.getElementById("next");
const progressBar  = document.getElementById("progress");
const volumeBar    = document.getElementById("volume");
const curTimeLabel = document.getElementById("current-time");
const durLabel     = document.getElementById("duration");
const trackLabel   = document.getElementById("track-name");

/* — yardımcı — */
const fmt = s=> {
  const m = Math.floor(s/60).toString();
  const ss = Math.floor(s%60).toString().padStart(2,"0");
  return `${m}:${ss}`;
};

function loadTrack(i){
  currentTrack = i;
  audio.src = tracks[i].src;
  trackLabel.textContent = tracks[i].name;
  audio.load();
}
loadTrack(0);

/* Oynat / Duraklat */
playBtn.onclick = () => {
  if(audio.paused){
    audio.play();
    playBtn.textContent = "⏸";
  }else{
    audio.pause();
    playBtn.textContent = "▶";
  }
};

/* İleri / Geri */
nextBtn.onclick = ()=>{ loadTrack((currentTrack+1)%tracks.length); audio.play(); playBtn.textContent="⏸"; };
prevBtn.onclick = ()=>{ loadTrack((currentTrack-1+tracks.length)%tracks.length); audio.play(); playBtn.textContent="⏸"; };

/* Ses */
volumeBar.oninput = e => audio.volume = e.target.value;

/* İlerleme çubuğu (kullanıcı sürüklerse) */
progressBar.oninput = e => {
  if(audio.duration) audio.currentTime = (e.target.value/100)*audio.duration;
};

/* Zaman & ilerleme güncelle */
audio.ontimeupdate = () => {
  if(audio.duration){
    curTimeLabel.textContent = fmt(audio.currentTime);
    progressBar.value = (audio.currentTime/audio.duration)*100;
  }
};
audio.onloadedmetadata = () => {
  durLabel.textContent = fmt(audio.duration || 0);
  curTimeLabel.textContent = "0:00";
  progressBar.value = 0;
};

/* █ PHOTO SLIDESHOW █ */
let currentPhoto = 0;
setInterval(()=>{
  currentPhoto = (currentPhoto+1)%photoUrls.length;
  document.getElementById("photo").src = photoUrls[currentPhoto];
},5000);

/* █ NOTE PANEL █ */
function showNote(){ document.getElementById("note-panel").classList.add("show"); }
function hideNote(){ document.getElementById("note-panel").classList.remove("show"); }

/* █ BIG HEART █ */
const heartTexts = {
  buton1:"Seninle her şey daha güzel 💕",
  buton2:"Kalbim hep seninle 💓",
  buton3:"Birlikte nice yıllara 🥰"
};
function showBigHeart(id){
  document.getElementById("big-heart-text").textContent = heartTexts[id];
  document.getElementById("big-heart").classList.add("show");
}
function hideBigHeart(){ document.getElementById("big-heart").classList.remove("show"); }

/* █ FLOATING LOVE BUBBLES (30 farklı cümle) █ */
const messages=[
  "Seni çok seviyorum!","İyi ki varsın ❤️","Seninle her şey daha güzel.",
  "Gülüşün içimi ısıtıyor 💫","Birlikte geçen zaman en güzel hediye 🎁",
  "Aşkınla yanıyorum 🔥","Kalbim seninle atıyor 💓","Sen benim mucizemsin ✨",
  "Gözlerin yıldız gibi parlıyor 🌟","Seninle her gün bayram 🎉",
  "Yüzünü görmek huzur veriyor 😊","Senin adın mutluluk 💖",
  "Sensiz hayat eksik kalır...","Seninle olmak cennet gibi 🌈",
  "Aşkımız hiç bitmesin 💞","Gönlüm hep seninle 🕊️",
  "Senin varlığın yeter 💐","İçimde kelebekler uçuşuyor 🦋",
  "Sen en güzel hikayemsin 📖","Yüreğin çok güzel 💝",
  "Senin sesin huzur 💬","İyi ki tanıdım seni 🥰",
  "Kalbim sana ait 🫀","Sevginle büyüyorum 🌱",
  "Hayatımda olduğun için şükürler olsun 🙏","Senin gülüşün dünyalara bedel 😊",
  "Gözlerin derya deniz 🌊","Sensiz bir gün eksik bir gün 😔",
  "İyi ki sen 💘","Sonsuz aşkımız daim olsun ♾️"
];

function createBubble(){
  const b=document.createElement("div");
  b.className="bubble";
  b.textContent=messages[Math.floor(Math.random()*messages.length)];
  b.style.left=Math.random()*90+"%";
  b.style.animationDuration="3s";
  document.getElementById("bubbles-container").appendChild(b);
  setTimeout(()=>b.remove(),3000);
}
setInterval(createBubble,3000);
