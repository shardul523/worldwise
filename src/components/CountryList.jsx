import Spinner from "./Spinner";
import Message from "./Message";
import CountryItem from "./CountryItem";

import styles from "./CountryList.module.css";

function getCountries(cities) {
  const countries = new Map();

  cities.forEach((city) => {
    if (!countries.has(city.country))
      countries.set(city.country, { country: city.country, emoji: city.emoji });
  });

  return Array.from(countries.values());
}

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities?.length)
    return (
      <Message
        message={"Add your first city to the list by clicking on the map"}
      />
    );

  const countries = getCountries(cities);
  console.log(countries);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
