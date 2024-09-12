import Logo from "./Logo";
import MenuLeft from "./MenuLeft";

export default function Left() {
  return (
    <div className="d-flex align-items-center">
      <Logo /> 
      <MenuLeft  cc = "d-none" />
    </div>
  )
}
