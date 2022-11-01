import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./Routes/Routes";
import CurriculumProvider from "./context/curriculumContext";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  return (
    <CurriculumProvider>
      <GlobalStyles />
      <BrowserRouter>
        <NavBar />
     
        <RoutesApp />
       
      </BrowserRouter>
    </CurriculumProvider>
  );
}

export default App;
