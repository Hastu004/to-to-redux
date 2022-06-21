export const addTodo = (data) => {
  return {
    type: "ADD_TASK",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TASK",
    id
  };
};

export const deleteAll = () => {
  return {
    type: "DELETE_ALL",
  };
};
