import Spinner from "./Spinner";
import Message from "./Message";
import CityItem from "./CityItem";

import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities?.length)
    return (
      <Message
        message={"Add your first city to the list by clicking on the map"}
      />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
