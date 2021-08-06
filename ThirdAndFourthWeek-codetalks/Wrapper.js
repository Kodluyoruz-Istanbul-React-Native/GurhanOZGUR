import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/Router';

//TODO Redux kullanılmadığı için kaldırıldı. Uygulama Router.js'ten başlar.
const Wrapper = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  );
};

export default Wrapper;
