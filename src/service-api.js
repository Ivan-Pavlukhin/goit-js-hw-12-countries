export default function fetchCountryByName(countryName) {
  return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
}
