
import axios from "axios"
import { useContext, useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import './SingleProduct.css'
import { HeaderStateContext } from "./Context"


export default function SingleJuices() {

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


  const {orderCount,setOrderCount,price , setPrice} = useContext(HeaderStateContext);
  const params = useParams();
  const [product , setProduct] =  useState([]);
  const productCount = useRef();
  const {selectedProduct, setSelectedProduct,Totalcount,setTotalCount,TotalPrice, setTotalPrice} = useContext(HeaderStateContext);
  const [selected,setSelected] = useState([]);
  
  useEffect(()=>{
      axios.get("http://localhost:1337/api/juices/"+ +params.id + "?populate=*" ).then((res)=>{
        console.log(res.data.data);
        setProduct([res.data.data]);

      }).catch((err)=>{
        // console.log("error");
      })
  },[])

const handleCont = ()=>{
  setOrderCount(orderCount + +countPrice.current.value) ;
  
}

const finalProduCtCount = (e)=>{
  if(e.target.value < 0){
    e.target.value = 0;
  };
  }

  return (
    <div className="py-5" style={{backgroundColor:"var(--bgProducts)"}} >
          {
           product.map((el,index)=>{
              return(
                  
                <div key={index} className="container row m-auto">
                <div className="col-12 col-md-6 position-relative">
                  <span style={el.attributes.state == true ? saleStyle : offStyle } >
                        {el.attributes.state ? "sale" : "off"}
                  </span>
                <img src={"http://localhost:1337"+ el.attributes.Image.data[0].attributes.url} alt="product-Image" style={{maxWidth:"100%"}}/>
                </div>

              <div className="col-12 col-md-6">
                <h2> {el.attributes.name} </h2>
                <h4>£{el.attributes.price}  <span style={{fontSize:"70%",fontStyle:"italic"}}>+ Free Shipping</span></h4>
                <p>Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.</p>
               
                <div className="d-flex gap-2">
                <input type="number" onChange={finalProduCtCount} ref={productCount} style={{width:"15%",textAlign:"center"}} />
                <button onClick={()=>{
                  if(productCount.current.value == "" || productCount.current.value == 0){
                    alert("Please Select at least on piece");
                  }else{
                    el.count = productCount.current.value;
                    setSelectedProduct(z => [...selectedProduct,el]);
                    setTotalCount(cc => [Totalcount, +productCount.current.value].reduce(function(x,xx){ 
                      x += xx
                      return x;},0));
                    setTotalPrice(pp => [TotalPrice, (+productCount.current.value * +el.attributes.price)].reduce(function(x,xx){
                      x += xx;
                      return x ;},0))
                    console.log(TotalPrice);
                    
                  }
                }} className={ el.attributes.state ? "addToCartSale" : "addToCartOff"} 
                        type="button"  disabled={!el.attributes.state}> 
                        Add To Cart    
                </button>
                </div>
                </div>
            </div>


              )
            })
          }

      



    </div>
  )
}



