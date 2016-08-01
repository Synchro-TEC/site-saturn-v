import React from 'react';
import {PrismCode} from 'react-prism';

const FormPage = (props) => {

  return(
    <div className='dm-content'>
      <div className='dm-grid-show'>
        <h4 className='sv-title'>Forms</h4>
        We have some options to forms.
        <h5 className='sv-title'>Simple form</h5>

        <form className='sv-form'>
          <label>
            <span>Name</span>
            <input type='text' name='name' />
          </label>
          <label>
            <span>E-mail</span>
            <input type='text' name='email' />
          </label>
          <label>
            <span>Disabled Field</span>
            <input type='text' name='login' disabled value='Disabled field' />
          </label>
          <label>
            <span>Gender</span>
            <select>
              <option value=''>Please, select</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
          </label>
        </form>

        <div className='sv-vertical-marged-50' />

        <h5 className='sv-title'>Inline Form</h5>
        <form className='sv-form--inline'>
          <label>
            <span>Name</span>
            <input type='text' name='name' />
          </label>
          <label>
            <span>E-mail</span>
            <input type='text' name='email' />
          </label>
          <label>
            <span>Gender</span>
            <select>
              <option value=''>Please, select</option>
              <option value='M'>Male</option>
              <option value='F'>Female</option>
            </select>
          </label>
          <button className='sv-button default' type='button'>Send</button>
        </form>

        <div className='sv-vertical-marged-50' />

        <h5 className='sv-title'>Status</h5>
        <form className='sv-form'>
          <label>
            <span>Name</span>
            <input type='text' name='name' className='is--invalid' />
          </label>
          <label>
            <span>E-mail</span>
            <input type='text' name='email' className='is--valid' />
          </label>
        </form>

        <h5 className='sv-title'>Input Group</h5>
        <form className='sv-form'>
          <div className='sv-input-group'>
            <input type='text' name='email' />
            <button className='sv-button primary' type='button'>Enviar</button>
          </div>
        </form>
      </div>
    </div>
  )
};

FormPage.displayName = 'FormPage';

export default FormPage;
