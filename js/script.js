async function updateExchangeRates() {
            try {
                const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
                const data = await response.json();
                const usdToRub = data.rates.RUB;
                const eurToRub = data.rates.RUB / data.rates.EUR;
                const cnyToRub = data.rates.RUB / data.rates.CNY;
                
                document.getElementById('exchange-rates').innerHTML = 
                    `1 $ = ${usdToRub.toFixed(2)} ₽ | 1 € = ${eurToRub.toFixed(2)} ₽ | 1 ¥ = ${cnyToRub.toFixed(2)} ₽`;
            } catch (error) {
                console.error('Ошибка загрузки курсов валют:', error);
            }
        }
        
        setInterval(updateExchangeRates, 60000);
        window.onload = updateExchangeRates;


const reviews = document.querySelector('.reviews');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0; // Индекс первого видимого отзыва
const reviewWidth = 612; // Ширина одного отзыва (300px + 20px отступ)
const totalReviews = reviews.children.length;
const maxIndex = totalReviews - 2; // Оставляем 2 отзыва видимыми

function updateReviews() {
    reviews.style.transform = `translateX(${-index * reviewWidth}px)`;
}

nextBtn.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        updateReviews();
    }
});

prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateReviews();
    }
});
