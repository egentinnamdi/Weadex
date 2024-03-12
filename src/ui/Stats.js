import styled from "styled-components";
import HourList from "../features/forecast/HourList";
import Wind from "../features/wind-uv-index/Wind";
import UvIndex from "../features/wind-uv-index/UvIndex";
import DayList from "../features/forecast/DayList";
import Loader from "./Loader";
import { useWeather } from "../contexts/WeatherContext";
// import { LuCalendar } from "react-icons/lu";

const StyledStats = styled.section`
  display: grid;
  grid-template: repeat(3, 1fr) / 1fr 1fr;
  border-radius: var(--border-radius-10);
  gap: inherit;
`;

function Stats() {
  const { refetch } = useWeather();
  return (
    <Loader>
      <StyledStats onKeyDown={(e) => e.code === "Enter" && refetch()}>
        <HourList />
        <DayList />
        <UvIndex />
        <Wind />
      </StyledStats>
    </Loader>
  );
}

export default Stats;
