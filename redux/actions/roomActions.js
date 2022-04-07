import axios from 'axios';
import absoluteUrl from 'next-absolute-url';

import {
  ALL_ROOMS_SUCCESS,
  ALL_ROOMS_FAIL,
  CLEAR_ERROR,
  ROOM_DETAILS_SUCCESS,
  ROOM_DETAILS_FAIL,
} from '../constants/roomConstants';

// GET ALL ROOMS
export const getRooms = (req) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms`);
    dispatch({
      type: ALL_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_ROOMS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// GET ROOM DETAILS
export const getRoomDetails = (req, id) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);
    const { data } = await axios.get(`${origin}/api/rooms/${id}`);
    dispatch({
      type: ROOM_DETAILS_SUCCESS,
      payload: data.room,
    });
  } catch (error) {
    dispatch({
      type: ROOM_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// CLEAR ERROR
export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
