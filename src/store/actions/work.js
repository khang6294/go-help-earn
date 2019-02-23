import * as actionTypes from './actionTypes'
import { toastr } from 'react-redux-toastr'
import {getFirestore} from 'redux-firestore'
import moment from 'moment';
import firebase from '../../firebaseConfig';

export const createWork = (work) => {
    return (dispatch,getState) => {
        const firestore = getFirestore();
        const user = getState().firebase.auth
        const photoURL = getState().firebase.profile.photoURL;
        work.date = moment(work.date).toDate();
        let newWork = {
            ...work,
            creatorUid: user.uid,
            createdBy: user.displayName,
            creatorPhotoURL: photoURL || '/assets/user.png',
            created: Date.now(),
        }
        firestore.add(`works`, newWork)
            .then(() => toastr.success('Success', 'New work created'))
            .catch(() => {
                toastr.error('Oops', 'Something went wrong')
            })
    };
}

export const updateWork = (work) => {
    return (dispatch,getState) => {
        const firestore = getFirestore();
        work.date = moment(work.date).toDate();
        firestore.update(`works/${work.id}`, work)
            .then(() => toastr.success('Success', 'Event has been updated'))
            .catch(() => {
                toastr.error('Oops', 'Something went wrong')
        })
    };
}

export const deleteWork = (work) => {
    return {
        type: actionTypes.DELETE_WORK,
        payload: work
    }
}

export const getWorksForDashboard = () => async (dispatch, getState) => {
    let today = Math.floor(new Date(Date.now()).getTime() / 1000);
    const firestore = firebase.firestore();
    const worksRef = firestore.collection('works');
    const worksQuery = worksRef.where('created', '>=', today).orderBy('created','desc')
    try {  
        let querySnap = await worksQuery.get()
        let works = [];
    
        for (let i = 0; i < querySnap.docs.length; i++) {
            let work = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
            works.push(work);
        }
        dispatch({ type: actionTypes.FETCH_WORK, payload: { works } });
        return querySnap;
    } catch (error) {
        console.log(error);
    }
};