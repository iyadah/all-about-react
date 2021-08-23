import { GET_COMMENTS, COMMENT_ERROR } from "../actions/types";

const initialState = {
  comment: null,
  comments: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload,
        loading: false,
      };

    case COMMENT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
