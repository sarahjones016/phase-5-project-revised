import React, {useState} from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";

function Navbar({user, setUser}) {

  const [navButton, setNavButton] = useState(false)
  const [showNavBar, setShowNavBar] = useState(false)

    function handleNavClick() {
        console.log("nav bar has been clicked")
        setShowNavBar(!showNavBar)
        setNavButton(!navButton)
    } 

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div className='hamburgerMenuDiv'>
        
    {showNavBar ? <div className='navButtonTwo'>
        <IconContext.Provider className='hamburgerMenuTwo' value={{ size: "25px", color: "black"}}>
            <RxHamburgerMenu onClick={handleNavClick}/>
        </IconContext.Provider>            
    </div> : <div className='navButton'>
        <IconContext.Provider className='hamburgerMenu' value={{ size: "25px", color: "white"}}>
            <RxHamburgerMenu onClick={handleNavClick}/>
        </IconContext.Provider>
    </div>}
    
    {showNavBar ? <div className='navBar'>
        <ul onClick={handleNavClick} className='options'>
        <li ><Link to='/portal'>Portal</Link></li>
        <li><Link to='/water-knowledge'>Water Knowledge</Link></li>
        <li>
          {user ? (
            <div>
                <button className='logout-button' onClick={handleLogoutClick}>Logout</button>
            </div>
          ) : null}
        </li>
        </ul>
    </div> : null}
    
</div>
  )
}

export default Navbar