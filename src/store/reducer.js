import * as types from "./types";
const initialState = {
  shortLinks: []
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_LINK: {
      return { ...state, shortLinks: [...state.shortLinks, action.payload] };
    }
    default: {
      return state;
    }
  }
};
