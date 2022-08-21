const incrementE1 = document.getElementById("increment");
const decrementE2 = document.getElementById("decrement");
const counterE3 = document.getElementById("counter");

//initialstate

const initialstate = [
  {
    id: 1,
    value: 1,
  },
  {
    id: 2,
    value: 2,
  },
  {
    id: 3,
    value: 3,
  },
];

// create reducer

const reducer = (state = initialstate, action) => {
  if (action.type === "increment") {
    state.map((singelstate) => {
      if (singelstate.id === action.id) {
        return {
          ...state,
          value: singelstate.value + action.payload,
        };
      }
    });
  } else if (action.type === "decrement") {
    console.log("hello i am decrement");
  } else {
    return state;
  }
};

// create store

const store = Redux.createStore(reducer);

// creating render

const render = () => {
  const updatetdState = store.getState();
  console.log(updatetdState);
};

// create store subscription

store.subscribe(render);

// create eventlistner

incrementE1.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
    payload: 5,
    id: 1,
  });
});

decrementE2.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
    payload: 5,
    id: 1,
  });
});
