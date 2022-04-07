import { combineReducers } from 'redux';

import { allRoomsReducer, roomDetailsReducer } from './reducers/roomReducers';
import { authReducer, loadedUserReducer } from './reducers/userReducers';

const reducers = combineReducers({
  allRooms: allRoomsReducer,
  roomDetails: roomDetailsReducer,
  auth: authReducer,
  loadedUser: loadedUserReducer,
});

export default reducers;
