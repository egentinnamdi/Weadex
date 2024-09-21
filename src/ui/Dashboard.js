import styled from "styled-components";
import SearchBar from "./SearchBar";
import Overview from "./Overview";
import Loader from "./Loader";
import { useWeather } from "../contexts/WeatherContext";

const StyledDashboard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-radius: var(--border-radius-10);
`;

function Dashboard() {
  const {input}= useWeather()
  return (
    <StyledDashboard className={`h-full ${ input.length < 3? "lg:col-span-2": ""}`}>
      <SearchBar />
      <Loader>
        <Overview />
      </Loader>
    </StyledDashboard>
  );
}

export default Dashboard;
