import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  GET_CONTACT,
} from './types';
import Axios from 'axios';

const getContacts = () => async dispatch => {
  const res = await Axios.get('https://jsonplaceholder.typicode.com/users');

  dispatch({ type: GET_CONTACTS, payload: res.data });
};

const addContact = payload => {
  return async dispatch => {
    const res = await Axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      payload
    );

    dispatch({
      type: ADD_CONTACT,
      payload: res.data,
    });
  };
};

const deleteContact = payload => {
  return async dispatch => {
    await Axios.delete(`https://jsonplaceholder.typicode.com/users/${payload}`);

    dispatch({
      type: DELETE_CONTACT,
      payload,
    });
  };
};

const updateContact = (id, updContact) => {
  return dispatch => {
    Axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      updContact
    ).then(res => {
      dispatch({
        type: UPDATE_CONTACT,
        payload: res.data,
      });
    });
  };
};

const getContact = id => {
  return dispatch => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => {
      dispatch({
        type: GET_CONTACT,
        payload: res.data,
      });
    });
  };
};

export { getContacts, addContact, deleteContact, updateContact, getContact };
