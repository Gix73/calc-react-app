import styled from "styled-components";
import Header from "./components/Header/Header";

const AppWrapper = styled.div`
  max-width: 100%;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
    </AppWrapper>
  );
}

export default App;
