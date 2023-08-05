import React from 'react'
import AccountCircle from './AccountCircle';
import logo from "../logo_typing_test_website.jpeg";

const Header = () => {
  
  return (
    <div className="header">
        <div className="logo">
            <img src={logo} alt="logo" className='logo-img' style={{width : "85px" , height: "100px", cursor:"pointer"}} />
        </div>
        <div className="user-icon">
            <AccountCircle/>
        </div>
    </div>
  )
}

export default Header