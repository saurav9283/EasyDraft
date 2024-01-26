import React from 'react';
import './Nav.css'

function Nav() {
  return (
    <div className='navbar_container'>
      <div>
      <div>
        <a href="/" className='navbar_logo-link w-nav-brand w--current'>
            <img src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg" className="navbar_logo" alt="" />
        </a>
      </div>
      </div>
      <div id='w-node' className='navbar_menu shadows_3_pc_none w-nav-menu'>
        <div className='navbar_dropdwn-toggle w-dropdown-toggle'>Use Cases</div>
        <div className='navbar_dropdwn-toggle w-dropdown-toggle'>Features</div>
        <div className='navbar_dropdwn-toggle w-dropdown-toggle'>Resources</div>
        <div className='navbar_dropdwn-toggle w-dropdown-toggle'>Pricing</div>
      </div>
      <div>
        <a href="https://am8evw00qys.typeform.com/enterprisecall" className='navbar_link_nocolor w-nav-link'>Contact Sales</a>
        <a href="https://app.heygen.com/login" className="button_primary_nav shadows_3 w-button">Get started</a>
      </div>
    </div>
  );
}

export default Nav;
