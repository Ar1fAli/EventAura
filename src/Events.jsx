import background1 from "./pixelcut-export.jpeg";
import background2 from "./back1.jpg";
import background3 from "./pixelcut-export(1).jpeg";
import background4 from "./back13.jpeg";
import background5 from "./back14.jpeg";
import background6 from "./back2.png";
import { Header } from "./Header";
import "./App.css";
import { Footer } from "./Footer";

var data = [
  {
    img2: background1,
    name2: "Wedding",
  },
  {
    img2: background2,
    name2: "Name2",
  },
  {
    img2: background3,
    name2: "Birthday",
  },
  {
    img2: background4,
    name2: "Music",
  },
  {
    img2: background5,
    name2: "Photography",
  },
  {
    img2: background6,
    name2: "Personal Event",
  },
];
// , "Birtday", "Party"];

// Map(a: data){

// }
// import background2 from "./Backgroung2.avif"

export function Events() {
  function Imagemng() {
    return (
      <>
        {data.map((d) => {
          return (
            <>
              <div>
                <p className="p">{d.name2}</p>
                <img src={d.img2} className="mnimg" />
                {/* <p className="p">testing</p> */}
              </div>
            </>
          );
        })}
      </>
    );
    // <img src={background1} className="mnimg" />;
  }
  return (
    <>
      <div className="main">
        <div className="hdr"></div>
        <Header />
        <div className="mainimg">
          {/* <img src={background1} className="mnimg1" /> */}
        </div>
        <div>
          <p className="alevnt">All Event</p>
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
          {data.map((d) => {
            return (
              <>
                <div className="hoverimg">
                  <div className="bottom">
                    <p className="p">{d.name2}</p>
                    {/* <button>{d.name2}</button> */}
                    {/* <div typeof="text" className="text"> */}
                    {/* {d.name2} */}
                    {/* </div> */}
                  </div>
                  <div className="imgmn">
                    <img src={d.img2} className="mnimg" />
                  </div>
                  {/* <p className="p">testing</p> */}
                </div>
              </>
            );
          })}
          <div>{/* <Imagemng /> */}</div>
          {/* <img src={background2} className="mnimg" /> */}
          {/* <img src={background3} className="mnimg" /> */}
          {/* <img src={background4} className="mnimg" /> */}
          {/* <img src={background5} className="mnimg" /> */}
          {/* <img src={background6} className="mnimg" /> */}
          {/* <img src={background7} /> */}
        </div>
      </div>
      <Footer />
    </>
  );
}
