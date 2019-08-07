import React from 'react';
import {Link} from 'react-router-dom';

function Header()
{
      return(
          <div className="headerDiv" style={headerDiv}>
            <h1>Let's Cook</h1>
            <Link style={linkStyle} to="/">Home</Link> {' '}
            <Link style={linkStyle} to="/shareRecipes">Share</Link>
          </div>
      );
 
}

const headerDiv={
  padding:'10px',
  backgroundColor:'#3d70b2',
  color:'#dfe3e6',
  textAlign:'center'
};

const linkStyle={
   textDecoration:'none',
   color:'#dfe3e6'
}

export default Header;