import React from 'react';
import {PrismCode} from 'react-prism';

const FormPage = (props) => {

  return(
    <div>
      <a name="form"></a>
        <div className='dm-content'>
        <h2>Form</h2>
        <p>Forms..</p>
        <form className='sv-form'>
          <input type='text'/>
        </form>

      </div>
    </div>
  )
};

FormPage.displayName = 'FormPage';

export default FormPage;
