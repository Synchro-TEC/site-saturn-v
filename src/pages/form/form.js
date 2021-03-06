import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const FormPage = (props) => {

  return(
    <div className='dm-content'>
      <div>
        <h4 className='sv-title'>Forms</h4>
        Nós temos algumas opções de forms.
        <h5 className='sv-title'>Simple form</h5>

        <form className='sv-form'>
          <label>
            <span>Name</span>
            <input name='name' type='text' />
          </label>
          <label>
            <span>E-mail</span>
            <input name='email' type='text'  />
          </label>
          <label>
            <span>Disabled Field</span>
            <input disabled name='login' type='text' value='Disabled field'/>
          </label>
          <label>
            <span>Gender</span>
            <div className='sv-select'>
              <select>
                <option value=''>Please, select</option>
                <option value='M'>Male</option>
                <option value='F'>Female</option>
              </select>
              <label>
                <i className='fa fa-angle-down fa-fw' />
              </label>
            </div>
          </label>
        </form>

        <ShowCode>
          <PrismCode className='language-html'>
            {require('!raw-loader!./simpleForm.html')}
          </PrismCode>
        </ShowCode>

        <div className='sv-vertical-marged-50' />



        <h5 className='sv-title'>Form with grid</h5>

        <form className='sv-form'>

            <div className='sv-row--with-gutter'>
                <div className='sv-column _40'>
                    <label>
                        <span>Name</span>
                        <input name='name' type='text' />
                    </label>
                </div>
                <div className='sv-column _60'>
                    <label>
                        <span>E-mail</span>
                        <input name='email' type='text' />
                    </label>
                </div>
            </div>

            <div className='sv-row--with-gutter'>
                <div className='sv-column _40'>
                    <label>
                        <span>Gender</span>
                        <select>
                            <option value=''>Please, select</option>
                            <option value='M'>Male</option>
                            <option value='F'>Female</option>
                        </select>
                    </label>
                </div>
                <div className='sv-column _40'>
                    <label>
                        <span>Password</span>
                        <input name='password' type='text'  />
                    </label>
                </div>
                <div className='sv-column _40'>
                    <label>
                        <span>Confirm Password</span>
                        <input name='password' type='text' />
                    </label>
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
            <input name='name' type='text' />
          </label>
          <label>
            <span>E-mail</span>
            <input name='email' type='text' />
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
            <input className='is--invalid' name='name' type='text' />
          </label>
          <label>
            <span>E-mail</span>
            <input  className='is--valid' name='email' type='text' />
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
            <input name='email' type='text' />
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
