import React from 'react';
import './style.css'
import config from '../../../Config/config.json'
function Menu({sideBar}) {
    return ( 
        <div className="items" style={{ display: sideBar ? "block" : "none" }}>
        {config.menu.map((item, index)=> <p key={index}>{item}</p>)}
      </div>
    );
}

export default Menu;