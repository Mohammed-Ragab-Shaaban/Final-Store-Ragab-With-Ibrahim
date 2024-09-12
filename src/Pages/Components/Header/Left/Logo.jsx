import { Link } from 'react-router-dom'
import logo from '../../../../assets/logo.svg'


export default function Logo() {
  return (
    <div><Link to={"/"}> <img src={logo} alt="logo"  style={{maxWidth:"70%"}}/> </Link>  </div>
  )
}
