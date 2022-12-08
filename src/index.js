import React from 'react';
// import App from './App';
import { createRoot } from "react-dom/client";
// import ReactDOM from "react-dom";
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/header/Header'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";
// export default function App() {
  // return (
  //   <BrowserRouter>
        // ReactDOM.render(
          createRoot(document.getElementById('root')).render(
<Router>
        <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route exact path="/home" element={<Home />} /> */}

        {/* <Route exact path="/feed" element={<Feed />} /> */}
        {/* <Route exact path="/profile" element={<Profile />} />
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/register" element={<Register />} /> */}
        </Routes>
     </Router>
    // </BrowserRouter>
        // document.getElementById("root")

  );
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
 
