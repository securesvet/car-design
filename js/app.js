colorOptions = document.querySelectorAll('.circle')
console.log(colorOptions)


// Implementing selecting color option 
let selectedElement; 
colorOptions.forEach(element => {
    element.addEventListener('click', function() {
        if (selectedElement) {
            selectedElement.style.outline = element.style.outline;
        }
        selectedElement = element;
        selectedElement.style.transition = "outline 100ms ease";
        selectedElement.style.outline = "solid 3px blue";
    })
});