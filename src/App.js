import "./App.css";
import ScrollAnimation from "./ScrollAnimation";
import { StartPage } from "./StartPage";
import Bike from "./Images/Bike.png";
import Seden from "./Images/Seden.png";
import redCoupe from "./Images/redCoupe.png";
import silveSeden from "./Images/silveSedan.png";
import whiteJeep from "./Images/whiteJeep.png";
import sportCar from "./Images/sportCar.png";
import redSeden from "./Images/redSedan.png";
import MenuBar from "./MenuBar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import PaymentForm from "./brainTreePayment";
import "./App.css";
import { Receipt } from "./Receipt";
import SignupPage from "./Signup";
import { Signin } from "./Signin";

import { createContext, useEffect, useState } from "react";

export const UserContext = createContext([]);
function App() {
  const food = [
    [Bike, "TUCSON", 340, 10, "$ 45/day", "1"],
    [Seden, "BMW BLUE", 20, 40, "$ 35/day", "2"],
    [redCoupe, "RED KWID", 60, 90, "$ 52/day", "3"],
    [silveSeden, "BMW WHITE", 80, 120, "$ 95/day", "4"],
    [whiteJeep, "BENZ", 100, 140, "$ 42/day", "5"],
    [sportCar, "TESLA", 205, 245, "$ 87/day", "6"],
    [redSeden, "ALTIS", 260, 290, "$ 48/day", "7"],
  ];
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={food}>
          <Routes>
            <Route path="/ScrollAnimation" element={<ScrollAnimation />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<SignupPage />} />
            <Route path="/ScrollAnimation/:id/" element={<MenuBar />} />
            <Route path="/payment/:id/" element={<PaymentForm />} />
            <Route path="/ScrollAnimation/:id/receipt" element={<Receipt />} />
            <Route path="/" element={<StartPage />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
