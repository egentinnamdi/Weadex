import { createContext, useContext, useState } from "react";
import { getData } from "../api/apiWeatherData";
import { useQuery } from "@tanstack/react-query";

const WeatherContext = createContext(null);

function WeatherProvider({ children }) {
  const [input, setInput] = useState("");
  const [numOfDays, setNumOfDays] = useState(14);
  const [isRefetching, setIsRefetching] = useState(false);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["weatherData", input, numOfDays],
    queryFn: () =>
      input.length > 2 && numOfDays ? getData(input, numOfDays) : null,
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
    isRefetching,
    setIsRefetching,
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
