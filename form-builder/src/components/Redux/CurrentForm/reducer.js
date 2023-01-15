import { ADD_FIELD, REMOVE_FIELD, SELECT_FIELD, UPDATE_FIELD } from "./action";

const initState = {
  formName: "",
  fields: [],
  curFieldName: "",
  curFieldElement: "",
  curFieldType: "",
  curFieldOptions: [],
};

export const currentFormReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_FIELD:
      state = {
        formName: payload?.formName,
        fields: [...state.fields, payload?.curField],
        curFieldName: "",
        curFieldElement: "",
        curFieldType: "",
        curFieldOptions: [],
      };
      break;
    case REMOVE_FIELD:
      state = {
        ...state,
        fields: state.fields.filter(
          (ele) => ele?.fieldName !== payload.fieldName
        ),
      };
      return state;
      break;
    case SELECT_FIELD:
      state = {
        ...state,
        curFieldName: payload?.fieldName,
        curFieldElement: payload?.fieldElement,
        curFieldType: payload?.fieldType,
        curFieldOptions: payload?.fieldOptions,
      };
      return state;
      break;
    case UPDATE_FIELD:
      state = {
        ...state,
        fields: state.fields.map((ele) =>
          ele?.fieldName === payload?.fieldName ? { ...payload } : ele
        ),
      };
      return state;
      break;
    default:
      return state;
      break;
  }
};
