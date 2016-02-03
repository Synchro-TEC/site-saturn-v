import React from 'react';

const Header = (props) => {

  return(
    <div className='sv-grid sv-grid--full'>
      <div className='sv-grid-cell sv-bg-color-blue dm-header'>
        <h1 className='sv-color-white'>Saturn-V</h1>
      </div>
    </div>
  );

};

Header.displayName = 'Header';

export default Header;
