import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

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

        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./simpleForm.html')}
          </PrismCode>
        </ShowCode>

        <div className='sv-vertical-marged-50' />




        <h5 className='sv-title'>Form with full width</h5>

        <form className='sv-form--full'>
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

        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./simpleFormFull.html')}
          </PrismCode>
        </ShowCode>

        <div className='sv-vertical-marged-50' />



        <h5 className='sv-title'>Form with full width and grid</h5>

        <form className='sv-form--full'>

          <div className='sv-container'>
            <div className='sv-grid-6 sv-grid-12-xs'>
              <label>
                <span>Name</span>
                <input type='text' name='name' />
              </label>
            </div>
            <div className='sv-grid-6 sv-grid-12-xs'>
              <label>
                <span>E-mail</span>
                <input type='text' name='email' />
              </label>
            </div>
            <div className='sv-grid-4 sv-grid-6-md sv-grid-12-xs'>
              <label>
                <span>Gender</span>
                <select>
                  <option value=''>Please, select</option>
                  <option value='M'>Male</option>
                  <option value='F'>Female</option>
                </select>
              </label>
            </div>
            <div className='sv-grid-4 sv-grid-6-md sv-grid-12-xs'>
              <label>
                <span>Password</span>
                <input type='text' name='password' />
              </label>
            </div>
            <div className='sv-grid-4 sv-grid-6-md sv-grid-12-xs'>
              <label>
                <span>Confirm Password</span>
                <input type='text' name='password' />
              </label>
            </div>

            <div className='sv-grid-6'>
              <label className='sv-label--group'>
                <span>Conditions:</span>
              </label>
              <label className='sv-label--checkbox'><input className='sv-checkbox' type='checkbox' />Send Mails</label>
              <label className='sv-label--checkbox'><input className='sv-checkbox' type='checkbox' />I Accept</label>
            </div>

            <div className='sv-grid-6'>
              <label className='sv-label--group'>
                <span>Gender:</span>
              </label>
              <label className='sv-label--radio'><input className='sv-radio' type='radio' name="gender" />Male</label>
              <label className='sv-label--radio'><input className='sv-radio' type='radio' name="gender" />Female</label>
            </div>
          </div>

        </form>

        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./FormGrid.html')}
          </PrismCode>
        </ShowCode>

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

        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./inlineForm.html')}
          </PrismCode>
        </ShowCode>

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

        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./inputStatus.html')}
          </PrismCode>
        </ShowCode>

        <div className='sv-vertical-marged-50' />

        <h5 className='sv-title'>Input Group</h5>
        <form className='sv-form'>
          <div className='sv-input-group'>
            <input type='text' name='email' />
            <button className='sv-button primary' type='button'>Enviar</button>
          </div>
        </form>

        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./inputGroup.html')}
          </PrismCode>
        </ShowCode>
      </div>
    </div>
  )
};

FormPage.displayName = 'FormPage';

export default FormPage;
