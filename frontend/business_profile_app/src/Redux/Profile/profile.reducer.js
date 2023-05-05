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

const initialState = {
  loading: false,
  error: false,
  profiles: [],
};

const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_PROFILE_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case GET_PROFILE_SUCCESS: {
      return { ...state, loading: false, error: false, profiles: payload.data };
    }
    case GET_PROFILE_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case CREATE_PROFILE_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case CREATE_PROFILE_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case CREATE_PROFILE_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case UPDATE_PROFILE_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case UPDATE_PROFILE_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case UPDATE_PROFILE_ERROR: {
      return { ...state, loading: false, error: true };
    }
    case DELETE_PROFILE_LOADING: {
      return { ...state, loading: true, error: false };
    }
    case DELETE_PROFILE_SUCCESS: {
      return { ...state, loading: false, error: false };
    }
    case DELETE_PROFILE_ERROR: {
      return { ...state, loading: false, error: true };
    }

    default: {
      return initialState;
    }
  }
};

export default profileReducer;
