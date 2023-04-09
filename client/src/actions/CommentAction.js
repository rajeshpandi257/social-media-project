import * as UserApi from "../api/CommentRequest.js";

export const commentUser = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPDATING_START" });
  try {
    const { data } = await UserApi.commentUser(id, formData);
    console.log("Action ko receive hoa hy ye : ", data);
    dispatch({ type: "UPDATING_SUCCESS", data: data });
  } catch (error) {
    dispatch({ type: "UPDATING_FAIL" });
  }
};
