// import { createStore, applyMiddleware, compose } from 'redux';
// import reducer from '../reducer';
// import thunk from 'redux-thunk';

// const store = createStore(
//   reducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

// export default store;

import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../reducer';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;
