import { GET_COMMENTS, COMMENT_ERROR } from "./types";
import axios from "axios";

// Get all comments
export const getComments = () => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:5000/api/comments");
    dispatch({
      type: GET_COMMENTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COMMENT_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
