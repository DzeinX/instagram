import "../styles/CardMenu.scss";
import {ReactComponent as Bookmark} from "../images/bookmark.svg";
import {ReactComponent as Inbox} from "../images/plane.svg";
import {ReactComponent as Comments} from "../images/comments.svg";
import {ReactComponent as Notifications} from "../images/heart.svg";

function CardMenu () {
  return (
    <div className="cardMenu">
      <div className="interactions">
        <Notifications className="icon" />
        <Comments className="icon" />
        <Inbox className="icon" />
      </div>
        <Bookmark className="icon" />
    </div>
  )
}

export default CardMenu;