import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import MarketPlace from "../../Pages/MarketPlace";
import Buy from "../../components/MarketPlace/Buy";
// import data from "../../utils/data";
import Owned from "../../Pages/Owned";
import PrivacyPolicy from "../../Pages/PrivacyPolicy";
import Error from "../../Pages/404";
import Main from "../../Pages/Main";
import ItemonBid from "../../Pages/ItemonBid";
import { useSelector } from "react-redux";
import Sell from "../Sell/Sell";

//need to create routes from db and make dynamic routes
export default function Animate() {
  const location = useLocation();
  const card = useSelector((state) => state.tools.cards);
  return (
    <Routes location={location} key={location.pathname}>
      <Route exact path={"/"} element={<Main />} />
      <Route path="*" element={<Error />} />
      {Object.entries(card).map(([category, { details }]) =>
        details.map((ds) => (
          <Route
            key={details.id}
            exact
            path={`/Buy/${card[category].category}/${ds.name}`}
            element={<Buy ds={ds} />}
          />
        ))
      )}
      <Route exact path="/Sell/:itemName" element={<Sell />} />
      <Route exact path="/Bid" element={<ItemonBid></ItemonBid>}></Route>
      <Route exact path="/marketplace" element={<MarketPlace />}></Route>
      <Route exact path="/owned" element={<Owned />}></Route>
      <Route exact path="/policy" element={<PrivacyPolicy />}></Route>
    </Routes>
  );
}
