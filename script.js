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
  "Seni sonsuza dek seveceğim ❤️",
  "Kalbim hep seninle atıyor 💖",
  "Sen benim en değerli hazinemsin 💎",
  "Sevginle hayatım güzelleşiyor 🌸",
  "Seninle her an bir mucize 🌟",
  "Aşkımız yıldızlar kadar parlak ✨",
  "Seninle tamamlanıyorum 💞",
  "Seni düşündükçe gülümsüyorum 😊",
  "Kalbimin en tatlı melodisi sensin 🎶",
  "Birlikte her şey mümkün ❤️‍🔥",
  "Sen benim en güzel rüyamsın 🌙",
  "Sevginle güç buluyorum 💪",
  "Seninle hayat bir masal gibi 📖",
  "Kalbim sana ait 💘",
  "Sonsuzluğa birlikte yürüyelim 🚶‍♂️🚶‍♀️",
  "Sen benim huzurumsun 🕊️",
  "Aşkımızı kimse silemez 🛡️",
  "Seninle hayatım tamamlandı 🎯",
  "Kalbim hep senin yanında 💗",
  "Sen benim en güzel baharımsın 🌷",
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

setInterval(createHeart, 100);

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
  "Bugün bizim için çok özel bir gün. Hem senin doğum günün hem de tam 1 yıldır hayatımda olduğun, birlikte yürüdüğümüz o güzel yolculuğun başlangıç yıldönümü. Sana nasıl teşekkür etsem, hangi kelimelerle sevgimi anlatsam bilmiyorum. Hayatıma girdiğin o ilk günden beri her şey daha renkli, daha anlamlı ve daha huzurlu. Senin gülüşünle sabahlarım aydınlanıyor, sesinle günüm güzelleşiyor. Varlığın bana güven veriyor, kalbime dokunduğun her an içimi sımsıcak bir sevgi sarıyor ❤. Bazen sadece yanımda olman bile yetiyor iyi hissetmeme. Seninle geçirdiğim her dakika, her an, benim için bir ömre bedel. Birlikte güldük, birlikte sustuk, birlikte büyüdük. Seninle bir yıl geçmiş ama sanki bir ömür gibi dolu dolu, anlamlı ve gerçekti. Seninle nice senelere ulaşmak, hayalini kurduğumuz o geleceği adım adım inşa etmek istiyorum. Doğum günün kutlu olsun aşkım, iyi ki doğdun, iyi ki varsın, iyi ki benimlesin ❤. Seni her şeyden çok seviyorum.
",
  "Seninle geçirdiğim bu bir yıl, bana gerçek sevgiyi, sadakati ve huzuru öğretti. Her tartışmamızda bile daha çok bağlandım sana, her gülüşünde bir kez daha âşık oldum. Bana gösterdiğin sabır, verdiğin sevgi, kurduğun o güvenli alan için sonsuz teşekkür ederim. Seninle geçirdiğim zamanlarda kendimi daha çok tanıdım, seninle birlikte kendimi de sevmeyi öğrendim. Kalbimin en derin yerinde taşıyorum seni, öyle bir yer ki kimse dokunamaz, kimse silemez. Hayat bazen zor, bazen yorucu, ama sen yanımdayken her şey kolay geliyor 🍯. Omzuna yaslandığımda dünyanın tüm yükü hafifliyor, gözlerinin içine baktığımda geleceği görüyorum. Ve inan bana, seninle kurduğum hayallerin bir tanesinden bile vazgeçmeye hiç niyetim yok. Ne yaşarsak yaşayalım, ben hep senin yanında olacağım; elini tuttuğum ilk gün verdiğim sözü tutacağım: seni hep seveceğim, koruyacağım, destekleyeceğim ❤.
",
  "Sen sadece sevgilim değil, aynı zamanda en yakın dostum, sırdaşım, hayat ortağımsın. Birlikte öğrendik birbirimizi sevmeyi, anlamayı, sarılmayı. Senin gözlerindeki ışığı gördüğümde kendimi en doğru yerde hissediyorum. İyi ki seni tanımışım, iyi ki kalbimde sana yer açmışım. Bu yıl dönümümüz ve doğum günün, bizim için bir başlangıç sadece. Daha yaşayacak o kadar çok anımız, paylaşacak o kadar çok gülüşümüz var ki. Seninle her geçen gün biraz daha tamamlanıyorum. Seni çok seviyorum ve her geçen gün daha da çok seveceğim ❤.
",
];

function showBigBalloon(index) {
  document.getElementById('balloon-text').innerText = balloonTexts[index];
  document.getElementById('big-balloon').style.display = 'flex';
}

function hideBigBalloon() {
  document.getElementById('big-balloon').style.display = 'none';
}
