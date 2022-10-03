import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, sortingTodo } from "../../store/actions/creators/todo";

import styles from "./index.module.css";

export const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const onInputChange = (evt) => {
    setValue(evt.target.value);
  };

  const handleAddTodo = () => {
    dispatch(addTodo(value));
    setValue("");
  };
  const sorting = () => {
    dispatch(sortingTodo());
    
  };

  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
      <button className={styles.addButton} onClick={handleAddTodo}>
        Add todo
      </button>
      <button onClick={sorting}>漏 сортировка</button>
    </div>
  );
};
