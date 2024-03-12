import styled from "styled-components";
import OverviewMessage from "../features/overview/OverviewMessage";
import Humidity from "../features/overview/Humidity";
import Visibility from "../features/overview/Visibility";
import Precipitation from "../features/overview/Precipitation";
import FeelsLike from "../features/overview/FeelsLike";

const StyledOverview = styled.div`
  display: grid;
  grid-template: 2fr 1fr 1fr / 1fr 1fr;
  border-radius: var(--border-radius-20);
  height: 100%;
  background: linear-gradient(
      to right,
      var(--mirage-transparent),
      var(--cloud-burst-transparent)
    ),
    url("../../bg-image-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 20px;
  gap: 1.2rem;
`;

function Overview() {
  return (
    <StyledOverview>
      <OverviewMessage />
      <FeelsLike />
      <Precipitation />
      <Visibility />
      <Humidity />
    </StyledOverview>
  );
}

export default Overview;
