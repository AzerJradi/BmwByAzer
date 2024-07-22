import React from "react";
import { Link } from "react-router-dom";
import '../../style.css'

function Between() {
  return (
    <>
        <div className="between">
          <Link to="" className="firstTitleBtw">
              <p id="firstTitleBtw">See energy classes ></p>
          </Link>
          <p className="firstDescBtw">
            For short journeys, choose walking or cycling. <br />
            Consider carpooling. <br />
            Every day, take public transport. <br />
            #MoveLessPollute <br />
          </p>
          <p className="SecTitleBtw">THE WHOLE BMW RANGE.</p>
          <div className="BigSectionBtw">
            <div className="FirstDivBtw">
              <Link to="">
                <p className="SecDesChoice">BMW 1 Series <span>></span></p>
              </Link>
              <Link to="">
                <p className="SecDesChoice">BMW 5 Series <span>></span></p>
              </Link>
              <Link to="">
                <p className="SecDesChoice">BMW i <span>></span></p>
              </Link>
            </div>
            <div className="SecDivBtw">
              <Link to="">
                <p className="SecDesChoice">BMW 2 Series <span>></span></p>
              </Link>
              <Link to="">
                <p className="SecDesChoice">BMW 7 Series <span>></span></p>
              </Link>
              <Link to="">
                <p className="SecDesChoice">BMW M <span>></span></p>
              </Link>
            </div>
            <div className="ThirdDivBtw">
              <Link to="">
                <p className="SecDesChoice">BMW 3 Series <span>></span></p>
              </Link>
              <Link to="">
                <p className="SecDesChoice">BMW 8 Series <span>></span></p>
              </Link>
              <Link to="">
                <p className="SecDesChoice">BMW Z <span>></span></p>
              </Link>
            </div>
            <div className="FourthDivBtw">
              <Link to="">
                <p className="SecDesChoice">BMW 4 Series <span>></span></p>
              </Link>
              <Link to="">
                <p className="SecDesChoice" id="lastChoiceInBtw">BMW <span>></span></p>
              </Link>
            </div>
          </div>
          <p className="SecTitleBtw">ALL BMW BODYWORKS.</p>
          <Link to="">
            <p className="SecDesChoice" id="SecDesChoice">BMW Sedans></p>
          </Link>
        </div>
        <div className="secBtw">
        <p className="FindYouRBmw">FIND YOUR BMW</p>
        <Link To="" className="allModelsBtw">All Models</Link>
        </div>
    </>
  );
}

export default Between;
