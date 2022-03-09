import React from 'react';
import config from '../../../Config/config.json'
function Menu({sideBar}) {
    return ( 
        <div className="items" style={{ display: sideBar ? "block" : "none" }}>
        {config.menu.map((item, index)=> <h3 key={index}>{item}</h3>)}
      </div>
    );
}

export default Menu;