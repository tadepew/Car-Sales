import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

export const removeFeature = item => {
  //dispatch an action here to remove an item
};

// export const buyItem = item => {
//   console.log(item);
//   return {
//     type: "ADD_ITEM",
//     payload: item
//   };
// };

const App = () => {
  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  );
};

export default App;
