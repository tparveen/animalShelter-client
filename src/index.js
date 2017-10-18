import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//add redux and thunk middleware
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

//add cheeList 
import AdoptionList from './components/Adoption-list';

//add reducers
import petsReducer from './reducers/petsReducer';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

//add store
const store = createStore(petsReducer,applyMiddleware(thunk));

ReactDOM.render(
    (<Provider store={store}>
        <AdoptionList />
     </Provider>), 
    document.getElementById('root'));


    //be sure to install redux, react-redux  - 
    //npm install --save react-redux
    //npm install --save redux 
    //npm install --save redux-thunk
    