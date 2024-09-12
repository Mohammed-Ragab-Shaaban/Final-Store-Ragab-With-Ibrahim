
import { useContext, useEffect, useState } from "react";
import { HeaderStateContext } from "../../Context";
import axios from "axios";
import { useParams } from "react-router-dom";



export default function TotalPrice() {

  const params= useParams();
  const {TotalPrice, setTotalPrice} = useContext(HeaderStateContext);
 
  return (
    <div>L.E {TotalPrice}</div>
  )
}
