const ADD_FIELD = "ADD_FIELD";
const REMOVE_FIELD = "REMOVE_FIELD";
const SELECT_FIELD = "SELECT_FIELD";
const UPDATE_FIELD = "UPDATE_FIELD";

const addField = (payload) => ({ type: ADD_FIELD, payload: payload });
const removeField = (payload) => ({ type: REMOVE_FIELD, payload: payload });
const selectField = (payload) => ({ type: SELECT_FIELD, payload: payload });
const updateField = (payload) => ({ type: UPDATE_FIELD, payload: payload });

export { ADD_FIELD, REMOVE_FIELD, SELECT_FIELD, UPDATE_FIELD };
export { addField, removeField, selectField, updateField };
