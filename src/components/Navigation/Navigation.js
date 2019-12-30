import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className='f3 white link dim black pv0 ph4 pointer'><b>Sign Out</b></p>
        </nav>
      );
    } else {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signin')} className='f3 white link dim black pa3 pointer'><b>Sign In</b></p>
          <p onClick={() => onRouteChange('register')} className='f3 white link dim black pa3 pointer'><b>Register</b></p>
        </nav>
      );
    }
}

export default Navigation;