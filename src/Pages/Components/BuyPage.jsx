import paypal from '../../assets/paypal.png'
import payneer from '../../assets/payoneer.png'
import MasterCard from '../../assets/masterCard.png'
import { useContext, useReducer, useState } from 'react';
import { HeaderStateContext } from './Context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';



export default function BuyPage() {

  const { TotalPrice, setTotalPrice} = useContext(HeaderStateContext);
  const {Totalcount,setTotalCount} = useContext(HeaderStateContext);

  const {selectedProduct, setSelectedProduct,ren , setRen} = useContext(HeaderStateContext);
  // const [ren , setRen] = useReducer(x => x +1 , 0);


const deleteProduct = (index) =>{
  selectedProduct.splice(index, 1);
  setRen();
}

  // map to get total count of orders
const c =  selectedProduct.map((el,index)=>{
    return(
    +el.count
    )
  }).reduce(function(x,xx){
    x += xx
    return x;
  },0)
  setTotalCount(cc => c);
  console.log(Totalcount)

  // map to get total price of selected products
const p =  selectedProduct.map((el,index)=>{
  return(
  +el.attributes.price *  +el.count
  )
}).reduce(function(x,xx){
  x += xx
  return x;
},0)
setTotalPrice(pp => p);
  console.log(TotalPrice);
 
  return (
    <div style={{backgroundColor:"var(--bgProducts)"}}>
        <div className="container py-4">
          <h3 className="text-center mb-3">Selected Products</h3>

            <div style={{overflow:"auto"}}>
            <table className="table table-secondary">
                      <thead>
                        <tr>
                          <th>Category</th>
                          <th>Name</th>
                          <th>count</th>
                          <th>price</th>
                          <th>Total</th>
                          <th>Delete</th>
                        </tr>
                      </thead>
              <tbody>
              {
                selectedProduct.map((el,index)=>{
                  return(
                        <tr key={index}>
                          <td>{el.attributes.category}</td>
                          <td>{el.attributes.name}</td>
                          <td>{+el.count}</td>
                          <td>{+el.attributes.price}</td>
                          <td>{+el.attributes.price * +el.count}</td>
                          <td style={{color:"red"}}>
                            <FontAwesomeIcon onClick={() => {deleteProduct(index)}}
                             icon={faCircleXmark}> 
                            </FontAwesomeIcon> Cancel
                          </td>
                        </tr>
                  )
                })
              }
              </tbody>
                     <tfoot>
                        <tr>
                          <td colSpan={2}>Total</td>
                          <td>{Totalcount}</td>
                          <td></td>
                          <td>{TotalPrice}</td>
                        </tr>
                      </tfoot>
                  </table>
            </div>
        </div>


        <div className="container py-4">
          <h3 className="text-center mb-3">Payment Method</h3>
              <p>Please select your favorite Payment Method:</p>

              <div className="d-flex gap-2">
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label htmlFor="html">Paypal</label><br />
               <img src={paypal} alt="Picture" style={{width:"50px"}} />
              </div>

              <div className="d-flex gap-2">
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label htmlFor="html">Payoneer</label><br />
               <img src={payneer} alt="Picture" style={{width:"50px"}} />
              </div>
              <div className="d-flex gap-2">
                <input type="radio" id="html" name="fav_language" value="HTML" />
                <label htmlFor="html">MasterCard</label><br />
                <img src={MasterCard} alt="Picture" style={{width:"40px"}} />
              </div>


            <div className='text-center'> <button style={{width:"100%"}} className='btn btn-success mt-3'>Buy Now</button></div>
            

        </div>
    </div>
  )
}
