import React from "react";

const Display = ({ controller }) => {

  return (
    <>
      <div>
        <p>현재 카운트:</p>
        <p>{controller}</p>
        </div>
    </>
  );
};

export default Display;
