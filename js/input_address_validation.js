import getFirstOptionOfAPIResponse from './ya_suggest_map_api';

const checkLocationBtn = document.querySelector('.check-location-btn');
const wrapperSuggest = document.querySelector('.suggest-wrapper');
const probableLocation = document.querySelector('.suggest-location');
const inputLocation = document.getElementById('suggest');

checkLocationBtn.addEventListener('click', function(event) {
    wrapperSuggest.style.display = 'block';
    probableLocation.innerHTML = getFirstOptionOfAPIResponse(inputLocation.innerHTML);
});
