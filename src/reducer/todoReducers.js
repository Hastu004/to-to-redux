import { useState } from "react";

const initialData = {
  list: [],
};

//const [list, setList] = useState([]);
const todoReducers = (state = initialData, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const { id, data } = action.payload;
      if (!data) {
        alert("Please write a task");
        return;
      }
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "DELETE_TASK":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    case "DELETE_ALL":
      const emptyList = [];

      return {
        ...state,
        list: emptyList,
      };

    default:
      return state;
  }
};

export default todoReducers;
