let reduxState = {
  post: 0,
  name: "Nagender kumar",
  age: 26,
};

function reducer(state, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  }
  return state;
}

// What Redux will Do

console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/decrement" });
console.log(reduxState);
reduxState = reducer(reduxState, { type: "post/increment" });
console.log(reduxState);
