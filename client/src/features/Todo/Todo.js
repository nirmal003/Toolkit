import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, deleteAll, deleteOne } from "./todoSlice";

function Todo() {
  const [listdata, setListdata] = useState("");

  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.list);
  console.log(list);

  const handleAddlist = (e) => {
    dispatch(add(listdata));
    setListdata("");
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={listdata}
          onChange={(e) => setListdata(e.target.value)}
        />
        <button type="submit" onClick={handleAddlist}>
          Add
        </button>
      </div>
      <div>
        {list.length > 0 &&
          list.map((val, i) => (
            <div key={i}>
              <div>{val}</div>
              <button onClick={() => dispatch(deleteOne(i))}>Remove</button>
            </div>
          ))}
      </div>
      <div>
        {list.length > 1 && (
          <button onClick={() => dispatch(deleteAll())}>RemoveAll</button>
        )}
      </div>
    </div>
  );
}

export default Todo;
