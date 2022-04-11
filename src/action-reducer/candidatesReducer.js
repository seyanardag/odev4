import { LIST_USERS } from "./action";

export const canditates = (state = [], { type, payload }) => {
  switch (type) {
    case LIST_USERS:
      console.log(state, type, payload);
      return payload;
    default:
      return state;
  }
};
