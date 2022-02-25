function getInputValue() {
    const inputField = document.getElementById('search-input');
    const getInputValue = inputField.value;
    const url = `https://restcountries.com/v3.1/name/${getInputValue}`;
    fetch(url)
        .then(res => res.json())
        .then(data => countries(data[0]))
    inputField.value = '';
}

function countries(data) {
    console.log(data)
    const container = document.getElementById('countries');
    const div = document.createElement('div');
    div.innerHTML = `
    <h2 class="text-center">country: ${data.name.common}</h2>
    <h5 class="text-center">capital: ${data.capital}</h5>
    <img class="w-25 mx-auto" src="${data.flags.svg}">
    `
    container.appendChild(div);
}