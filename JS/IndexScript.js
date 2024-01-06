const radioBtns = document.querySelectorAll('input[name="radio-btn"]');
const cardGroups = document.querySelectorAll('.content-characters');

const radioCityBtns = document.querySelectorAll('input[name="radio-btn-city"]');
const cardCityGroups = document.querySelectorAll('.content-cities');

let currentIndex = 0;
let currentCityIndex = 0;

let characterInterval; // Variável para armazenar o intervalo dos personagens
let cityInterval; // Variável para armazenar o intervalo das cidades

// Restaura o intervalo dos personagens para troca automática
const resetCharacterInterval = () => {
    clearInterval(characterInterval);
    characterInterval = setInterval(changeRadioAutomatically, 5000);
};

// Restaura o intervalo das cidades para troca automática
const resetCityInterval = () => {
    clearInterval(cityInterval);
    cityInterval = setInterval(changeCityRadioAutomatically, 5000);
};

// Restaura os intervalos quando um radio button de personagem é clicado manualmente
radioBtns.forEach((radioBtn, index) => {
    radioBtn.addEventListener('change', () => {
        currentIndex = index;
        handleCardChange();
        resetCharacterInterval(); // Reseta o intervalo dos personagens
    });
});

// Restaura os intervalos quando um radio button de cidade é clicado manualmente
radioCityBtns.forEach((radioBtn, index) => {
    radioBtn.addEventListener('change', () => {
        currentCityIndex = index;
        handleCardCityChange();
        resetCityInterval(); // Reseta o intervalo das cidades
    });
});

const changeRadioAutomatically = () => {
    currentIndex = (currentIndex + 1) % radioBtns.length;
    radioBtns[currentIndex].checked = true;
    handleCardChange();
};

const handleCardChange = () => {
    cardGroups.forEach((cardGroup, index) => {
        if (index === currentIndex) {
            cardGroup.classList.remove('content-characters-disable');
        } else {
            cardGroup.classList.add('content-characters-disable');
        }
    });
};

const changeCityRadioAutomatically = () => {
    currentCityIndex = (currentCityIndex + 1) % radioCityBtns.length;
    radioCityBtns[currentCityIndex].checked = true;
    handleCardCityChange();
};

const handleCardCityChange = () => {
    cardCityGroups.forEach((cardGroup, index) => {
        if (index === currentCityIndex) {
            cardGroup.classList.remove('content-cities-disable');
        } else {
            cardGroup.classList.add('content-cities-disable');
        }
    });
};

characterInterval = setInterval(changeRadioAutomatically, 5000);
cityInterval = setInterval(changeCityRadioAutomatically, 5000);
