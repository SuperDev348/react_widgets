const actions = {
  GET_HOST: "GET_HOST",
  ADD_HOST: "ADD_HOST",
  ADD_SUCCESS: "ADD_SUCCESS",
  ADD_FAILED: "ADD_FAILED",
  GET_HOST_REDUCER: "GET_HOST_REDUCER",
  GET_HOST_BYID: "GET_HOST_BYID",
  GET_HOST_BYID_REDUCER: "GET_HOST_BYID_REDUCER",
  UPDATE_DATA: "UPDATE_DATA",
  UPDATE_SUCCESS:'UPDATE_SUCCESS',
  DELETE_DATA:'DELETE_DATA',
  DELETE_SUCCESS:'DELETE_SUCCESS',
  DELETE_FAILED:'DELETE_FAILED',
  CREATE_NUMBER:'CREATE_NUMBER',
  CREATE_NUMBER_SUCCESS:'CREATE_NUMBER_SUCCESS',
  GET_HOST_BY_FILTER:"GET_HOST_BY_FILTER",
  initHost: () => ({ type: actions.GET_HOST }),
  addHost: (sendData) => {
    return (dispatch, getState) => {
      dispatch({ type: actions.ADD_HOST, payload: { sendData: sendData } });
    };
  },
  getHostById: (hostId) => {
    return (dispatch) => {
      dispatch({ type: actions.GET_HOST_BYID, payload: { hostId: hostId } });
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
  getHostByFilter: (filterIds) => {
    return (dispatch) => {
      dispatch({ type: actions.GET_HOST_BY_FILTER, payload: { filterIds: filterIds } });
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
