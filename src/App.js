import styled from "styled-components";
import Header from "@components/Header/Header";
import { Routes, Route } from "react-router-dom";
import Calculator from "@components/Calculator/Calculator";
import Settings from "./pages/Settings/Settings";

const AppWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </AppWrapper>
  );
}

export default App;
