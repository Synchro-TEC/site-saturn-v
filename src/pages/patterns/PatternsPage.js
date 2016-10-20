import React from 'react';
import {PrismCode} from 'react-prism';
import ShowCode from '../../components/ShowCode.jsx';

const PatternsPage = (props) => {

  return(
    <div className='dm-content'>
      <h4 className='sv-title'>Patterns</h4>
      <p>Patterns are definitions of how to solve often problems.</p>

      <h5>Loader</h5>

      <p>Default loader: <br /><span className='sv-bar-loader'/></p>
      <p>Large loader: <br /><span className='sv-bar-loader large'/></p>


      <h5>Breadcrumbs</h5>

      <ul className='sv-breadcrumb'>
        <li><a href='#'><i className='fa fa-home fa-fw' /></a></li>
        <li><a href='#'><i className='fa fa-male fa-fw' /> Users</a></li>
        <li><a href='#'><i className='fa fa-database fa-fw' /> Items</a></li>
        <li><a href='#'><i className='fa fa-cog fa-fw' /> Config</a></li>
      </ul>

      <ul className='sv-breadcrumb'>
        <li><a href='#'><i className='fa fa-home fa-fw' /></a></li>
        <li><a href='#'>Users</a></li>
        <li><a href='#'>Items</a></li>
        <li><a href='#'>Config</a></li>
      </ul>

      <div className='sv-vertical-marged-50'/>

      <h5>List Action</h5>

      <div className='browser-mockup sv-padd-25'>

        <section>
          <ul className='sv-breadcrumb'>
            <li><a href='#'><i className='fa fa-home fa-fw' /></a></li>
            <li><a href='#'><i className='fa fa-male fa-fw' /> Users</a></li>
          </ul>

          <hr />

          <div className='sv-table-responsive-vertical'>
            <table className='sv-table with--borders with--hover'>
              <caption>
                <div className='sv-row'>
                  <div className='sv-column sv-vertical-marged-10'>
                    <button className='sv-button info sv-pull-left'><i className='fa fa-plus fa-fw' /> Add</button>
                  </div>
                  <div className='sv-column sv-vertical-marged-10'>
                    <form className='sv-form'>

                      <div className='sv-input-group'>
                        <span className='label --first'><i className='fa fa-search fa-fw' /></span>
                        <input type='search' className='--center' placeholder='Type to search!' />
                        <span className='label-action --last'>Filter <i className='fa fa-sliders fa-fw' /></span>
                        <section className='action-container'>
                          <div className='sv-triangle --right'></div>

                          <section className='action-container--content'>
                            <div className='sv-row--with-gutter'>
                              <div className='sv-column'>
                                <label>
                                  <span>Gender:</span>
                                  <div className='sv-select'>
                                    <select>
                                      <option value=''>Please, select</option>
                                      <option value='M'>Male</option>
                                      <option value='F'>Female</option>
                                    </select>
                                    <label>
                                      <i className='fa fa-angle-down fa-fw'/>
                                    </label>
                                  </div>
                                </label>
                              </div>
                              <div className='sv-column'>
                                <label>
                                  <span>Type:</span>
                                  <div className='sv-select'>
                                    <select>
                                      <option value='' />
                                      <option value='Master'>Master</option>
                                      <option value='Senior'>Senior</option>
                                    </select>
                                    <label>
                                      <i className='fa fa-angle-down fa-fw'/>
                                    </label>
                                  </div>
                                </label>
                              </div>
                            </div>

                            <label>
                              <span>Age</span>
                            </label>
                            <label>
                              <input type='checkbox' /> 10
                            </label>
                            <label>
                              <input type='checkbox' /> 30
                            </label>
                            <label>
                              <input type='checkbox' /> 60
                            </label>
                            <footer>
                              <button className='sv-button link link-danger sv-pull-left'>Clear All</button>
                              <button className='sv-button link link-info sv-pull-right'>Apply Filter</button>
                              <button className='sv-button link link-cancel sv-pull-right'>Cancel</button>
                            </footer>
                          </section>
                        </section>
                      </div>
                    </form>
                  </div>
                </div>
              </caption>
              <thead>
              <tr>
                <th>Name</th>
                <th>E-mail</th>
                <th>Age</th>
                <th className='sv-text-center'>Gender</th>
                <th>Type</th>
                <th>City</th>
                <th>Language</th>
                <th>Action</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@doe.com</td>
                <td>39</td>
                <td className='sv-text-center'><i className='fa fa-male fa-fw' title='Male' /></td>
                <td>Master</td>
                <td>Campinas</td>
                <td>Portuguese</td>
                <td><a href=''>Show</a></td>
              </tr>
              <tr>
                <td>Minnie Murray</td>
                <td>minnie.murray31@example.com</td>
                <td>29</td>
                <td className='sv-text-center'><i className='fa fa-female fa-fw' title='Female' /></td>
                <td>Master</td>
                <td>São Paulo</td>
                <td>Portuguese</td>
                <td><a href=''>Show</a></td>
              </tr>
              <tr>
                <td>Diane Ruiz</td>
                <td>diane.ruiz91@example.com</td>
                <td>27</td>
                <td className='sv-text-center'><i className='fa fa-female fa-fw' title='Female' /></td>
                <td>Senior</td>
                <td>San Francisco</td>
                <td>Spanish</td>
                <td><a href=''>Show</a></td>
              </tr>
              <tr>
                <td>Tonya Campbell</td>
                <td>tonya.campbell@oci.com</td>
                <td>24</td>
                <td className='sv-text-center'><i className='fa fa-female fa-fw' title='Female' /></td>
                <td>Leader</td>
                <td>Orlando</td>
                <td>English</td>
                <td><a href=''>Show</a></td>
              </tr>
              <tr>
                <td>Gina Ryan</td>
                <td>gina.ryan@onesite.com.au</td>
                <td>27</td>
                <td className='sv-text-center'><i className='fa fa-female fa-fw' title='Female' /></td>
                <td>Senior</td>
                <td>Sidney</td>
                <td>English</td>
                <td><a href=''>Show</a></td>
              </tr>
              </tbody>
              <tfoot>
              <tr>
                <td colSpan='8' className='sv-text-center'>
                  <button className='sv-button link link-info'><i className='fa fa-chevron-left fa-fw' /> Anterior</button>
                  <button className='sv-button link link-info'>Próximo <i className='fa fa-chevron-right fa-fw' /></button>
                </td>
              </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </div>

      <div className='sv-vertical-marged-25'/>


      <h5>New/Edit Action</h5>

      <div className='browser-mockup sv-padd-25'>
        <section>
          <ul className='sv-breadcrumb'>
            <li><a href='#'><i className='fa fa-home fa-fw' /></a></li>
            <li><a href='#'><i className='fa fa-male fa-fw' /> Users</a></li>
            <li><a href='#'>New User</a></li>
          </ul>

          <hr />

          <div className='sv-row'>
            <div className='sv-column _20'></div>
            <div className='sv-column _60'>
              <form className='sv-form sv-padd-25 '>
                <fieldset>
                  <legend>Access Info</legend>

                  <label>
                    <span>Username</span>
                    <input type='text' placeholder='Your username to login app' />
                  </label>

                  <div className='sv-row--with-gutter sv-no-margins'>
                    <div className='sv-column'>
                      <label>
                        <span data-info='(8 caracters)' data-error='Error'>Password</span>
                        <input type='password' className='is--invalid' />
                      </label>
                    </div>
                    <div className='sv-column'>
                      <label>
                        <span>Confirm Password</span>
                        <input type='password' />
                      </label>
                    </div>
                  </div>
                </fieldset>

                <fieldset>
                  <legend>Personal Info</legend>
                  <label>
                    <span>Full Name</span>
                    <input type='text' placeholder='All names' />
                  </label>
                  <label>
                    <span data-info='(Optional)'>Birth Date</span>
                    <input type='text' placeholder='dd/mm/yyyy' />
                  </label>
                  <label>
                    <span>Gender:</span>
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
                </fieldset>

                <fieldset>
                  <legend>Skills</legend>


                      <label>
                        <span>Language:</span>

                          <label>
                            <input type='checkbox' value='English' /> English
                          </label>
                          <label>
                            <input type='checkbox' value='Portuguese' /> Portuguese
                          </label>
                          <label>
                            <input type='checkbox' value='Spanish' /> Spanish
                          </label>
                      </label>


                      <label>
                        <span>Level:</span>
                          <label>
                            <input type='radio' value='Junior' name='level' /> Junior
                          </label>
                          <label>
                            <input type='radio' value='Master' name='level' /> Master
                          </label>
                          <label>
                            <input type='radio' value='Leader' name='level' /> Leader
                          </label>
                          <label>
                            <input type='radio' value='Senior' name='level' /> Senior
                          </label>
                      </label>


                </fieldset>
                <div className='sv-row sv-padd-25'>
                  <div className='sv-column sv-text-center'>
                    <button className='sv-button link link-danger'>Cancel</button>
                  </div>
                  <div className='sv-column sv-text-center'>
                    <button className='sv-button primary'><i className='fa fa-floppy-o fa-fw' /> Save</button>
                  </div>
                </div>
              </form>
            </div>
            <div className='sv-column _20'></div>
          </div>
        </section>
      </div>

      <div className='sv-vertical-marged-25'/>

      <h5>Message Box</h5>

      <div className='browser-mockup sv-padd-25'>

        <div className='sv-messagebox info'>
          <button className='sv-messagebox__close'>&times;</button>
          <header>
            <h6>Info Message</h6>
          </header>
          <main>
            <p>Message to show</p>
          </main>
        </div>

        <div className='sv-messagebox success'>
          <button className='sv-messagebox__close'>&times;</button>
          <header>
            <h6>Success Message</h6>
          </header>
          <main>
            <p>Message to show</p>
          </main>
        </div>

        <div className='sv-messagebox warning'>
          <button className='sv-messagebox__close'>&times;</button>
          <header>
            <h6>Warning Message</h6>
          </header>
          <main>
            <p>Message to show</p>
          </main>
        </div>

        <div className='sv-messagebox error'>
          <button className='sv-messagebox__close'>&times;</button>
          <header>
            <h6>Error Message</h6>
          </header>
          <main>
            <p>Message to show</p>
          </main>
        </div>
      </div>

      <ShowCode>
        <PrismCode className='language-html'>
          {require('!raw-loader!./messages.html')}
        </PrismCode>
      </ShowCode>

      <h5>Info Card</h5>
      <div className='sv-row'>
        <div className='sv-column'></div>
        <div className='sv-column sv-bg-color--gray-50 sv-padd-25'>
          <div className='sv-card sv-padd-15'>
            <p className='bold sv-text-left'>
              <img src='http://placehold.it/50/ff3300/ffffff' className='sv-right-marged-15' />
              John Doe
            </p>
            <p className='small sv-no-margins'>
              Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá, depois divoltis porris,
               paradis. Paisis, filhis, espiritis santis.
            </p>
            <hr className='sv-line sv-bd-color--gray-300' />
          </div>
        </div>
        <div className='sv-column'></div>
      </div>




    </div>
  )
};

PatternsPage.displayName = 'PatternsPage';

export default PatternsPage;
