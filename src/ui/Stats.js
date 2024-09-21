import HourList from "../features/forecast/HourList";
import Wind from "../features/wind-uv-index/Wind";
import UvIndex from "../features/wind-uv-index/UvIndex";
import DayList from "../features/forecast/DayList";
import { useWeather } from "../contexts/WeatherContext";
import Loader from "./Loader";
import styled from "styled-components";

const StyledStats = styled.section`
  border-radius: var(--border-radius-10);
  gap: inherit;
`;

function Stats() {
  const {input}= useWeather()

  return (
    <StyledStats className={`w-full space-y-5 lg:space-y-0 min-h-screen lg:h-full lg:grid-rows-3 lg:grid-cols-2  gap-i ${input.length < 3? "lg:hidden" : "lg:grid "}`}>
      <Loader>        
        <HourList />
        <DayList />
        <UvIndex />
        <Wind />
      </Loader>
    </StyledStats>
  );
}

export default Stats;
