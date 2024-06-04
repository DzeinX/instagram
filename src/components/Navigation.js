import '../styles/Navigation.scss';
import logo from '../images/logo.svg';
import searchLogo from '../images/search.svg';
import MenuApp from './Menu.js'

function Navigation() {
  return (
    <div className="navigation">
      <div className="container">
        <img className="logo" src={logo} alt="instagram logo"/>
        <div className="search">
          <img className="searchIcon" src={searchLogo} alt="search icon"/>
          <span className="searchText">Search</span>
        </div>
        <MenuApp />
      </div>
    </div>
  )
}

export default Navigation;