import axios from "axios"
import { useContext, useEffect, useRef, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import './SingleProduct.css'
import { HeaderStateContext } from "./Context"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"


export default function SingleGroceries() {
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
        
  // const {orderCount,setOrderCount,price , setPrice} = useContext(HeaderStateContext);
  const params = useParams();
  const [product , setProduct] =  useState([]);
  const productCount = useRef();
  const {selectedProduct, setSelectedProduct,Totalcount,
          setTotalCount,TotalPrice, setTotalPrice,groceries,
        ren,  setRen,setShowSingleProduct } = useContext(HeaderStateContext);
  const [relatedProductGroceries,setRelatedProductGroceries] = useState([]);
  const [render,setRender] = useState(0);
  const navigate = useNavigate();
  const [selected,setSelected] = useState(0);
  const [rate, setRate] = useState(0);
  const [discriptionAndReviews , setDiscriptionAndReviews] = useState(false);
  const userEmailRef = useRef();
  const userPasswordRef = useRef();
  const [showErrorReviews , setShowErrorReviews] = useState(false);

  
  useEffect(()=>{
      axios.get("http://localhost:1337/api/groceries-cats/"+ +params.id + "?populate=*" ).then((res)=>{
        setProduct([res.data.data]);
        console.log(product);

      }).catch((err)=>{
        // console.log("error");
      })
  },[])


  useEffect(()=>{
    axios.get("http://localhost:1337/api/groceries-cats/?populate=*" ).then((res)=>{
      setRelatedProductGroceries(res.data.data)
    }).catch((err)=>{
      // console.log("error");
    })
},[])


const finalProduCtCount = (e)=>{
if(e.target.value < 0){
  e.target.value = 0;
};
}

const handleNavigate = ()=>{
  this.forceUpdate();
}

const handleDescription = ()=>{
  setDiscriptionAndReviews(false);
}
const handleReviews = ()=>{
  setDiscriptionAndReviews(true);
}
const sendRate = ()=>{
event.preventDefault();
const userObj = {
  "identifier": userEmailRef.current.value,
  "password": userPasswordRef.current.value
}
axios.post("http://localhost:1337/api/auth/local/",userObj).then((res1)=>{
      const setProductRate = {"data": { "rate" : rate }};
      setShowErrorReviews(false);
     
      axios.put("http://localhost:1337/api/groceries-cats/"+ +params.id + "?populate=*",setProductRate ).then((res2)=>{
  
        const PreviousReviews = res2.data.data.attributes.Reviews;
        const setReviews = {"data": { "Reviews" : PreviousReviews + 1 }}
               
                axios.put("http://localhost:1337/api/groceries-cats/"+ +params.id + "?populate=*",setReviews ).then((res3)=>{
                  
                  
                }).catch((err3)=>{
                  console.log(err3);
                })

      }).catch((err2)=>{
        console.log(err2);
      })

}).catch((err1)=>{
  setShowErrorReviews(true);
});


}

  return (
    <>
    <div className="py-5" style={{backgroundColor:"var(--bgProducts)"}} >
          {
           product.map((el,index)=>{
              return(
              <div key={index}>
                  <div className="bbbb container row m-auto">
                      <div className="col-12 col-md-6 position-relative">
                        <span style={el.attributes.state == true ? saleStyle : offStyle } >
                              {el.attributes.state ? "sale" : "off"}
                        </span>
                      <img src={"http://localhost:1337"+ el.attributes.Image.data.attributes.url} alt="product-Image" style={{maxWidth:"100%"}}/>
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

                  <div className="description container  my-4">
                    <button onClick={handleDescription}>Description</button>
                    <button onClick={handleReviews}>Reviews {el.attributes.Reviews}</button>
                      <div className="py-3" style={discriptionAndReviews ? {display:"none"}:{display:"block"}}>
                        <p>{el.attributes.Description}</p>
                      </div>
                  </div>

                  <div className="reviews container border p-3" style={discriptionAndReviews ? {display:"block"}:{display:"none"}}>
                    <form action="" onSubmit={sendRate}>
                      <h6>Be the first to review "{el.attributes.name}"</h6>
                      <p>Your email address will not be published. Required fields are marked *</p>
                      <div className="d-flex gap-1">
                        <span>Your rating *</span>
                          {
                            [...Array(5)].map((star,starIndex)=>{ 
                              const currentRate = starIndex +1 ;
                              return(
                                  <span key={starIndex} onClick={()=>{setRate(currentRate)}}>
                                    <FontAwesomeIcon icon={faStar} style={currentRate <= rate ? {color:"orange"} : null}></FontAwesomeIcon>
                                  </span>

                              )
                            })
                          }
                      </div>
                      
                      <label htmlFor="textArea">Your review *</label>
                      <textarea className="w-100 p-2" name="textArea" id="textArea" required></textarea>
                      <label htmlFor="email">Email *</label>
                      <input ref={userEmailRef} className="w-100 p-2" type="Email" name="name" id="name" required/>
                      <label htmlFor="password">Password *</label>
                      <input ref={userPasswordRef} className="w-100 p-2" type="password" name="password" id="password" required/>
                     
                      <button type="submit">send</button>
                    </form>
                    <div className={showErrorReviews ? "text-center d-block" : "text-center d-none"}>
                      <span className="text-danger ">Rong email or password please enter correct data</span>
                      <p>if you do not have an account please <Link to={'/register'}>click here</Link></p>
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
                      relatedProductGroceries.filter((e,index)=>{
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
                                 
                                      <img src={"http://localhost:1337"+ el.attributes.Image.data.attributes.url} 
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



