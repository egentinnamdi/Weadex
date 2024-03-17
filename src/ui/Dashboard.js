import styled from "styled-components";
import SearchBar from "./SearchBar";
import Overview from "./Overview";
import Loader from "./Loader";

const StyledDashboard = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-radius: var(--border-radius-10);
`;

function Dashboard() {
  return (
    <StyledDashboard>
      <SearchBar />
      <Loader>
        <Overview />
      </Loader>
    </StyledDashboard>
  );
}

export default Dashboard;
