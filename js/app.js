const colorOptions = Object.entries(document.querySelector('.color-option').children).map((el) => (el[1])) ;
const wheelsOptions = Object.entries(document.querySelector('.wheels-option').children).map((el) => (el[1])) ;
const carImage = document.querySelector('.car-image')
const colorDescriptionDisplay = document.querySelector('.color-description');
const colorPriceDisplay = document.querySelector('.color-price');
const wheelsDescriptionDisplay = document.querySelector('.wheels-description');
const wheelsPriceDisplay = document.querySelector('.wheels-price');

colorPriceDisplay.innerHTML = "Free";


// Implementing selecting color option 
let selectedColorElementByDefault = colorOptions[0];
let selectedWheelsElement = wheelsOptions[0];
let totalPrice = 15000;
let addedPrice = 0;
let addedWheelsPrice = 0;
let addedColorPrice = 0;
let totalPriceToDisplay = totalPrice;

// Set Description for color.
let colorDescriptions = {
    'black': {name: 'Space Black', price: '0'},
    'white': {name: 'Shiny White', price: '100'},
    'blue': {name: 'Blueish Blue', price: '200'}
};

let wheelsDescription = {
    'first-wheel': {name: 'Default', price: '0'},
    'second-wheel': {name: 'Lada Wheels', price: '1000'}
};

const setWheelDescription = (e) => {
    let currentWheel = wheelsDescription[e.classList[0]];
    wheelsDescriptionDisplay.innerHTML = `<b>${currentWheel.name}</b>`;
    wheelsPriceDisplay.innerHTML = `${(currentWheel.price == '0') ? 'Free' : (currentWheel.price + '$')}`
    addedWheelsPrice = Number(currentWheel.price);
    addedPrice = addedWheelsPrice + addedColorPrice
    totalPriceToDisplay = totalPrice + addedPrice;
}

const setColorDescription = (e) => {
    let currentColor = colorDescriptions[e.classList[0]];
    colorDescriptionDisplay.innerHTML = `<b>${currentColor.name}</b>`;
    colorPriceDisplay.innerHTML = `${(currentColor.price == '0') ? 'Free' : (currentColor.price + '$')}`
    addedColorPrice = Number(currentColor.price);
    totalPriceToDisplay = totalPrice + addedPrice;
}

function selectElement(element) {
    element.classList.add('selected-option');
}

function deselectElement(element) {
    element.classList.remove('selected-option');
}

// Start Default setup
let selectedColorElement = selectedColorElementByDefault;

setColorDescription(selectedColorElement);

setWheelDescription(selectedWheelsElement.childNodes[0]);

// End of Default setup

// Function for toggle selecting circles;
function toggleSelect(element, elementSelected) {
    if (elementSelected === element) return;
    deselectElement(elementSelected);
    selectElement(element);
    elementSelected = element;
}


// Function for generating carImage path:
function getImagePath(selectedColor, selectedWheel) {
    return `img/cars/car_${selectedColor}_${selectedWheel}.png`;
}

// let indexToColor = {0: 'black', 1: 'white', 2: 'blue'};
const stringForCarImagePath = 'img/cars/car_';
colorOptions.forEach(element => {
    element.addEventListener('click', function() {
        if (selectedColorElement === element) return;
        deselectElement(selectedColorElement);
        selectElement(element);
        selectedColorElement = element;

        carImage.style.transition = "opacity 500ms ease";
        carImage.style.opacity = "0%";
        setColorDescription(element);

        carImage.addEventListener('webkitTransitionEnd', function() {
            carImage.src = getImagePath(element.classList[0], selectedWheelsElement.childNodes[0].classList[0]);
            // carImage.src = stringForCarImagePath.concat(element.classList[0], '.png');
            carImage.style.opacity = "100%";

        }, false );

    })
});

wheelsOptions.forEach(element => {
    element.addEventListener('click', function() {
        if (selectedWheelsElement === element) return;
        deselectElement(selectedWheelsElement);
        selectElement(element);
        selectedWheelsElement = element;
        setWheelDescription(selectedWheelsElement.childNodes[0]);
        carImage.src = getImagePath(selectedColorElement.classList[0], selectedWheelsElement.childNodes[0].classList[0])
    })
});


// Closing + opening modal windows

const modal = document.querySelector('.modal');

const closeButton = document.querySelector('.close-button');

const openModalWindowButton = document.querySelector('.order-button');

const totalPriceDisplay = document.querySelector('.total-price');

const colorPriceOrderDisplay = document.querySelector('.color-choice')
// Here we want to update our order info
openModalWindowButton.onclick = function () {
    modal.style.display = "flex";
    totalPriceDisplay.innerHTML = `<b>${totalPriceToDisplay}$</b>`;
    colorPriceOrderDisplay.innerHTML = colorDescriptions[selectedColorElement.classList[0]].name;

}

closeButton.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}