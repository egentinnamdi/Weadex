import styled from "styled-components";
import Dashboard from "../ui/Dashboard";
import Loader from "../ui/Loader";
import Stats from "../ui/Stats";

const StyledAppLayout = styled.div`
  /* @media () display: grid; */
  display: grid;
  grid-template: auto / 0.7fr 1fr;
  min-height: 85vh;
  background-color: var(--mirage-transparent);
  gap: 1.2rem;
  padding: 30px;
  border-radius: var(--border-radius-20);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Dashboard />
      <Loader>
        <Stats />
      </Loader>
    </StyledAppLayout>
  );
}

export default AppLayout;
