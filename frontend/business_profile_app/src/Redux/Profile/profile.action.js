import {
  GET_PROFILE_ERROR,
  GET_PROFILE_LOADING,
  GET_PROFILE_SUCCESS,
  CREATE_PROFILE_ERROR,
  CREATE_PROFILE_LOADING,
  CREATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  UPDATE_PROFILE_LOADING,
  UPDATE_PROFILE_SUCCESS,
  DELETE_PROFILE_ERROR,
  DELETE_PROFILE_LOADING,
  DELETE_PROFILE_SUCCESS,
} from "./profile.actionTypes";
import axios from "axios";

export const getProfiles = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE_LOADING });
  try {
    let data = await axios.get(
      `https://spring-bud-codfish-robe.cyclic.app/profile`
    );
    console.log(data);
    dispatch({ type: GET_PROFILE_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_PROFILE_ERROR });
  }
};
export const createProfile = (data) => async (dispatch) => {
  dispatch({ type: CREATE_PROFILE_LOADING });
  try {
    await axios.post(
      `https://spring-bud-codfish-robe.cyclic.app/profile/create`,
      data
    );
    dispatch({ type: CREATE_PROFILE_SUCCESS });
    dispatch(getProfiles());
  } catch (error) {
    dispatch({ type: CREATE_PROFILE_ERROR });
  }
};
export const updateProfile = (id, data) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_LOADING });
  try {
    await axios.patch(
      `https://spring-bud-codfish-robe.cyclic.app/profile/update/${id}`,
      data
    );
    dispatch({ type: UPDATE_PROFILE_SUCCESS });
    dispatch(getProfiles());
  } catch (error) {
    dispatch({ type: UPDATE_PROFILE_ERROR });
  }
};
export const deleteProfile = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PROFILE_LOADING });
  try {
    await axios.delete(
      `https://spring-bud-codfish-robe.cyclic.app/profile/delete/${id}`
    );
    dispatch({ type: DELETE_PROFILE_SUCCESS });
    dispatch(getProfiles());
  } catch (error) {
    dispatch({ type: DELETE_PROFILE_ERROR });
  }
};
