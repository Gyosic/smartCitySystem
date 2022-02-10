import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import Main from "./pages/Main";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, :after, :before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
  }

  ::-webkit-scrollbar { 
    display: none; 
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number]{
    -moz-appearance: textfield;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
