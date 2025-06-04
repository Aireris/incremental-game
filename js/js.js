// HTML'deki buton elementini seçiyoruz
const button = document.getElementById('mainButton');

// Butona tıklandığında çalışacak bir olay dinleyici (event listener) ekliyoruz
button.addEventListener('click', function() {
    // Rastgele bir renk oluşturma fonksiyonu
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Oluşturulan rastgele rengi butonun arka plan rengine uyguluyoruz
    button.style.backgroundColor = getRandomColor();
});