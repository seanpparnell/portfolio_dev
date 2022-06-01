import { Route, Routes } from "react-router";
import MainNavBar from "./components/shared/navbar/MainNavBar";
import Home from "./components/home/Home";


const App = () => {
  return(
  <>
    <MainNavBar />
  <>  
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
  </>
  </>
  );
}

export default App;
