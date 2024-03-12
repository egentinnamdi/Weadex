import styled from "styled-components";
import { TbUvIndex } from "react-icons/tb";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useWeather } from "../../contexts/WeatherContext";

const StyledUvIndex = styled.div`
  background-color: var(--mirage-transparent);
  border-radius: var(--border-radius-10);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  & div:nth-child(1) {
    color: var(--bali-hai);
    font-size: 15px;
  }
  .uv {
    display: flex;
    flex-direction: column;
    min-height: 2rem;
  }
  .uv span:nth-child(1) {
    font-size: 30px;
    font-weight: 600;
    padding-bottom: 10px;
  }
  .uv span:nth-child(2) {
    font-weight: 600;
    padding-bottom: 10px;
  }
  .uv span:nth-child(3) {
    font-weight: 500;
    padding-bottom: 20px;
  }
  .slider {
    background-image: linear-gradient(
      90deg,
      hsl(116deg 96% 54%) 0%,
      hsl(96deg 97% 55%) 8%,
      hsl(75deg 97% 55%) 17%,
      hsl(55deg 98% 56%) 25%,
      hsl(50deg 99% 56%) 34%,
      hsl(45deg 99% 57%) 42%,
      hsl(40deg 100% 57%) 50%,
      hsl(27deg 100% 56%) 59%,
      hsl(13deg 100% 55%) 67%,
      hsl(0deg 100% 55%) 75%,
      hsl(341deg 99% 54%) 83%,
      hsl(322deg 99% 53%) 92%,
      hsl(303deg 98% 53%) 100%
    );
  }
`;

function UvIndex() {
  const { data } = useWeather();
  const { uv } = data.current;

  const hours = data.forecast.forecastday.at(0).hour;
  const lowUvHours = hours.filter((hour) => hour.uv <= 5);
  const lowUvHour = lowUvHours.find(
    (hour) => new Date(hour.time).getHours() > new Date().getHours()
  );
  console.log(lowUvHour);
  return (
    <>
      <StyledUvIndex>
        <div>
          <h3>
            <TbUvIndex /> uv index
          </h3>
        </div>
        <div className="uv">
          <span>{uv}</span>
          <span>
            {uv <= 2 && "Low"}
            {uv > 2 && uv <= 5 && "Moderate"}
            {uv > 5 && uv <= 7 && "High"}
            {uv > 7 && uv <= 10 && "Very High"}
            {uv >= 11 && "Extreme"}
          </span>
          <span>
            {uv <= 5
              ? "No need for sun protection"
              : `Use sun protection until ${lowUvHour.time.slice(11)}`}
          </span>
          <Slider value={uv} min={0} max={11} className="slider" />
        </div>
      </StyledUvIndex>
    </>
  );
}

export default UvIndex;
