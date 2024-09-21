import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";

import WeatherProvider from "./contexts/WeatherContext";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <ReactQueryDevtools />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route index element={<Navigate replace to="weadex" />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            <Route path="/weadex" element={<AppLayout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </WeatherProvider>
    </QueryClientProvider>
  );
}

export default App;
