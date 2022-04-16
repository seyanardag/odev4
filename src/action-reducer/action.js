import axios from "axios";
export const LIST_USERS = "LIST_USERS";

export function canditates(users) {
  return { type: LIST_USERS, payload: users };
}

export function getUsers() {
  return async (dispatch) => {
    axios
      .get("https://restapi-assignment4.herokuapp.com/")
      .then((res) => res.data)
      .then((res) => dispatch(canditates(res)))
      .catch((err) => console.log("HATA:", err));
  };
}
