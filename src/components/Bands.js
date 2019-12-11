import React from "react";
import Band from "./Band";

const Bands = props => {
  console.log(props.deleteBand);
  const bands = props.bands.map(band => (
    <Band
      key={band.id}
      id={band.id}
      name={band.name}
      delete={props.deleteBand}
    />
  ));
  return <div>{bands}</div>;
};

export default Bands;
