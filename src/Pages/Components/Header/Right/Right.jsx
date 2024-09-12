import Cart from "./Cart";
import LoginAndRegister from "./LoginAndRegister";
import RightMenu from "./RightMenu";
import TotalPrice from "./TotalPrice";

export default function Right() {
  return (
    <div className="d-flex gap-2 align-items-center">
      <RightMenu dd = "d-none " />
      <TotalPrice />
      <Cart />
      <LoginAndRegister p_db = "d-none "/>
    </div>
  )
}
