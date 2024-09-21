
import axios from "axios"
import { useContext, useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import './SingleProduct.css'
import { HeaderStateContext } from "./Context"
import { Carousel } from "bootstrap"
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


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
  const {selectedProduct, setSelectedProduct,Totalcount,
         setShowSingleProduct, setTotalCount,TotalPrice, setTotalPrice} = useContext(HeaderStateContext);
  const [selected,setSelected] = useState([]);
  const [relatedProductJuices,setRelatedProductJuices] = useState([]);

  
  useEffect(()=>{
      axios.get("http://localhost:1337/api/juices/"+ +params.id + "?populate=*" ).then((res)=>{
        console.log(res.data.data);
        setProduct([res.data.data]);

      }).catch((err)=>{
        // console.log("error");
      })
  },[])

  useEffect(()=>{
    axios.get("http://localhost:1337/api/juices/?populate=*" ).then((res)=>{
      setRelatedProductJuices(res.data.data)
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
  const handleNavigate = ()=>{
    this.forceUpdate();
  }
  


  return (
    <>
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

    <div className="container mt-3">
    <h2>Related Records</h2>
    <div className='p-5'>
          
          <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={150}
              totalSlides={9}
              step={1}
              visibleSlides={3}
              lockOnWindowScroll={false}
              orientation="horizontal"
              tag="div"
            
          >
            
              <Slider className='border p-4'>
                  {
                    relatedProductJuices.filter((e,index)=>{
                      return e.attributes.name != product[0].attributes.name
                    }).map((el,ind) => {
                    return(
                      <Slide key={ind} index={ind}>

                          <div className="singleProduct border p-2" style={{maxWidth:"250px"}}>
                            <div className="position-relative">

                                <span className="p-1 p-md-3" style={el.attributes.state == true ? saleStyle : offStyle } >
                                    {el.attributes.state ? "sale" : "off"}
                                </span>

                                <Link onClick={handleNavigate} to={".././" +  el.id}>
                              
                                    <img src={"http://localhost:1337"+ el.attributes.Image.data[0].attributes.url} 
                                        alt="product" style={{maxWidth:"100%",cursor:"pointer",}} 
                                        onClick={()=>{setShowSingleProduct(el.attributes.category)}}/>
                              
                                </Link>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <span className="relatedCat">{el.attributes.category}</span>
                                <Link to={"./" + el.id}><h5 className="text-center relatedN" onClick={()=>{setShowSingleProduct(el.attributes.category)}}>{el.attributes.name}</h5></Link>
                                <div className="relatedCat">
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                </div>
                                <span className="relatedCat">£{el.attributes.price}</span>
                            </div>
                        </div>
                      </Slide>
                    )
                  })
                }
              </Slider>
              <ButtonBack className="btnRelatedP">{"<<"}</ButtonBack>
              <ButtonNext className="btnRelatedP">{">>"}</ButtonNext>
          
          </CarouselProvider>
      </div>
    </div>
  </>
  )
}



