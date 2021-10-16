import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const { useEffect } = React;

const loader = document.querySelector('.loader');

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove('loader--hide');

const hideLoader = () => loader.classList.add('loader--hide');

  ReactDOM.render(
    <>
    
      <App 
        hideLoader={hideLoader}
        showLoader={showLoader} 
      />
      </>,
    document.getElementById('root')
  )
