// import logo from './logo.svg';
// import "./App.css";
// import "./Header.css";
// import "./Frontpage.css";
import { Routes, Route } from "react-router-dom";
import { Login2 } from "./Login2";
import { Events } from "./Events";
import { Login } from "./Login";
// import "./Login2.css";

import { Header } from "./Header";
import { FrontPage } from "./FrontPage";

function App() {
  return (
    <>
      <div className="head">{/* <Header /> */}</div>
      <Routes>
        <Route path="/" element={<FrontPage />}></Route>
        <Route path="/signup" element={<Login2 />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/events" element={<Events />}></Route>
        {/* <Route path="/home" element={<FrontPage />}></Route> */}
      </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
