import React from "react";
import {CCarousel,CCarouselCaption,CCarouselItem,CImage,} from "@coreui/react";

function ElcetricModels({ cars }) {
  return (
    <div>
      {cars.map((cars) => (
         <CCarousel controls indicators>
          <CCarouselItem>
            <CImage className="d-block w-100" src={cars.pic} alt="slide 1" />
            <CCarouselCaption className="d-none d-md-block">
              <h5>{cars.name}</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </CCarouselCaption>
          </CCarouselItem>
        </CCarousel>
      ))}
    </div>
  );
}

export default ElcetricModels;
