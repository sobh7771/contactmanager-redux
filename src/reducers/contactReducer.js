import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  GET_CONTACT,
} from '../actions/types';

const initialState = {
  contacts: [],
  contact: {},
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_CONTACTS:
      return {
        // immutable
        ...state,
        contacts: payload,
      };

    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };

    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload),
      };

    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts].map(contact => {
          if (contact.id === payload.id) return payload;
          // default
          return contact;
        }),
      };

    case GET_CONTACT:
      console.log(payload);
      return {
        ...state,
        contact: payload,
      };
    default:
      return state;
  }
}
