import React from "react";
import { connect } from "react-redux"; // step 2 - connect the component

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.imageOnProps} alt={props.NameOnProps} />
      </figure>
      <h2>{props.nameOnProps}</h2>
      <p>Amount: ${props.priceOnProps}</p>
    </>
  );
};

// step 2a - wrap the component in the second connect function cal
// step 2b - first function call takes in a function and an object
// step 2c - the function we pass is usually named mapStateToProps

const mapStateToProps = state => {
  console.log(state);
  return {
    imageOnProps: state.car.image,
    nameOnProps: state.car.name,
    priceOnProps: state.car.price
  };
};

export default connect(mapStateToProps)(Header);
