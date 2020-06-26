// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import currencyReducer from './currency.reducer';
import appReducer from './app.reducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  currencyReducer,
  appReducer,
});
// Exports
export default rootReducer;
