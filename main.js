const zipUrl = "http://api.zippopotam.us/us/"
let zipForm = document.getElementById('zipForm');
let zipField = document.getElementById('zipField');
let results = document.getElementById('results');
let button = document.getElementById('placeButton');


zipForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let zip = zipField.value;

  fetch(zipUrl + zip).then((response) => {
    if (response.status === 200){
      return response.json();
    } else {
      let errorMsg = document.createElement('h2');
      errorMsg.innerText = 'API call failed, please try again.';
      results.appendChild(errorMsg);
    }
  }).then((parsedJsonResponse) => {
    console.log(parsedJsonResponse);
    let city = document.createElement('h2');
    let state = document.createElement('h2');
    city.innerText = parsedJsonResponse['places'][0]['place name'];
    state.innerText = parsedJsonResponse['places'][0]['state abbreviation'];
    results.appendChild(city);
    results.appendChild(state);
  })

})
