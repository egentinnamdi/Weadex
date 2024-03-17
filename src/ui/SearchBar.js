import styled from "styled-components";
import { useWeather } from "../contexts/WeatherContext";
import SelectMenu from "./SelectMenu";
import { useQueryClient } from "@tanstack/react-query";

const StyledSearchBar = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const StyledSearch = styled.input`
  background-color: var(--cape-cod);
  border-radius: var(--border-radius-20);
  outline: none;
  border: none;
  color: white;
  padding: 9px 15px;

  &::placeholder {
    color: var(--bali-hai);
    font-weight: 500;
  }
`;

function SearchBar() {
  const queryClient = useQueryClient();
  const { input, setInput, refetch, setIsRefetching } = useWeather();

  return (
    <StyledSearchBar>
      <StyledSearch
        type="text"
        onChange={async (e) => {
          await setInput(e.target.value);
          await queryClient.cancelQueries({ queryKey: ["weatherData"] });
          setIsRefetching(true);
          await refetch();
          setIsRefetching(false);
        }}
        value={input}
        placeholder="Search"
      />
      <SelectMenu />
    </StyledSearchBar>
  );
}

export default SearchBar;
