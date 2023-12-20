import { combineReducers } from 'redux';
import questionsReducer from './questions';


const rootReducer = combineReducers({
  quiz: questionsReducer
});

export default rootReducer;