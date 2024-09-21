import styled from "styled-components";
import HourList from "../features/forecast/HourList";
import Wind from "../features/wind-uv-index/Wind";
import UvIndex from "../features/wind-uv-index/UvIndex";
import DayList from "../features/forecast/DayList";
import { useWeather } from "../contexts/WeatherContext";
import Loader from "./Loader";

// const StyledStats = styled.section`
//   display: grid;
//   grid-template: repeat(3, 1fr) / 1fr 1fr;
//   border-radius: var(--border-radius-10);
//   gap: inherit;
// `;

function Stats() {
  const {input}= useWeather()

  return (
    <div className={`${input.length < 3? "lg:hidden" : ""}`}>
      <Loader>        
        <HourList />
        <DayList />
        <UvIndex />
        <Wind />
      </Loader>
    </div>
  );
}

export default Stats;
