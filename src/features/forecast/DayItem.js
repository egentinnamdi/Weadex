import styled from "styled-components";
import { FaCloud } from "react-icons/fa";
import { FaCloudSunRain } from "react-icons/fa";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { IoThunderstorm } from "react-icons/io5";
import { useState } from "react";

const StyledDayItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: var(--border-radius-20);
  color: white;

  & span:nth-child(1) {
    font-size: x-small;
    font-weight: 600;
    padding-bottom: 10px;
  }
  & span:nth-child(2) {
    font-size: 12px;
    color: var(--bali-hai);
    padding-bottom: 10px;
  }
  & span:nth-child(3) {
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
  }
`;
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", " Fri", "Sat"];
function DayItem({ day }) {
  const [daysOfWeek] = useState(days);
  const {
    date,
    day: { avgtemp_c },
  } = day;
  const avgTemp = Math.floor(avgtemp_c);
  const dayOfWeek = new Date(date).getDay();
  const today = new Date().getDay();

  return (
    <StyledDayItem>
      <span>{today === dayOfWeek ? "Today" : daysOfWeek.at(dayOfWeek)}</span>
      <span>{date.slice(5)}</span>
      <span>{avgtemp_c}°</span>
      {avgTemp <= 26 && <IoThunderstorm />}
      {avgTemp > 26 && avgTemp <= 29 && <FaCloudShowersHeavy />}
      {avgTemp > 29 && avgTemp <= 31 && <FaCloudSunRain />}
      {avgTemp > 31 && <FaCloud />}
    </StyledDayItem>
  );
}

export default DayItem;
