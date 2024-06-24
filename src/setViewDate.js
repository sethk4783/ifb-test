const initialState = {};

export default function setViewDateReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_DATE": {
      return { date: action.payload };
    }
    case "VIEW_DATE": {
      return state;
    }
    default:
      return state;
  }
}
