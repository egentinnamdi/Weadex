import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  /* CSS HEX */
  --san-juan: #375075;
  --mirage-opaque: #151922;
  --mirage-transparent: #151922ba;
  --pink-swan: #c5b7bc;
  --lynch: #6b7ca3;
  --cloud-burst: #213655;
  --cloud-burst-transparent: #21365582;
  --bali-hai: #859cb1;
  --kabul: #604a44;
  --cape-cod: #393c3b;
  --goblin: #39792f;


  --border-radius-10: 10px;
  --border-radius-20: 20px;
  --border-radius-30: 30px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    min-height: 100vh;
    padding: 50px;
    background: url("../../bg-image.avif");
    background-repeat: no-repeat;
    color: var(--pink-swan);
    font-family: "Montserrat", san-serif;
}

h3{
  font-weight: 500;
  text-transform: uppercase;
}

::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--pink-swan);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--cape-cod);
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }



`;

const overviewCSS = css`
  border-radius: var(--border-radius-20);
  background-color: var(--mirage-transparent);
  padding: 15px 20px;
  & div:first-child {
    color: var(--bali-hai);
    padding-bottom: 10px;
  }

  .content span {
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 600;
    padding-bottom: 10px;
  }
`;

const forecastList = css`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  background-color: var(--mirage-transparent);
  grid-column: span 2;
  border-radius: var(--border-radius-10);
  overflow-x: auto;
  padding: 20px;
  & div:first-child {
    display: flex;
    color: var(--bali-hai);
    padding-bottom: 10px;
    border-bottom: 2px solid var(--cape-cod);
  }
`;

export default GlobalStyles;
export { overviewCSS, forecastList };
