const radioBtns = document.querySelectorAll('input[name="radio-btn"]');
const cardGroups = document.querySelectorAll('.content-characters');

const radioCityBtns = document.querySelectorAll('input[name="radio-btn-city"]');
const cardCityGroups = document.querySelectorAll('.content-cities');

radioBtns.forEach((radioBtn, index) => {
    radioBtn.addEventListener('change', () => {
        cardGroups.forEach(cardGroup => {
            cardGroup.classList.add('content-characters-disable');
        });
        cardGroups[index].classList.remove('content-characters-disable');
    });
});

radioCityBtns.forEach((radioBtn, index) => {
    radioBtn.addEventListener('change', () => {
        cardCityGroups.forEach(cardGroup => {
            cardGroup.classList.add('content-cities-disable');
        })
        cardCityGroups[index].classList.remove('content-cities-disable');
    })
})
