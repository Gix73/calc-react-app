import styled, { ThemeProvider } from "styled-components";
import Header from "@components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Calculator from "@components/Calculator/Calculator";
import Settings from "./pages/Settings/Settings";
import { useSelector } from "react-redux";
import CalculatorCC from "./components/Calculator/CalculatorCC";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";

const AppWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const themeColor = useSelector((state) => state.theme);
  return (
    <ErrorBoundary>
      <ThemeProvider theme={themeColor}>
        <AppWrapper id="mainWrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Calculator />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/calcCC" element={<CalculatorCC />} />
          </Routes>
        </AppWrapper>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
