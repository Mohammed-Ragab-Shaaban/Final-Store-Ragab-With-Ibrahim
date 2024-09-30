import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
// import Swiper from "swiper";
import { SwiperSlide , Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import axios from "axios";




export default function SlideSwiperJuices() {

    const [bestJuices ,setbestJuices] = useState([]);
    const navigate = useNavigate();


    useEffect(()=>{
        axios.get("http://localhost:1337/api/juices/?populate=*").then((res)=>{
        setbestJuices(res.data.data);
          console.log(bestJuices);
          console.log(bestJuices[0].attributes.rate);
          
        }).catch((err)=>{
      
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
         <div className='container my-3'>
      <h3>Best rated Juices products </h3>
    <div>
         <Swiper    
       modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      navigation= {true}
      pagination={{ clickable: true }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
      
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      
        {
          bestJuices.filter((x)=>{
            return x.attributes.rate >= 3
          }).map((el,index)=>{
            return (
              <SwiperSlide key={index}>
                      <div key={index} className="singleProduct" style={{width:"250px"}}>
                        <div className="position-relative">

                            <span style={el.attributes.state == true ? saleStyle : offStyle } >
                                {el.attributes.state ? "sale" : "off"}
                            </span>
                            
                            <Link to={'http://localhost:5173/juice/' +  el.id} ><img src={"http://localhost:1337"+ el.attributes.Image.data[0].attributes.url} alt="product" style={{maxWidth:"100%"}}/></Link>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <span>{el.attributes.category}</span>
                            <Link to={'http://localhost:5173/juice/' +  el.id} ><h5 className="text-center">{el.attributes.name}</h5></Link>
                            
                            <div className="d-flex gap-1">
                                  {
                                    [<FontAwesomeIcon icon={faStar}></FontAwesomeIcon>,
                                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>,
                                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>,
                                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>,
                                      <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                                    ].map((x,index)=>{
                                      return(
                                        <div key={index} style={index+1 <= +el.attributes.rate ? {color:"orange"} : null}>
                                          {x} 
                                        </div>
                                      )
                                    })
                                  }
                                </div>
                            <span>£{el.attributes.price}</span>
                        </div>
                    </div>
              </SwiperSlide>
            )
          })
        }
    </Swiper>
    </div>
    </div>
    </div>
  )
}
