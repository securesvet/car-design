colorOptions = document.querySelectorAll('.circle')
console.log(colorOptions)


// Implementing selecting color option 
console.log(colorOptions)
let selectedElementByDefault = colorOptions[0];
console.log(colorOptions);

function selectElement(element) {
    element.classList.add('selected-option');
}

function deselectElement(element) {
    element.classList.remove('selected-option');
}

let selectedElement = selectedElementByDefault;

colorOptions.forEach(element => {
    element.addEventListener('click', function() {
        if (selectedElement) {
            deselectElement(selectedElement);
        }
        selectElement(element);
        selectedElement = element;
    })
});