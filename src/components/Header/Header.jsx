import React, { useState } from "react"
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuopened, setMenuOpened] = useState(false)

  const getMenuStyles = (menuopened)=>{
    if(document.documentElement.clientWidth <= 800)
    {
      return {right: ! menuopened && "-100%"}
    }
  }
    return (
        <section className="h-wrapper">
       <div className="flexCenter paddings innerWidth h-container">
          <img src="./newCity.png" alt="logo" width={180} />

          <OutsideClickHandler onOutsideClick={()=> {
            setMenuOpened(false)
          }}>

              <div className="flexCenter h-menu"
              style={getMenuStyles(menuopened)}>
                <a href="">Resdencies</a>
                <a href="">Our Value</a>
                <a href="">Contact Us</a>
                <a href="">Get Started</a>
                
                <button className="button">
                  <a href="">Contact</a>
                </button>
              </div>

              </OutsideClickHandler>

              <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
                   <BiMenuAltRight size={30} />
               </div>
       </div>
      
     </section>
    );
  };

  export default Header
  