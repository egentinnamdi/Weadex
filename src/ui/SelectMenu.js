import { useState } from "react";
import styled from "styled-components";
import { useWeather } from "../contexts/WeatherContext";
import { useQueryClient } from "@tanstack/react-query";

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
  const [selectOption] = useState([
    "Select Number Of Forecast ",
    3,
    5,
    7,
    10,
    14,
  ]);
  const { numOfDays, setNumOfDays, refetch } = useWeather();

  return (
    <StyledSelectMenu
      value={numOfDays}
      onInput={(e) => {
        setNumOfDays(e.target.value);
      }}
    >
      {selectOption.map((option) => (
        <option value={option} key={option}>
          {option} Days
        </option>
      ))}
    </StyledSelectMenu>
  );
}

export default SelectMenu;
