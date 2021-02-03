// import clone from 'clone';
import actions from "./actions";
const initState = {
  hosts: [],
  host: {},
  isDelete: false,
};

export default function cardReducer(state = initState, { type, ...action }) {
  switch (type) {
    case actions.ADD_SUCCESS:
      return {
        ...state,
        hosts: [],
      };
    case actions.ADD_FAILED:
      return {
        ...state,
        hosts: [],
      };
    case actions.GET_HOST_REDUCER: {
    
      return {
        ...state,
        hosts: action.hosts,
        isDelete: false,
      };
    }
    case actions.GET_HOST_BYID_REDUCER: {
      return {
        ...state,
        host: action.host,
        isDelete: false,
      };
    }
    case actions.UPDATE_SUCCESS:
      return {
        ...state,
        hosts: [],
        isDelete: false,
      };
    case actions.DELETE_FAILED:
      return {
        ...state,
        isDelete: false,
      };
    case actions.DELETE_SUCCESS:
      return {
        ...state,
        hosts:[],
        isDelete: true,
      };
      // case actions.CREATE_NUMBER_SUCCESS:
      // return {
      //   ...state,
      //   assetNumber: action.assetNumber,
      // };
    default:
      return state;
  }
}
