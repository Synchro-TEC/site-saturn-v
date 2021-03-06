import React from 'react';

class ShowCode extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    };
  }

  _toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    let containerKlass;
    let cssKlass;
    let labelText;

    if(this.state.visible){
      containerKlass = 'dm-code-container';
      cssKlass = 'block';
      labelText = 'Hide Code';
    } else {
      containerKlass = 'dm-code-contaiter inactive';
      cssKlass = 'none';
      labelText = 'Show Code';
    }

    return (
      <div className={containerKlass}>
        <div style={{display: cssKlass}}>
          <pre className='line-numbers' data-start='1'>
            {this.props.children}
          </pre>
        </div>
        <button className='dm-code-container__button' onClick={() => this._toggle()} type='button'>{labelText}</button>
      </div>
    );
  }

}
ShowCode.displayName = 'ShowCode';

export default ShowCode;