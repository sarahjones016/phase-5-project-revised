import React from 'react'
import "./Navbar.css";
import { Link } from 'react-router-dom';

function Navbar({user, setUser}) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
      <ul>
        <li ><Link to='/portal'>Portal</Link></li>
        <li><Link to='/water-knowledge'>Water Knowledge</Link></li>
        <li>
          {user ? (
            <div>
                <button onClick={handleLogoutClick}>Logout</button>
            </div>
          ) : null}
        </li>
      </ul>
    </div>
  )
}

export default Navbar