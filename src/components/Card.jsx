import React from "react";

import './Card.css'

let prevId = 1

export default function Card({id, image, name, weight_min, weight_max, temperaments}){

   return (
  
    <div  className="cardContainer">
    <div className="card">
    <div >
        <img className="cardImage" src={image} alt='not found'  />
    </div>
    <div>
        <h2 className="cardTitle">{name}</h2>
    </div>
        {   weight_min &&  ( (weight_min) !== "NaN") ?
      (
     <div className="heightContainer">
       <h6 className="cardName" >weight_min: {weight_min} kg</h6>
        {/* <h6 className="cardName" >weight_max: {weight_max} kg</h6> */}
    </div>
    )
    :  (
        <div className="heightContainer">
       <h6 className="cardName" >this dogs has no weight_min defined </h6>
        {/* <h6 className="cardName" >this dogs has no weight_max defined </h6> */}
    </div>
    )
    }
   {  weight_max && ((weight_max) !== "NaN") ?  
      (
     <div className="heightContainer">
       <h6 className="cardName" >weight_max: {weight_max} kg</h6>
        {/* <h6 className="cardName" >weight_max: {weight_max} kg</h6> */}
    </div>
    )
    :  (
        <div className="heightContainer">
       <h6 className="cardName" >this dogs has no weight_max defined </h6>
        {/* <h6 className="cardName" >this dogs has no weight_max defined </h6> */}
    </div>
    )
    }




    <div className="parraf">
        {temperaments?.map(el =>{
            return (
                <h6 className="parraf" key = {prevId++}>{el.name? el.name : el }</h6>
            )
        })}
    </div>
    </div>
    </div>
   
   )
}