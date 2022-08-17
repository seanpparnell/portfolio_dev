
import { Route, Routes } from "react-router";
import MainNavBar from "./components/shared/navbar/MainNavBar";
import Intro from "./components/intro/Intro";


const App = () => {
  return(
  <>
    {/* <MainNavBar /> */}
  <>  
    <Routes>
    <Route path="/" element={<Intro />} />
    </Routes>
  </>
  </>
  );
}

export default App;
