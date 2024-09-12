import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function ShopNow() {
  return (
    <div>
          <Link className='shopnowBtn'> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon> SHOP NOW</Link>
    </div>
    
  )
}
