import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App' ;

// _________________________________________

import { Provider } from 'react-redux' ;
import { createStore , applyMiddleware , compose } from 'redux' ;
import thunk  from 'redux-thunk' ;

import rootReducer from './reducers/root' ;

const store = createStore(
  // carReducer , 
  // exteriorReducer ,
  rootReducer ,
  compose(
    applyMiddleware(thunk),
  )
)

// ____________________________________________
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider> ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
