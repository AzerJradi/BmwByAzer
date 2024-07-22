import React, { useEffect, useState } from "react";
import BlackNavBar from "../NavsPart/BlackNavBar";
import BottomNav from "../NavsPart/BottomNav";
import "../../style.css";
import { Link } from "react-router-dom";

const videos = [
  './photos/BMW4K.mp4',
  './photos/BMW-M4Edit.mp4',
  './photos/BMW M4 competition-Edit.mp4',
  './photos/BMW_M5_CS_Edit.mp4'
]; 

function Home() {
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    // Select a random video source
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    setVideoSrc(randomVideo);
  }, []);
  
  console.log()
  return (
    <div>
      <BlackNavBar className="NavHome" />
      <div className="VidHome">
      <video
      src={videoSrc}
      autoPlay
      muted
      loop
      className="zoom-video"
    ></video>
        <div className="AllWhatIsInsideOfTheHomeVid">
          <p className="pleasure">The pleasure of driving</p>
          <p className="VidThings">
            100% ELECTRIC BMW <br /> FROM €490/MONTH.{" "}
          </p>
          <Link to="">
            <button className="homeVidBtn">Discover now</button>
          </Link>
        </div>
      </div>
      <div className="ChoicesHome">
        <p className="PurchaseProect">YOUR PURCHASE PROJECT</p>
        <p className="FindUrBMWhome">FIND YOUR BMW</p>
        <div className="AllTheThree">
          <div className="FirstSecondSectionHome">
            <img
              src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_STOCK_CAR?wid=1504&hei=542"
              alt=""
              className="SecondSectionHomeImg"
              width="500px"
            />
            <p className="SecondSectionHomeName">New BMWs</p>
            <Link to="">
              <button className="SecondSectionHomeBtn">Find your BMW</button>
            </Link>
          </div>
          <div className="SecondSecondSectionHome">
            <img
              src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_CON?wid=1504&hei=542"
              alt=""
              className="SecondSectionHomeImg"
              width="500px"
            />
            <p className="SecondSectionHomeName" id="SecondSectionHomeName">
              Configuration & Price
            </p>
            <Link to="">
              <button className="SecondSectionHomeBtn">
                Personalize yours
              </button>
            </Link>
          </div>
          <div className="ThirdSecondSectionHome">
            <img
              src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_USED_CAR?wid=1504&hei=542"
              alt=""
              className="SecondSectionHomeImg"
              width="500px"
            />
            <p className="SecondSectionHomeName">Used BMW</p>
            <Link to="">
              <button
                className="SecondSectionHomeBtn"
                id="SecondSectionHomeBtn"
              >
                Discover the available models
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="CarsHome">
        <div className="CarsHomeOne">
          <img
            src="https://bmw.scene7.com/is/image/BMW/g90_promotional_teaser:3to1?fmt=webp&wid=2560&hei=853"
            width="100%"
            alt=""
            className="CarsHomeOneImg"
          />
          <div className="M5Page">
            <p className="TheNew">THE NEW</p>
            <p className="M5">M5</p>
            <div className="M5Homepage">
              <img
                src="https://www.bmw.fr/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png"
                width="75px"
                alt=""
                className="mHomePage"
              />
              <p className="NewBmwHomePage">NEW BMW M5 SEDAN.</p>
            </div>
            <button className="Discovernow">Discover now</button>
          </div>
          <p>
            Details of some parts shown may differ from the actual part. Subject
            to changes and errors.
          </p>
          <img
            src="https://bmw.scene7.com/is/image/BMW/g45_phev_home-teaser_dsk_fb:3to1?fmt=webp&wid=2560&hei=853"
            width="100%"
            alt=""
            className="CarsHomeOneImg"
          />
          <div className="M5Page">
            <p className="TheNew">THE NEW</p>
            <p className="M5">X3</p>
            <div className="M5Homepage">
              <p className="NewBmwHomePage">New BMW X3 Plug-in Hybrid.</p>
            </div>
            <button className="Discovernow">Discover now</button>
          </div>
          <img
            src="https://bmw.scene7.com/is/image/BMW/BMW_CND_WEEK_2024_3000x3000:3to1?fmt=webp&wid=2560&hei=853"
            width="100%"
            alt=""
            className="CarsHomeOneImg"
          />
          <div className="l3SectionOfHomepeage">
            <div className="l3Homepage">
              <p className="l3sectionTitle">Make the best even better.</p>
              <p className="NewBmwHomePage">BMW ConnectedDrive Upgrades.</p>
              <button className="EnjoyNowHomePageBtn">Enjoy now</button>
            </div>
          </div>
          <img
            src="https://bmw.scene7.com/is/image/BMW/DI21_000034869:3to1?fmt=webp&wid=2560&hei=853"
            width="100%"
            alt=""
            className="CarsHomeOneImg"
          />
          <div className="l4SectionOfHomepeage">
            <p className="l3sectionTitle">USED ​​BMW AVAILABLE.</p>
            <p className="NewBmwHomePage">
              TAKE ADVANTAGE OF A CREDIT AT AN <br />
              EXCEPTIONAL RATE OF 0.9% UNTIL JULY 31².
            </p>

            <button className="DiscoverNow">Discover now</button>
          </div>
          <img
            src="https://bmw.scene7.com/is/image/BMW/iX1_new:3to1?fmt=webp&wid=2560&hei=853"
            width="100%"
            alt=""
            className="CarsHomeOneImg"
          />
          <div className="l4SectionOfHomepeage">
            <p className="l3sectionTitle">
              BMW iX1 M SPORT. <br /> €490/MONTH¹.
            </p>
            <p className="NewBmwHomePage">
              LLD 36 MONTHS. 1ST RENT OF €490 AFTER <br />
              DEDUCTION OF THE ECOLOGICAL BONUS OF €4,000*.
            </p>

            <button className="DiscoverNow">Discover now</button>
          </div>
          <img
            src="https://bmw.scene7.com/is/image/BMW/DI23_000156105_U10E:3to1?fmt=webp&wid=2560&hei=853"
            width="100%"
            alt=""
            className="CarsHomeOneImg"
          />
          <div className="l4SectionOfHomepeage" id="l5SectionOfHomepeage">
            <p className="l3sectionTitle">
              NEW BMW iX2 M SPORT. <br /> €540/MONTH².
            </p>
            <p className="NewBmwHomePage">
              LLD 36 MONTHS. 1ᴱᴿ RENT OF €540 AFTER <br />
              DEDUCTION OF THE ECOLOGICAL BONUS OF €4,000*.
            </p>

            <button className="DiscoverNow">Discover now</button>
          </div>
          <img
            src="https://bmw.scene7.com/is/image/BMW/DI24_000200184-1:3to1?fmt=webp&wid=2560&hei=853"
            width="100%"
            alt=""
            className="CarsHomeOneImg"
          />
          <div className="l4SectionOfHomepeage" id="l4SectionOfHomepeage">
            <p className="l3sectionTitle">
              NEW BMW i4 M SPORT. <br /> €590/MONTH³.
            </p>
            <p className="NewBmwHomePage">
              LLD 36 MONTHS. 1ᴱᴿ RENT OF €590 AFTER <br />
              DEDUCTION OF THE ECOLOGICAL BONUS OF €4,000*.
            </p>

            <button className="DiscoverNow">Discover now</button>
          </div>
          <img
            src="https://bmw.scene7.com/is/image/BMW/DI22_000117463:3to1?fmt=webp&wid=2560&hei=853"
            alt=""
            width="100%"
            className="CarsHomeOneImg"
          />
          <div className="l5SectionOfHomepeage">
            <p className="l4sectionTitle">FIND AND RESERVE YOUR BMW ONLINE.</p>
            <p className="l5sectionTitle">NEW BMW AVAILABLE.</p>

            <button className="DiscoverNow">Find your BMW</button>
          </div>
          <div className="BottomOfCarsHome">
            <img
              src="https://bmw.scene7.com/is/image/BMW/NSC_Website_1680x756_slider:16to9?fmt=webp&wid=600&hei=338"
              width="50%"
              alt=""
            />
            <div className="SecondSectionOfBottomOfCarsHome">
              <p className="firstInSecondSectionOfBottomOfCarsHome">
                BMW CONNECTED SERVICES
              </p>
              <p className="SecInSecondSectionOfBottomOfCarsHome">
                BMW CONNECTED DRIVE.
              </p>
              <p className="ThirdInSecondSectionOfBottomOfCarsHome">
                Drive with peace of mind and make every journey unforgettable
                with BMW <br /> ConnectedDrive updates that enhance your
                experience behind the wheel of your <br /> BMW.
              </p>

              <div className="ButtonsOfSecondSectionOfBottomOfCarsHome">
                <button className="FirstButtonOfSecondSectionOfBottomOfCarsHome">
                  Discover all the services
                </button>
                <button className="SecButtonOfSecondSectionOfBottomOfCarsHome">
                  Go to the BMW Shop
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="SoMuchTalk">
        <p className="TalkTitle">Legal Notice</p>
        <p className="TalkSousTitre">
          ¹ Example for a BMW iX1 eDrive20 M Sport. 1st rent of €490 after
          deduction of the ecological bonus of €4,000*, followed by 35 rents of
          €490. Long Term Rental over 36 months and for 30,000 km including the
          warranty extension. Financial loss insurance to be taken out through
          BMW Finance or with the insurer of your choice, subject to providing
          proof to BMW Finance. Offer reserved for individuals for any order of
          a BMW iX1 eDrive20 M Sport in participating dealerships before
          06/30/2024, while stocks last and subject to acceptance by BMW
          Finance, SNC with capital of 87,000,000 € - RCS Versailles 343 606
          448, registered with ORIAS under number 07 008 883. Since 01/09/2018,
          new light vehicles have been approved in Europe on the basis of the
          harmonized test procedure for vehicles Light Duty Vehicles (WLTP), a
          test procedure for measuring fuel consumption and CO₂ emissions, more
          realistic than the previously used NEDC procedure. *After deduction of
          the ecological bonus of €4,000, subject to eligibility in accordance
          with the decree in force.
        </p>

        <p className="TalkBold">
          Model Presented: BMW iX1 eDrive20 xLine with options at €695/month
          without deposit. 36-month LLD. 30,000 km.
        </p>

        <p className="TalkSousTitre">
          ² Example for a BMW iX2 eDrive20 M Sport. 1st rental of €540 after
          deduction of the ecological bonus of €4,000*, followed by 35 rentals
          of €540. Long-Term Rental over 36 months and for 30,000 km including
          the warranty extension. Financial loss insurance to be taken out
          through BMW Finance or with the insurer of your choice, subject to
          providing proof to BMW Finance. Offer reserved for individuals for any
          order of a BMW iX2 eDrive20 M Sport in participating dealerships
          before 06/30/2024, while stocks last and subject to acceptance by BMW
          Finance, SNC with capital of €87,000,000 - RCS Versailles 343 606 448,
          registered with ORIAS under number 07 008 883. Since 09/01/2018, new
          light vehicles have been approved in Europe on the basis of the
          harmonized test procedure for light vehicles (WLTP), a test procedure
          for measuring fuel consumption and CO₂ emissions, more realistic than
          the NEDC procedure previously used. *After deduction of the €4,000
          ecological bonus, subject to eligibility in accordance with the decree
          in force.
        </p>

        <p className="TalkBold">
          Model Shown: BMW iX2 xDrive30 M Sport with options at €1090/month
          without contribution. LLD 36 months. 30,000 km.
        </p>

        <p className="TalkSousTitre">
          ³ Example for a BMW i4 eDrive35 M Sport. 1st rent of €590 after
          deduction of the ecological bonus of €4,000*, followed by 35 rents of
          €590. Long Term Rental over 36 months and for 30,000 km including the
          warranty extension. Financial loss insurance to be taken out through
          BMW Finance or with the insurer of your choice, subject to providing
          proof to BMW Finance. Offer reserved for individuals for any order of
          a BMW i4 eDrive35 M Sport in participating dealerships before
          06/30/2024, while stocks last and subject to acceptance by BMW
          Finance, SNC with capital of 87,000,000 € - RCS Versailles 343 606
          448, registered with ORIAS under number 07 008 883. Since 01/09/2018,
          new light vehicles have been approved in Europe on the basis of the
          harmonized test procedure for vehicles Light Duty Vehicles (WLTP), a
          test procedure for measuring fuel consumption and CO₂ emissions, more
          realistic than the previously used NEDC procedure. *After deduction of
          the ecological bonus of €4,000, subject to eligibility in accordance
          with the decree in force.
        </p>

        <p className="TalkBold">
          Model Presented: BMW i4 eDrive40 with options at €1025/month without
          deposit. LLD 36 months. 30,000 km.
        </p>

        <p className="hashtagsTalk">
          For short journeys, choose walking or cycling.
          <br />
          Consider carpooling.
          <br />
          On a daily basis, take public transport.
          <br />
          #MoveLessPollute
        </p>
      </div>
      <BottomNav />
    </div>
  );
}

export default Home;
