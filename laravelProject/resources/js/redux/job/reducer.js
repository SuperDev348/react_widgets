// import clone from 'clone';
import actions from "./actions";
const initState = {
  jobs: [],
  job: {},
  isDelete: false,
};

export default function cardReducer(state = initState, { type, ...action }) {
  switch (type) {
    case actions.ADD_SUCCESS:
      return {
        ...state,
        jobs: [],
      };
    case actions.ADD_FAILED:
      return {
        ...state,
        jobs: [],
      };
    case actions.GET_JOB_REDUCER: {
    
      return {
        ...state,
        jobs: action.jobs,
        isDelete: false,
      };
    }
    case actions.GET_JOB_BYID_REDUCER: {
      return {
        ...state,
        job: action.job,
        isDelete: false,
      };
    }
    case actions.UPDATE_SUCCESS:
      return {
        ...state,
        jobs: [],
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
        jobs:[],
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
