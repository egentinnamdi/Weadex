import styled from "styled-components";
import { FaCloud, FaCloudShowersHeavy, FaCloudSunRain } from "react-icons/fa";
import { IoThunderstorm } from "react-icons/io5";

const StyledHourItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* background-color: var(--cape-cod); */
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
  const { time, temp_c } = hour;
  const newTime = new Date(time).toTimeString().slice(0, 5);
  const temp = Math.floor(temp_c);
  return (
    <StyledHourItem>
      <span>{newTime}</span>
      <span>{temp_c}°</span>
      {temp <= 26 && <IoThunderstorm />}
      {temp > 26 && temp <= 29 && <FaCloudShowersHeavy />}
      {temp > 29 && temp <= 31 && <FaCloudSunRain />}
      {temp > 31 && <FaCloud />}
    </StyledHourItem>
  );
}

export default HourItem;
