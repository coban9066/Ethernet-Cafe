const shopImages = [
    './img/ic-mekan.jpeg',
    './img/ic-mekan2.jpeg',
    './img/ic-mekan3.jpeg',
    './img/ic-mekan4.jpeg',
    './img/1.jpg',
    './img/2.jpg',
    './img/3.jpg',
    './img/4.jpg',
    './img/5.jpg',
    './img/6.jpg'
];

const equipmentImages = [
    './img/7.png',
    './img/8.png',
    './img/9.jpg',
    './img/10.jpg',
    './img/11.jpg',
    './img/12.jpg'



    



    
];

let showingEquipment = false;
let currentIndex = 0;
let currentImages = shopImages;
const imageElement = document.getElementById('gallery-image');
const toggleLink = document.getElementById('toggle-gallery');

// Slayt değişimi
setInterval(() => {
    currentIndex = (currentIndex + 1) % currentImages.length;
    imageElement.src = currentImages[currentIndex];
}, 7000);

// Tıklamayla resim listesini değiştirme
toggleLink.addEventListener('click', (e) => {
    e.preventDefault();
    showingEquipment = !showingEquipment;
    currentImages = showingEquipment ? equipmentImages : shopImages;
    toggleLink.textContent = showingEquipment ? "Dükkan Detaylarını Görüntüle" : "Ekipmanları Görüntüle";
    currentIndex = 0;
    imageElement.src = currentImages[currentIndex];
});