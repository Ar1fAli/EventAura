import background1 from "./pixelcut-export.jpeg";
import background2 from "./back1.jpg";
import background3 from "./pixelcut-export(1).jpeg";
import background4 from "./back13.jpeg";
import background5 from "./back14.jpeg";
import background6 from "./back2.png";
import { Header } from "./Header";
import "./App.css";

// import background2 from "./Backgroung2.avif"

export function Events() {
  return (
    <>
      <div className="main">
        <div className="hdr"></div>
        <Header />
        <div className="mainimg">
          {/* <img src={background1} className="mnimg1" /> */}
        </div>
        {/* <div className="mnalbtn">
          <button className="mainbtnact"></button>
          <button className="mainbtn"></button>
          <button className="mainbtn"></button>
          <button className="mainbtn"></button>
          <button className="mainbtn"></button>
          <button className="mainbtn"></button>
          <button className="mainbtn"></button>
        </div> */}

        <div className="mnimgall">
          <img src={background1} className="mnimg" />
          <img src={background2} className="mnimg" />
          <img src={background3} className="mnimg" />
          <img src={background4} className="mnimg" />
          <img src={background5} className="mnimg" />
          <img src={background6} className="mnimg" />
          {/* <img src={background7} /> */}
        </div>
      </div>
    </>
  );
}
