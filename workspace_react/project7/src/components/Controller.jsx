import React, { useState } from "react";

const Controller = ({controller, setController}) => {
  
  
  return (
    <>
      <button type="button" onClick={(e)=>{
        setController(controller-1);
      }}>-1</button>
      <button type="button" onClick={(e)=>{
        setController(controller-10);
      }}>-10</button>
      <button type="button" onClick={(e)=>{
        setController(controller-100);
      }}>-100</button>
      <button type="button" onClick={(e)=>{
        setController(controller+100);
      }}>+100</button>
      <button type="button" onClick={(e)=>{
        setController(controller+10);
      }}>+10</button>
      <button type="button" onClick={(e)=>{
        setController(controller+1);
      }}>+1</button>
    </>
  );
};

export default Controller;
