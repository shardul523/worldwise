import { createContext, useState, useEffect, useContext } from "react";

const CitiesContext = createContext();

const URL = "http://localhost:8000";

function CitiesProvider({ children }) {
  const [citiesList, setCitiesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getCitiesList() {
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}/cities`);
        const cities = await res.json();
        setCitiesList(cities);
      } catch (err) {
        console.error(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    getCitiesList();
  }, []);

  return (
    <CitiesContext.Provider value={{ citiesList, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context) throw new Error("Cities Context used outside Provider");
  return context;
}

export { useCities, CitiesProvider };
