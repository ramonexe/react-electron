import { Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/globals";
import Template from "./pages/Template";


function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Template />} />
      </Routes>
    </>
  );
};

export default App;
