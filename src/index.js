var debounce = require('lodash.debounce');
import './styles.css';
import countryCardTpl from './templates/country-card.hbs';
const Ref = {
  input: document.querySelector('[data-action="search-country"]'),
};

Ref.input.addEventListener('input', debounce(onSearchCountryInput, 500));

function onSearchCountryInput(e) {
  console.log(e.target.value);
}

fetch('https://restcountries.eu/rest/v2/name/switz')
  .then(response => {
    return response.json();
  })
  .then(country => {
    const [...country1] = country;
    console.log(country1);
    const markup = countryCardTpl([...country]);
    console.log(markup);
  });
