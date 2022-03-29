import axios from "axios";

export const loadUsers = () => async (dispatch, getData) => {
  const res = await axios.get("http://localhost:3001/user");
  return dispatch({
    type: "GET_USERS",
    payload: res.data,
  });
};

export const deleteUsers = (id) => async (dispatch, getData) => {
  await axios.delete(`http://localhost:3001/user/${id}`);
  return (
    dispatch({
      type: "DELETE_USER",
    }),
    dispatch(loadUsers())
  );
};

export const addUsers = (user) => async (dispatch, getData) => {
  const res = await axios.post(`http://localhost:3001/user`, user);
  return dispatch({
    type: "ADD_USER",
    payload: res.data,
  });
};

export const getUser = (id) => async (dispatch, getData) => {
  const res = await axios.get(`http://localhost:3001/user/${id}`);
  return dispatch({
    type: "GET_USER",
    payload: res.data,
  });
};

export const updateUser = (id, user) => async (dispatch, getData) => {
  const res = await axios.put(`http://localhost:3001/user/${id}`, user);
  return dispatch({
    type: "UPDATE_USER",
    payload: res.data,
  });
};
