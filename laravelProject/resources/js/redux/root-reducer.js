import { combineReducers } from 'redux';
import Job from './job/reducer';
import Host from './host/reducer';

export default combineReducers({
  Job,
  Host
});
