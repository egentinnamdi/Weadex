import styled from "styled-components";
import { useWeather } from "../../contexts/WeatherContext";
import { FaRegClock } from "react-icons/fa";
import HourItem from "./HourItem";
import { forecastList } from "../../styles/GlobalStyles";

const StyledHourList = styled.div`
  ${forecastList}
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  overflow-x: auto;
`;

function HourList() {
  const { data } = useWeather();

  const hour = new Date().getHours();
  const hourForecast = data.forecast.forecastday.at(0).hour.toSpliced(0, hour);

  return (
    <StyledHourList >
      <div>
        <h3>
          <FaRegClock /> hourly forecast
        </h3>
      </div>
      <Row>
        {hourForecast.map((hour) => (
          <HourItem hour={hour} key={hour.time} />
        ))}
      </Row>
    </StyledHourList>
  );
}

export default HourList;
