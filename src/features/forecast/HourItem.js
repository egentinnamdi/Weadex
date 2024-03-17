import styled from "styled-components";
import { FaCloud, FaCloudRain } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import { IoThunderstorm } from "react-icons/io5";

const StyledHourItem = styled.div`
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
    font-size: 20px;
    font-weight: 500;
    padding-bottom: 10px;
  }
`;

function HourItem({ hour }) {
  const {
    time,
    temp_c,
    condition: { text },
  } = hour;
  const newTime = new Date(time).toTimeString().slice(0, 5);
  const hourNow = new Date().getHours();
  const hourForecast = new Date(time).getHours();
  return (
    <StyledHourItem>
      <span>{hourNow === hourForecast ? "Now" : newTime}</span>
      <span>{temp_c}°</span>
      {text === "Sunny" && <MdSunny />}
      {text === "Patchy rain nearby" && <FaCloudRain />}
      {text === "Clear " && <FaCloud />}
      {text === "Partly Cloudy " && <FaCloud />}
      {text === "Thundery outbreaks in nearby" && <IoThunderstorm />}
    </StyledHourItem>
  );
}

export default HourItem;
