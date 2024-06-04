import "../styles/Sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profile.jpg"

function Sidebar() {
  return (
    <Sticky topOffset={-80}>
      <div className="sidebar">
        <Profile
          username="vadim.pronin"
          caption="Vadim Pronin"
          urlText="Switch"
          iconSize="big"
        />
        <Suggestions/>
        <Footer/>
      </div>
    </Sticky>
  )
}

export default Sidebar;