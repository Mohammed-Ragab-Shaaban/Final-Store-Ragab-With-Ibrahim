import { Link } from "react-router-dom";
import '../Header.css'
import { useContext } from "react";
import { HeaderStateContext } from "../../Context";

export default function MenuLeft(props) {

  const {sideList, setSideList} = useContext(HeaderStateContext);

  return (
    <div className={sideList ? props.cc +" d-md-block" : "d-none d-md-block"}>
        <ul className="headerMenu d-md-flex gap-3">
            <li><Link className="py-3 p-md-0 " to={'/everything'}>Everything</Link></li>
            <li><Link className="py-3 p-md-0 " to={'/groceries'}>Groceries</Link></li>
            <li><Link className="py-3 p-md-0 " to={'/juice'}>Juice</Link></li>
        </ul>
    </div>
  )
}
