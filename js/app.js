const colorOptions = document.querySelectorAll('.circle');
const carImage = document.querySelector('.car-image')
const colorDescriptionDisplay = document.querySelector('.color-description');
console.log(colorDescriptionDisplay)
// Implementing selecting color option 
let selectedElementByDefault = colorOptions[0];

// Set Description for color.
const setColorDescription = (e) => {
    let colorDescriptions = {
        'black': 'Space Black',
        'white': 'Shiny White',
        'blue': 'Blueish Blue'
    };
    colorDescriptionDisplay.innerHTML = `<b>${colorDescriptions[e.classList[0]]}</b>`; 
}

function selectElement(element) {
    element.classList.add('selected-option');
}

function deselectElement(element) {
    element.classList.remove('selected-option');
}

// Default setup
let selectedElement = selectedElementByDefault;

setColorDescription(selectedElement);

let indexToColor = {0: 'black', 1: 'white', 2: 'blue'};
const stringForCarImagePath = 'img/cars/car_';
colorOptions.forEach(element => {
    element.addEventListener('click', function() {
        if (selectedElement != element) {
            deselectElement(selectedElement);
            selectElement(element);
            carImage.style.transition = "opacity 500ms ease";
            carImage.style.opacity = "0%";
            setColorDescription(element);

            carImage.addEventListener('webkitTransitionEnd', function() { 
                carImage.src = stringForCarImagePath.concat(element.classList[0], '.png');
                carImage.style.opacity = "100%";
           }, false );
            
            selectedElement = element;
        }
    })
});
