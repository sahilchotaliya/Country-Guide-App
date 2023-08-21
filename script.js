const searchButton = document.getElementById('searchButton');
const countryInput = document.getElementById('countryInput');
const countryInfo = document.querySelector('.country-info');

const apiUrl = 'https://restcountries.com/v3.1/name/';

function fetchCountryData(countryName) {
    return fetch(`${apiUrl}${countryName}`)
        .then(response => response.json())
        .catch(error => {
            console.error('Error fetching country data:', error);
            return null;
        });
}

function displayCountryInfo(countryData) {
    if (!countryData) {
        countryInfo.innerHTML = '<p>Country not found.</p>';
        return;
    }

    const country = countryData[0];

    const html = `
        <h2>${country.name.common}</h2>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <p>Region: ${country.region}</p>
        <p>Subregion: ${country.subregion}</p>
    `;

    countryInfo.innerHTML = html;
}

searchButton.addEventListener('click', async () => {
    const countryName = countryInput.value;
    const countryData = await fetchCountryData(countryName);
    displayCountryInfo(countryData);
});
