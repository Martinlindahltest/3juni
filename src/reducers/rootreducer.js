import projektReducer from './projektReducer'
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'
//import { firestore } from 'firebase';

//console.log('vad är firestore', firestore)


const rootReducer = combineReducers({
    project: projektReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer


})
export default rootReducer