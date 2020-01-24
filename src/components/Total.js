import React from "react";
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>
        Total Amount: ${props.priceOnProps + props.additionalPriceOnProps}
      </h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    priceOnProps: state.car.price,
    additionalPriceOnProps: state.additionalPrice
  };
};

export default connect(mapStateToProps)(Total);
