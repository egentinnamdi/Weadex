import styled from "styled-components";
import { overviewCSS } from "../../styles/GlobalStyles";
import { IoWaterOutline } from "react-icons/io5";
import { useWeather } from "../../contexts/WeatherContext";

const StyledPrecipitation = styled.div`
  ${overviewCSS}
`;

function Precipitation() {
  const { data } = useWeather();

    const { precip_in: precipIn, precip_mm: precipMm } = data.current;

    return (
      <StyledPrecipitation className="w-3/4 lg:w-full text-center lg:text-left">
        <div>
          <h3>
            <IoWaterOutline /> Precipitation
          </h3>
        </div>
        <div className="content">
          <span>{precipIn}in</span>
          <span>{precipMm}mm</span>
        </div>
      </StyledPrecipitation>
    );
 
}

export default Precipitation;
