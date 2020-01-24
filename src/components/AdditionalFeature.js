import React from "react";
import { useDispatch } from "react-redux";
import { buyItem } from "../actions/carActions";

const AdditionalFeature = props => {
  const addFeature = useDispatch();

  console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button
        className="button"
        onClick={() => addFeature(buyItem(props.feature))}
      >
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;
