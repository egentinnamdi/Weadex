import styled from "styled-components";
import { overviewCSS } from "../../styles/GlobalStyles";
import { TbDroplets } from "react-icons/tb";
import { useWeather } from "../../contexts/WeatherContext";

const StyledHumidity = styled.div`
  ${overviewCSS}
  .content span:nth-child(2) {
    font-size: 13px;
    padding-top: 10px;
  }
`;

function Humidity() {
  const { data } = useWeather();

    const { humidity } = data.current;
    const { dewpoint_c } = data.forecast.forecastday
      .at(0)
      .hour.at(new Date().getHours());

    return (
      <StyledHumidity className="w-3/4 lg:w-full text-center lg:text-left">
        <div>
          <h3>
            <TbDroplets /> humidity
          </h3>
        </div>
        <div className="content">
          <span>{humidity}%</span>
          <span>The dew point is {dewpoint_c}°C right now</span>
        </div>
      </StyledHumidity>
    );
}

export default Humidity;
