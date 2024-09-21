import styled from "styled-components";
import { FaWind } from "react-icons/fa";
import { useWeather } from "../../contexts/WeatherContext";

const StyledWind = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: var(--mirage-transparent);
  border-radius: var(--border-radius-10);
  padding: 20px;
  & div:nth-child(1) {
    color: var(--bali-hai);
    font-size: 15px;
  }
  & div:nth-child(2),
  & div:nth-child(3) {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    width: 60%;
    padding-bottom: 15px;
  }
  & div:nth-child(2) {
    border-bottom: solid 2px var(--bali-hai);
  }
  .wind > span,
  .gust > span {
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 10px;
  }
  .wind p,
  .gust p {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 500;
  }
  .wind p span:nth-child(1),
  .gust p span:nth-child(1) {
    text-transform: uppercase;
    color: var(--bali-hai);
  }
`;

function Wind() {
  const { data } = useWeather();
  const { wind_mph, gust_mph } = data.current;
  return (
    <StyledWind >
      <div>
        <h3>
          <FaWind /> wind
        </h3>
      </div>
      <div className="wind">
        <span>{wind_mph}</span>
        <p>
          <span>mph</span>
          <span>Wind</span>
        </p>
      </div>
      <div className="gust">
        <span>{gust_mph}</span>
        <p>
          <span>mph</span>
          <span>Gusts</span>
        </p>
      </div>
    </StyledWind>
  );
}

export default Wind;
