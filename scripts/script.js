const images = [
    './img/ic-mekan.jpeg',
    './img/ic-mekan2.jpeg',
    './img/ic-mekan3.jpeg',
    './img/ic-mekan4.jpeg'
];

let currentIndex = 0;
const imageElement = document.getElementById('gallery-image');

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}, 7000);
