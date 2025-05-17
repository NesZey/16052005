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

// Kalpli Baloncuklar
const heartMessages = [
  "Seni seviyorum 💖",
  "İyi ki doğdun!",
  "Kalbim hep seninle 💕",
  "Beraber nice yıllara!",
];

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = heartMessages[Math.floor(Math.random() * heartMessages.length)];
  heart.style.left = `${Math.random() * 100}%`;
  document.getElementById('heart-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
}

setInterval(createHeart, 1000);

// Heart Style
const style = document.createElement('style');
style.textContent = `
.heart {
  position: absolute;
  top: 100%;
  font-size: 1em;
  background: pink;
  padding: 5px 10px;
  border-radius: 30px;
  animation: floatUp 3s linear forwards;
  white-space: nowrap;
}
@keyframes floatUp {
  to {
    top: -10%;
    opacity: 0;
  }
}
`;
document.head.appendChild(style);

// Not <3 Popup
function showNote() {
  document.getElementById('note-popup').style.display = 'block';
}

function hideNote() {
  document.getElementById('note-popup').style.display = 'none';
}

// Büyük Balonlar
const balloonTexts = [
  "Seninle her günüm bayram gibi 🎈",
  "Gözlerin en sevdiğim manzara 💘",
  "Bu kalp sadece senin için atıyor 💓",
];

function showBigBalloon(index) {
  document.getElementById('balloon-text').innerText = balloonTexts[index];
  document.getElementById('big-balloon').style.display = 'flex';
}

function hideBigBalloon() {
  document.getElementById('big-balloon').style.display = 'none';
}
