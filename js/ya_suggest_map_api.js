let YA_API = 'https://suggest-maps.yandex.ru/v1/suggest?apikey={YOUR_API_KEY}=';
let request = new XMLHttpRequest();

function sendApiRequest(inputText) {
    request.open("GET", YA_API.concat(inputText));
    request.responseType = "json";
    request.send();
}

sendApiRequest('ЕКатеринубрг, ул. серафимы дрбяной 19')

setTimeout(() => {console.log(request.response.results[0].title.text)}, 2000);

// export default getFirstOptionOfAPIResponse;
