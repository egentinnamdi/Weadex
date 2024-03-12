import styled from "styled-components";
import { overviewCSS } from "../../styles/GlobalStyles";
import { WiDayFog } from "react-icons/wi";
import { useWeather } from "../../contexts/WeatherContext";

const StyledVisibility = styled.div`
  ${overviewCSS}
`;

function Visibility() {
  const { data } = useWeather();
  const { vis_km, vis_miles } = data.current;

  return (
    <StyledVisibility>
      <div>
        <h3>
          <WiDayFog /> visibility
        </h3>
      </div>
      <div className="content">
        <span>{vis_miles}mi</span>
        <span>{vis_km}km</span>
      </div>
    </StyledVisibility>
  );
}

export default Visibility;
