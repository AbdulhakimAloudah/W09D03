const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_ALL_TASKS":
      return payload;

    case "ADD_NEW_TASK":
      const tasks = [...state.tasks, payload];
      return { tasks };

    default:
      return state;
  }
};

export default tasksReducer;

export const getAllTasks = (data) => {
  return {
    type: "GET_ALL_TASKS",
    payload: { tasks: data },
  };
};

export const addNewTasks = (data) => {
  return {
    type: "ADD_NEW_TASK",
    payload: data,
  };
};
