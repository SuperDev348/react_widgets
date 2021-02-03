const actions = {
  GET_JOB: "GET_JOB",
  ADD_JOB: "ADD_JOB",
  ADD_SUCCESS: "ADD_SUCCESS",
  ADD_FAILED: "ADD_FAILED",
  GET_JOB_REDUCER: "GET_JOB_REDUCER",
  GET_JOB_BYID: "GET_JOB_BYID",
  GET_JOB_BYID_REDUCER: "GET_JOB_BYID_REDUCER",
  UPDATE_DATA: "UPDATE_DATA",
  UPDATE_SUCCESS:'UPDATE_SUCCESS',
  DELETE_DATA:'DELETE_DATA',
  DELETE_SUCCESS:'DELETE_SUCCESS',
  DELETE_FAILED:'DELETE_FAILED',
  CREATE_NUMBER:'CREATE_NUMBER',
  CREATE_NUMBER_SUCCESS:'CREATE_NUMBER_SUCCESS',
  GET_JOB_BY_FILTER:"GET_JOB_BY_FILTER",
  initJob: () => ({ type: actions.GET_JOB }),
  addJob: (sendData) => {
    return (dispatch, getState) => {
      dispatch({ type: actions.ADD_JOB, payload: { sendData: sendData } });
    };
  },
  getJobById: (jobId) => {
    return (dispatch) => {
      dispatch({ type: actions.GET_JOB_BYID, payload: { jobId: jobId } });
    };
  },
  deleteData: (selected) => {
    return (dispatch) => {
      dispatch({
        type: actions.DELETE_DATA,
        payload: {id:selected}
      });
    };
  },
  getJobByFilter: (filterIds) => {
    return (dispatch) => {
      dispatch({ type: actions.GET_JOB_BY_FILTER, payload: { filterIds: filterIds } });
    };
  },
  updateData: (sendData, id) => {
    return (dispatch) => {
      dispatch({
        type: actions.UPDATE_DATA,
        payload: { sendData: sendData, id: id },
      });
    };
  },
  // createNumber: () => {
  //   return (dispatch, getState) => {    
  //     dispatch({ type: actions.CREATE_NUMBER, payload: { userId: localStorage.getItem('user_id') } });
  //   };
  // },
};
export default actions;
