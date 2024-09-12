
import Left from "./Left/Left";
import ListIcon from "./ListIcon";
import Profile from "./Profile";
import Right from "./Right/Right";

export default function Header() {
  return (
    <div>
      <div className="container d-flex align-items-center gap-2">
          <div className="d-flex justify-content-between align-items-center gap-2 flex-grow-1">
              <Left />
              <Right />
              <ListIcon />
          </div>
              <Profile P_LogOut = "d-none" />
      </div>
    </div>
  )
}
