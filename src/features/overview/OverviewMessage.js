import styled from "styled-components";
import { useWeather } from "../../contexts/WeatherContext";
import Spinner from "../../ui/Spinner";

const StyledOverviewMessage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;

  & span:nth-child(1) {
    font-size: 70px;
    font-weight: 500;
    padding-bottom: 10px;
  }
  & span:nth-child(2) {
    font-size: 40px;
    font-weight: 500;
    padding-bottom: 20px;
    text-align: center;
  }
  & span:nth-child(3) {
    font-size: 20px;
    font-weight: 400;
  }
`;

function OverviewMessage() {
  const { data } = useWeather();
  try {
    const { region, country } = data.location;

    const {
      temp_c: temp,
      condition: { text },
    } = data.current;

    return (
      <StyledOverviewMessage>
        <span>{temp}°C</span>
        <span>{text}</span>
        <span>
          {region}, {country}
        </span>
      </StyledOverviewMessage>
    );
  } catch (err) {
    <StyledOverviewMessage>
      <span>Location Unavailable</span>
    </StyledOverviewMessage>;
  }
}

export default OverviewMessage;
