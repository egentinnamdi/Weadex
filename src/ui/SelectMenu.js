import { useState } from "react";
import styled from "styled-components";
import { useWeather } from "../contexts/WeatherContext";

const StyledSelectMenu = styled.select`
  background-color: var(--mirage-transparent);
  border-radius: var(--border-radius-10);
  outline: none;
  border: none;
  padding: 9px 50px;
  color: var(--bali-hai);
  font-weight: 500;
`;

function SelectMenu() {
  const [selectOption] = useState([0, 3, 5, 7, 10, 14]);
  const { numOfDays, setNumOfDays } = useWeather();

  return (
    <StyledSelectMenu
    className="w-2/4 text-sm"
      value={numOfDays}
      onChange={(e) => {
        setNumOfDays(e.target.value);
      }}
    >
      {selectOption.map((option) => (
        <option value={option} key={option} >
          {option === 0 ? "Select Number Of" : option} Days
        </option>
      ))}
    </StyledSelectMenu>
  );
}

export default SelectMenu;
