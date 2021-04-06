export default async function fetchCountryByName(countryName) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/name/${countryName}`,
  );

  return await response.json();
}
