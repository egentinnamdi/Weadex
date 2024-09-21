import styled from "styled-components";
import { overviewCSS } from "../../styles/GlobalStyles";
import { useWeather } from "../../contexts/WeatherContext";
import { FaTemperatureLow } from "react-icons/fa";

const StyledFeelsLike = styled.div`
  ${overviewCSS}
`;

function FeelsLike() {
  const { data } = useWeather();
    const { feelslike_c: feelsLikeCel, feelslike_f: feelsLikeFar } =
      data.current;

    return (
      <StyledFeelsLike className="w-3/4 lg:w-full text-center lg:text-left">
        <div>
          <h3>
            <FaTemperatureLow /> FeelsLike
          </h3>
        </div>
        <div className="content">
          <span>{feelsLikeCel}°C</span>
          <span>{feelsLikeFar}°F</span>
        </div>
      </StyledFeelsLike>
    );
}

export default FeelsLike;
