import './styles.css';
import countryCardTpl from './templates/country-card.hbs';
import countriesCardTpl from './templates/countries-list.hbs';
import { registerHelper } from 'handlebars';
import fetchCountryByName from './service-api';
import ref from './get-refs';
import '@pnotify/core/dist/BrightTheme.css';
const { defaults } = require('@pnotify/core');
const { alert, notice, info, success, error } = require('@pnotify/core');
const debounce = require('lodash.debounce');

ref.input.addEventListener('input', debounce(onSearchCountryInput, 500));

function onSearchCountryInput(e) {
  const searchCountryName = e.target.value;

  fetchCountryByName(searchCountryName).then(choseRenderTpl);
}

function choseRenderTpl(countries) {
  if (countries.length === 1) {
    renderCountry(countries);
  }
  if (countries.length > 1 && countries.length < 11) {
    renderCountriesList(countries);
  }
  if (countries.length > 10) {
    ref.countries.innerHTML = '';
    const myError = error({
      text: 'too many matches found. Please enter a more specific query',
    });
  }
}

// function forCatch() {}

function renderCountry(country) {
  const markup = countryCardTpl(country);
  ref.countries.innerHTML = markup;
}

function renderCountriesList(countries) {
  const markup = countriesCardTpl(countries);
  ref.countries.innerHTML = markup;
}
