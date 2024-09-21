import styled from "styled-components";
import { useWeather } from "../contexts/WeatherContext";
import SelectMenu from "./SelectMenu";

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
  const { input, setInput } = useWeather();

  return (
    <StyledSearchBar>
      <StyledSearch
      className="lg:w-2/4 w-3/4"
        type="text"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
        placeholder="Search"
      />
      <SelectMenu />
    </StyledSearchBar>
  );
}

export default SearchBar;
