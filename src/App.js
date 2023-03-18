import styled from "styled-components";
import Header from "@components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Calculator from "@components/Calculator/Calculator";
import Settings from "./pages/Settings/Settings";
import { useSelector } from "react-redux";

const AppWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.themeColor.bgColor || props.theme.bgColor};
  color: ${(props) => props.themeColor.textColor || props.textColor};
`;

function App() {
  const themeColor = useSelector((state) => state.theme);
  return (
    <AppWrapper themeColor={themeColor}>
      <Header />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
