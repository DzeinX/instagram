import '../styles/Menu.scss'
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Inbox} from "../images/plane.svg";
import {ReactComponent as Explore} from "../images/compass.svg";
import {ReactComponent as Notifications} from "../images/heart.svg";
import image from "../images/heart.svg"
import ProfileIcon from "./ProfileIcon";

function MenuApp () {
  return (
    <div className="menu">
      <Home className="icon" />
      <Inbox className="icon" />
      <Explore className="icon" />
      <Notifications className="icon" />
      <ProfileIcon iconSize="small" storyBorder={false} />
    </div>
  )
}

export default MenuApp;