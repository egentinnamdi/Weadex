import { createContext, useContext, useState } from "react";
import { getData } from "../api/apiWeatherData";
import { useQuery } from "@tanstack/react-query";

const WeatherContext = createContext(null);

function WeatherProvider({ children }) {
  const [input, setInput] = useState("lagos");
  const [numOfDays, setNumOfDays] = useState(3);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["weatherData"],
    queryFn: () => getData(input, numOfDays),
  });

  const value = {
    data,
    isLoading,
    error,
    input,
    setInput,
    refetch,
    numOfDays,
    setNumOfDays,
  };
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
}

export function useWeather() {
  const context = useContext(WeatherContext);
  return context;
}

export default WeatherProvider;
