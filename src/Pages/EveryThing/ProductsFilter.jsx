import { useContext, useRef, useState } from "react";
import { HeaderStateContext } from "../Components/Context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import '../EveryThing/EveryThing.css'


export default function ProductsFilter() {

  const {showSingleProduct, setShowSingleProduct} = useContext(HeaderStateContext);
  const {groceries, setGroceries} = useContext(HeaderStateContext);
  const {juices, setjuices} = useContext(HeaderStateContext);
  const [searchValue , setSearchValue] = useState(null);
  const [minValue , setMinValue] = useState(0);
  const [maxValue , setMaxValue] = useState(0);
  const minref = useRef();
  const maxref = useRef();

  

const randomG = [...groceries]
const randomNum = Math.floor(Math.random() * randomG.length-1) + 1;
console.log(randomNum);
const randomNumX = randomNum;
const randomSelecedG = randomG.splice(+randomNumX ,2);
console.log(randomSelecedG);

const randomJ = [...juices]
const randomNumJ = Math.floor(Math.random() * randomJ.length-1) + 1;
console.log(randomNumJ);
const randomNumXJ = randomNumJ;
const randomSelecedJ = randomJ.splice(+randomNumXJ ,2);
console.log(randomSelecedJ);


const saleStyle ={
  backgroundColor: "var(--bgGreen)",
  color: "var(--white)",
  padding: "5px",
  borderRadius: "100px" ,
  position: "absolute",
  top: "-10px",
  left: "-10px",
  }
  const offStyle ={
      backgroundColor: "var(--bgDanger)",
      color: "var(--white)",
      padding: "5px",
      borderRadius: "100px" ,
      position: "absolute",
      top: "-10px",
      left: "-10px",
      }


  const searchSubmit = ()=>{
    event.preventDefault();
    const newGroceries = groceries.filter((el,index)=>{
      return el.attributes.name.includes(searchValue);
    });
    const newJuices = juices.filter((el,index)=>{
      return el.attributes.name.includes(searchValue);
    });
    if(searchValue != undefined && searchValue != "" && searchValue != null ){
      setGroceries(newGroceries);
      setjuices(newJuices);
      // console.log("aaa");
    }else{
      // setGroceries(refG.current);
    }
  }

  const rangeSubmit = ()=>{
    event.preventDefault();

    const newGroceries = groceries.filter((el,index)=>{
      return el.attributes.price > minValue && el.attributes.price < maxValue ;
    });
    const newJuices = juices.filter((el,index)=>{
      return el.attributes.price > minValue && el.attributes.price < maxValue ;
    });

  setGroceries(newGroceries);
  setjuices(newJuices);

  console.log(newGroceries)
  console.log(newJuices)

  }

  return (
    <div>
      <div>
          <form className="row m-0 justify-content-between" onSubmit={searchSubmit}>
            <label className="col-12 p-0" htmlFor="pSearch">Search by name product:</label>
            <input className="col-9" onChange={(e)=>{setSearchValue(e.target.value)}} type="search" id="pSearch" placeholder="type here..." name="pSearch" style={{padding:"2px 7px"}}/>
            <input className="col-3" type="submit" value="Go" 
                    style={{padding:"2px 7px", backgroundColor:"var(--bgGreen)",color:"var(--white)",border:"none"}}/>
        </form>
      </div>
      <div className="my-3">
          <form className="row m-0 gap-1" onSubmit={rangeSubmit}>
            <label className="col-12 p-0" htmlFor="rSearch">Search by price:</label>
           <div className="col-12 d-flex gap-2 p-0 justify-content-between">
              <div className="d-flex gap-2">
              <label className="p-0" htmlFor="rSearch">From :</label>
              <input className="p-0" ref={minref}
                    onChange={(e)=>{
                    minref.current.value < 0 ? minref.current.value = 0 : setMinValue(minref.current.value) }} 
                    type="number" 
                    id="rSearch" 
                    name="rSearch" 
                    style={{width:"50%"}}/>
              </div>
              <div className="d-flex gap-2">
              <label className="p-0" htmlFor="rSearch">To :</label>
              <input className="" ref={maxref}
                    onChange={(e)=>{
                    maxref.current.value < 0 ? maxref.current.value = 0 : setMaxValue(maxref.current.value) }} 
                    type="number"
                    id="rSearch" 
                    name="rSearch"
                    style={{width:"50%"}} />
              </div>
              <div>
                <input type="submit" value="GO"  style={{padding:"2px 27px", backgroundColor:"var(--bgGreen)",color:"var(--white)",border:"none"}}/>
              </div>
            </div>
        </form>
      </div>

      
      <div className="d-flex flex-wrap gap-3 my-5 justify-content-center">
              {
                randomSelecedG.map((el,index)=>{
                    return(
                      <div key={index} className="singleProduct " style={{width:"100px"}}>
                            <div className="position-relative">

                                <span style={el.attributes.state == true ? saleStyle : offStyle } >
                                    {el.attributes.state ? "sale" : "off"}
                                </span>

                                <Link to={"./" + el.id}>
                                    <img src={el.attributes.category == "Groceries" ? "http://localhost:1337"+ el.attributes.Image.data.attributes.url :"http://localhost:1337"+ el.attributes.Image.data[0].attributes.url } 
                                        alt="product" style={{maxWidth:"100%",cursor:"pointer",}} 
                                        onClick={()=>{setShowSingleProduct(el.attributes.category)}}/>
                                </Link>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <span>{el.attributes.category}</span>
                                <Link to={"./" + el.id}><h6 className="text-center" onClick={()=>{setShowSingleProduct(el.attributes.category)}}>{el.attributes.name}</h6></Link>
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
                randomSelecedJ.map((el,index)=>{
                    return(
                      <div key={index} className="singleProduct " style={{width:"100px"}}>
                            <div className="position-relative">

                                <span style={el.attributes.state == true ? saleStyle : offStyle } >
                                    {el.attributes.state ? "sale" : "off"}
                                </span>

                                <Link to={"./" + el.id}>
                                    <img src={el.attributes.category == "Groceries" ? "http://localhost:1337"+ el.attributes.Image.data.attributes.url :"http://localhost:1337"+ el.attributes.Image.data[0].attributes.url } 
                                        alt="product" style={{maxWidth:"100%",cursor:"pointer",}} 
                                        onClick={()=>{setShowSingleProduct(el.attributes.category)}}/>
                                </Link>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <span>{el.attributes.category}</span>
                                <Link to={"./" + el.id}><h6 className="text-center" onClick={()=>{setShowSingleProduct(el.attributes.category)}}>{el.attributes.name}</h6></Link>
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
