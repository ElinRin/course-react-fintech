import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

import subscribeFirebase from '../middleware/subscribeFirebase';
import updateFirebase from '../middleware/updateFirebase';

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(subscribeFirebase, updateFirebase,thunk))
);

export default store;
