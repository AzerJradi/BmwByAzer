import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Models from "./Models";
import '../../style.css'

function Filtred({ cars }) {
  const groupedData = cars.reduce((acc, car) => {
    if (!acc[car.family]) {
      acc[car.family] = [];
    }
    acc[car.family].push(car);
    if (!acc[car.type]) {
      acc[car.type] = [];
    }
    acc[car.type].push(car);
    return acc;
  }, {});

  const groupedCars = cars.reduce((acc, car) => {
    if (!acc[car.family]) {
      acc[car.family] = [];
    }
    acc[car.family].push(car);
    return acc;
  }, {});

  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleShowFilters = () => {
    setIsFilterVisible(true);
  };

  const handleHideFilters = () => {
    setIsFilterVisible(false);
  };

  const handleCheckboxChange = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    );
  };
  const displayedFam = Object.keys(groupedData).filter(
    (family) =>
      ![
        "Diesel/Plug-in-Hybrid",
        "Essence/Diesel",
        "Essence/Diesel/Plug-in-Hybrid",
        "Essence",
        "Diesel",
        "Plug-in-Hybrid",
        "Electric",
        ""
      ].includes(family)
  );
  const displayedFamilies = Object.keys(groupedData).filter(
    (family) =>
      ![
        "BMW M",
        "CONCEPT CARS",
        "Diesel/Plug-in-Hybrid",
        "Essence/Diesel",
        "Essence/Diesel/Plug-in-Hybrid",
        "",
      ].includes(family)
  );
  const filteredCars = selectedFilters.length
    ? cars.filter(
        (car) =>
          selectedFilters.includes(car.family) ||
          selectedFilters.includes(car.type)
      )
    : cars;

  return (
    <div className="BIgFirstPArt">
      <p className="firstTitle">FIND YOUR BMW.</p>
      <p className="secondTitle">FILTERS</p>
      <button className="seeAll" onClick={handleShowFilters}>
        >See more filters
        <p className="vehiculesFound">{filteredCars.length} vehicles found</p>
      </button>
      <div className="navFam">
      {displayedFam.map((family, index) => (
        <button className="btnNavFam" key={index}>{family}</button>
      ))}
    </div>

      {isFilterVisible && (
        <div className="filtered">
          <div className="filtreSection">
            <div className="bigSectionOne">
              <p className="titleFiltred">Filtered</p>
              <img
                src="./photos/_delete_icon.png"
                width="45px"
                alt="Close"
                className="closeFiltre"
                onClick={handleHideFilters}
              />
              <p className="SectitleFiltred">Body</p>
              <div className="FIrstSectionFiltred">
                <div className="firstDivFiltred">
                  {displayedFamilies.map((family) => (
                      <label key={family} className="container" id="container">
                        <img
                          className="filtredImg"
                          width="50px"
                          src={`./photos/${family.toLowerCase()}.png`}
                          alt={family}
                        />
                        <p className="typeFiltred">{family}</p>
                        <input
                          className="checkboxFiltred"
                          type="checkbox"
                          checked={selectedFilters.includes(family)}
                          onChange={() => handleCheckboxChange(family)}
                        />
                        <span className="checkmark"></span>
                      </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="bigSectionTwo">
              <div className="d-grid gap-2" id="btnFiltred">
                <Button className="btnFiltred" variant="transparent" size="lg" >
                  See results ({filteredCars.length})
                </Button>
                <Button
                  className="btnFiltredd"
                  variant="transparent"
                  size="lg"
                  onClick={() => setSelectedFilters([])}
                >
                  <img
                    src="./photos/delete_remove_icon.png"
                    width="25px"
                    alt=""
                  />
                  Reset all
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="Allcars">
        {Object.keys(groupedCars)
          .filter(
            (key) =>
              selectedFilters.includes(key) || selectedFilters.length === 0
          )
          .map((key) => (
            <div key={key} className="allCars">
              <h2>{key}</h2>
              <div className="allCars">
                {groupedCars[key].map((car) => (
                  <Models key={car.name} cars={car} />
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="footer">

      </div>
    </div>
  );
}

export default Filtred;
