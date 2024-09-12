import { Link } from "react-router-dom";
import './EveryThing.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import photo from '../../assets/Groceries/coffee-asorted.jpg'
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Groceries from "../Groceries/Groceries";
import Juice from "../Juice/Juice";
import { HeaderStateContext } from "../Components/Context";

export default function AllProducts() {
   
    const {groceries, setGroceries} = useContext(HeaderStateContext);
    const {juices, setjuices} = useContext(HeaderStateContext);
    const {showSingleProduct, setShowSingleProduct} = useContext(HeaderStateContext);
    // console.log(showSingleProduct);

    useEffect(()=>{
        axios.get("http://localhost:1337/api/groceries-cats/?populate=*").then((res)=>{
            setGroceries(res.data.data);       
            // console.log(res.data.data);       
        }).catch((err)=>{
            // console.log(err);
        })

    },[])

    useEffect(()=>{
        axios.get("http://localhost:1337/api/juices/?populate=*").then((res)=>{
            setjuices(res.data.data);     
        }).catch((err)=>{
            // console.log(err);
        })

    },[])
  
    const saleStyle ={
    backgroundColor: "var(--bgGreen)",
    color: "var(--white)",
    padding: "15px",
    borderRadius: "100px" ,
    position: "absolute",
    top: "-10px",
    left: "-10px",
    }
    const offStyle ={
        backgroundColor: "var(--bgDanger)",
        color: "var(--white)",
        padding: "15px",
        borderRadius: "100px" ,
        position: "absolute",
        top: "-10px",
        left: "-10px",
        }

  return (
    <div>
        <div><Link className="athoerAncor" to={"/"}>Home</Link>/shop</div>
        <h1 style={{color:"var(--bgGreen)",marginBottom:"20px"}}>Shop</h1>
        
        {/* <div></div> for showing and sorting */}
        <div className="allProduct d-flex flex-wrap gap-3 justify-content-center">
            
            {
                groceries.map((el,index)=>{
                    return(
                        <div key={index} className="singleProduct" style={{width:"250px"}}>
                        <div className="position-relative">

                            <span style={el.attributes.state == true ? saleStyle : offStyle } >
                                {el.attributes.state ? "sale" : "off"}
                            </span>

                            <Link to={"./" + el.id}>
                                <img src={"http://localhost:1337"+ el.attributes.Image.data.attributes.url} 
                                    alt="product" style={{maxWidth:"100%",cursor:"pointer",}} 
                                    onClick={()=>{setShowSingleProduct(el.attributes.category)}}/>
                            </Link>
                            
                       
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <span>{el.attributes.category}</span>
                            <Link to={"./" + el.id}><h5 className="text-center" onClick={()=>{setShowSingleProduct(el.attributes.category)}}>{el.attributes.name}</h5></Link>
                            <div>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <span>£{el.attributes.price}</span>
                        </div>
                    </div>
                    )
                })
            }

            {
                juices.map((el,index)=>{
                    return(
                        <div key={index} className="singleProduct" style={{width:"250px"}}>
                        <div className="position-relative">

                            <span style={el.attributes.state == true ? saleStyle : offStyle } >
                                {el.attributes.state ? "sale" : "off"}
                            </span>
                            <Link to={"./" + el.id}>
                                 <img src={"http://localhost:1337" + el.attributes.Image.data[0].attributes.url} 
                                      alt="product" style={{maxWidth:"100%"}}
                                      onClick={()=>{setShowSingleProduct(el.attributes.category)}}/>
                            </Link>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <span>{el.attributes.category}</span>
                            <Link to={"./" + el.id}><h5 onClick={()=>{setShowSingleProduct(el.attributes.category)}} className="text-center">{el.attributes.name}</h5></Link>
                            <div>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                            </div>
                            <span>£{el.attributes.price}</span>
                        </div>
                    </div>
                    )
                })
            }



        </div>
    </div>
  )
}
