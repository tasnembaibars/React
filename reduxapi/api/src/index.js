import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { counterReducer } from './Reducer';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
const myLogger=store=>next=>action=>{
  console.log("middleware ran");
        return next(action)
}
const second=store=>next=>action=>{
  console.log("secondmiddleware ran");
        return next(action)
}
const capAten=store=>next=>action=>{
 if(store.getState()>=10){
  return next({type:"DECREMENT"})
 }
 next(action);
}
// const myLogger=(store)=>{
//   return next=>{
//     return action=>{
//       console.log("middleware ran");
//       return next(action)
//     }
//   }
// }
const store=createStore(counterReducer,applyMiddleware(myLogger,second,capAten,logger));

ReactDOM.render(
  <Provider store={store}>
    <App/>
    </Provider>
,
document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
