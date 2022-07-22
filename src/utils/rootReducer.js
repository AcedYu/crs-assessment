import { UPDATE_CONTACTS, REMOVE_CONTACT, ADD_CONTACT } from "./actions.js";

const initState = {
  contacts: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_CONTACTS:
      return {
        ...state,
        contacts: [...action.contacts]
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.contact, ...state.contacts]
      };
    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact._id !== action._id;
        })
      };
    default:
      return state;
  }
};

export default rootReducer;
