import styled from "styled-components";
import SearchBar from "./SearchBar";
import Overview from "./Overview";
import Loader from "./Loader";
import { useWeather } from "../contexts/WeatherContext";

const StyledDashboard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  /* background-color: inherit; */
  border-radius: var(--border-radius-10);
`;

function Dashboard() {
  const { refetch } = useWeather();
  return (
    <StyledDashboard onKeyDown={(e) => e.code === "Enter" && refetch()}>
      <SearchBar />
      <Loader>
        <Overview />
      </Loader>
    </StyledDashboard>
  );
}

export default Dashboard;
