import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./ui/Dashboard";
import Stats from "./ui/Stats";
import styled from "styled-components";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import WeatherProvider from "./contexts/WeatherContext";

const StyledApp = styled.div`
  display: grid;
  grid-template: auto / 0.7fr 1fr;
  min-height: 85vh;
  background-color: var(--mirage-transparent);
  gap: 1.2rem;
  padding: 30px;
  border-radius: var(--border-radius-20);
`;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <ReactQueryDevtools />
        <GlobalStyles />
        <StyledApp>
          <Dashboard />
          <Stats />
        </StyledApp>
      </WeatherProvider>
    </QueryClientProvider>
  );
}

export default App;
