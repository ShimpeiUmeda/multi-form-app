import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MultiForm from './MultiForm';
import registerServiceWorker from './registerServiceWorker';

const style = {
  textAlign: 'center',
  padding: '30px'
}

ReactDOM.render(
  <div style={style} >
    <MultiForm />
  </div>,
  document.getElementById('root'));
registerServiceWorker();
