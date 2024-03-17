import styled from "styled-components";
import HourList from "../features/forecast/HourList";
import Wind from "../features/wind-uv-index/Wind";
import UvIndex from "../features/wind-uv-index/UvIndex";
import DayList from "../features/forecast/DayList";

const StyledStats = styled.section`
  display: grid;
  grid-template: repeat(3, 1fr) / 1fr 1fr;
  border-radius: var(--border-radius-10);
  gap: inherit;
`;

function Stats() {
  return (
    <StyledStats>
      <HourList />
      <DayList />
      <UvIndex />
      <Wind />
    </StyledStats>
  );
}

export default Stats;
