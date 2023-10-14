colorOptions = document.querySelectorAll('.circle')
console.log(colorOptions)

let selectedElement; 
colorOptions.forEach(element => {
    element.addEventListener('click', function() {
        if (selectedElement) {
            selectedElement.style.outline = element.style.outline;
        }
        selectedElement = element;
        selectedElement.style.outline = "solid 3px blue";
    })
});