import React from 'react'
import Section2Components from './Section2Components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faRecycle, faSave } from '@fortawesome/free-solid-svg-icons'
import { faContactCard } from '@fortawesome/free-regular-svg-icons/faContactCard'
import { faHome } from "@fortawesome/free-solid-svg-icons";


export default function Section2() {
  return (
    <div className='bg-dark py-5'>
        <div className='container d-flex flex-wrap justify-content-center gap-4'>
            <Section2Components a = "Free Shipping" span="Above $5 Only" ii={faCar}/>
            <Section2Components a = "Certified Organic" span="100% Guarantee" ii={faSave}/>
            <Section2Components a ="Huge Savings" span="At Lowest Price" ii={faRecycle}/>
            <Section2Components a= "Easy Returns" span="No Questions Asked" ii={faContactCard}/>
        </div>
       
    </div>
  )
}





