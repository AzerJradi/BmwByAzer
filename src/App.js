import { useState } from "react";
import cars from "./DB/models.json";
import WhiteNavBar from "./components/NavsPart/WhiteNavBar";
import Filtred from "./components/ModelsPart/Filtred";
import Between from "./components/ModelsPart/Between";
import BottomNav from "./components/NavsPart/BottomNav";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HomePart/Home";
import ElectricRange from "./components/ElectricRange/ElectricRange";
// import BlackNavBar from "./components/NavsPart/BlackNavBar";

function App() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const handleCheckboxChange = (family) => {
    setSelectedFilters((prevSelectedFilters) =>
      prevSelectedFilters.includes(family)
        ? prevSelectedFilters.filter((filter) => filter !== family)
        : [...prevSelectedFilters, family]
    );
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/Home" element={<div> <Home/> </div>}/>
        <Route path="/Models" element={<><WhiteNavBar /><Filtred cars={cars} selectedFilters={selectedFilters} handleCheckboxChange={handleCheckboxChange}/><Between /><BottomNav /></>} />
        <Route path="/ElectricRange" element={ <> <WhiteNavBar/> <ElectricRange cars={cars}/> </> }/>
      </Routes>
    </div>
  );
}

export default App;
