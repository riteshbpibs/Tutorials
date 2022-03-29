const initialState = {
  posts: [
    { id: 1, title: "Post 1", isActive: true },
    { id: 2, title: "Post 2", isActive: true },
    { id: 3, title: "Post 3", isActive: false },
    { id: 4, title: "Post 4", isActive: false },
  ],
  filter: "SHOW_ACTIVE",
  count: 0,
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
};
