import React, { useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Models from './Models';
import '../../style.css'

function FamilyNavs({ cars }) {
  const [key, setKey] = useState('Compact');

  const filteredCars = cars.filter(cars => cars.type === key);

  return (
    <div className='FamilyNavs'>
      <Tabs
        id="car-family-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="Compact" title="Compact">
          {filteredCars.map(car => <Models key={cars.name} cars={cars} />)}
        </Tab>
        <Tab eventKey="SUV" title="SUV">
          {filteredCars.map(car => <Models key={cars.name} cars={cars} />)}
        </Tab>
        <Tab eventKey="Sedans" title="Sedans">
          {filteredCars.map(car => <Models key={cars.name} cars={cars} />)}
        </Tab>
        <Tab eventKey="Breaks" title="Breaks">
          {filteredCars.map(car => <Models key={cars.name} cars={cars} />)}
        </Tab>
        <Tab eventKey="Coupes" title="Coupes">
          {filteredCars.map(car => <Models key={cars.name} cars={cars} />)}
        </Tab>
        <Tab eventKey="Convertibles" title="Convertibles">
          {filteredCars.map(car => <Models key={cars.name} cars={cars} />)}
        </Tab>
        <Tab eventKey="BMW M" title="BMW M">
          {filteredCars.map(car => <Models key={cars.name} cars={cars} />)}
        </Tab>
        <Tab eventKey="Concept Cars" title="Concept Cars">
          {filteredCars.map(car => <Models key={cars.name} cars={cars} />)}
        </Tab>
      </Tabs>
    </div>
  );
}

export default FamilyNavs;
