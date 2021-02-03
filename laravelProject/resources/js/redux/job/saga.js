import { all, takeEvery, put,call } from 'redux-saga/effects';
import axios from 'axios'
// import { getToken } from '@iso/lib/helpers/utility';
import siteConfig from '../../config/site.config';
// import notification from '@iso/components/Notification';
import actions from './actions';


const onCallReqeust = async (URI) =>
  await axios
  .get(URI)  
    .then(res => res)
    .catch(error => error);
const onPostCallReqeust = async (sendData,URI) =>
  await axios
  .post(URI,sendData)  
    .then(res => res)
    .catch(error => error);
const onPutCallReqeust = async (sendData,URI) =>
    await axios
    .put(URI,sendData)  
      .then(res => res)
      .catch(error => error);    
 const onDeleteCallReqeust = async (URI) =>
      await axios
      .delete(URI)  
        .then(res => res)
        .catch(error => error);  
export function* getJobs() {
  // axios.defaults.headers.get['Authorization'] = localStorage.getItem('id_token');
  try {
    const callResult = yield call(
      onCallReqeust,
      `${siteConfig.apiUrl}/job`             
    );
     
    if(callResult.response!=undefined){
      // notification('error',callResult.response.data.msg);
    }
    else{
      var temp=[];    
      callResult.data.data.map((value, index) => {          
           value.key=parseInt(index)+1;
           temp.push(value);
       });     
      
       yield put({
         type: actions.GET_JOB_REDUCER,
         jobs: temp,//createDemoData(),
       });
    }  
   
  }
  catch (error) {
    // notification('error',"Internal server error!")
  }  
}
export function* getJobById({payload}) {
  // axios.defaults.headers.get['Authorization'] = localStorage.getItem('id_token');
  try {
    const callResult = yield call(
      onCallReqeust,
      `${siteConfig.apiUrl}/job/${payload.id}`             
    );   
 
    if(callResult.response!=undefined){
      // notification('error',callResult.response.data.msg)     
    }
    else{      
     
        yield put({
        type: actions.GET_JOB_BYID_REDUCER,
        job:callResult.data.data,
        msg:null
      });
    }    
  }
  catch (error) {    
    // notification('error',"Internal server error!")
  }  
}
export function* addJob({payload}) { 
  // axios.defaults.headers.post['Authorization'] = localStorage.getItem('id_token');
  try {
    const callResult = yield call(
      onPostCallReqeust,
      payload.sendData,
      `${siteConfig.apiUrl}/job`          
    );

    if(callResult.response!=undefined){
      // notification('error',callResult.response.data.msg)     
    }
    else{
        // notification('success',callResult.data.msg)
        yield put({
          type: actions.ADD_SUCCESS,
          msg:callResult.data.msg,
        });
    }
  }
  catch (error) {  
 
    yield put({ type: actions.ADD_FAILED ,msg: "Server Internal error!"});
  }  
}
export function* updateJobData({payload}) { 
  // axios.defaults.headers.put['Authorization'] =  localStorage.getItem('id_token');
  try {
    const callResult = yield call(
      onPutCallReqeust,
      payload.sendData,
      `${siteConfig.apiUrl}/job/${payload.id}`          
    );
  
    if(callResult.response!=undefined){
      // notification('error',callResult.response.data.msg)     
    }
    else{
    //  notification('success',callResult.data.msg)
      yield put({
        type: actions.UPDATE_SUCCESS      
      });
    }  
  }
  catch (error) {  
    // notification('success',"Server Internal error!")   
  }  
}

export function* deleteJob({payload}) { 
  // axios.defaults.headers.delete['Authorization'] =localStorage.getItem('id_token');
  try {
    const callResult = yield call(
      onDeleteCallReqeust,     
      `${siteConfig.apiUrl}/job/${payload.id}`          
    );
    if(callResult.response!=undefined){
      // notification('error',callResult.response.data.msg)     
    }
    else{
      // notification('success',callResult.data.msg)
      yield put({
        type: actions.GET_JOB,       
      });
    }     

  }
  catch (error) {     
    // notification('error',"Server Internal error!")      
  }  
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(actions.GET_JOB,   getJobs),
    yield takeEvery(actions.ADD_JOB, addJob),
    yield takeEvery(actions.GET_JOB_BYID, getJobById),
    yield takeEvery(actions.UPDATE_DATA, updateJobData),
    yield takeEvery(actions.DELETE_DATA, deleteJob), 
    
  ]);
}
