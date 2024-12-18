import { useState } from "react";
import React from "react";
import Draggable from "react-draggable";
const Test = () => {
  const [editableMode, setEditableMode] = useState(false);
  const [val, setVal] = useState("Double click");

  return (
    <Draggable>
      {editableMode ? (
        <input
          onDoubleClick={(e) => setEditableMode(false)}
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <h1 onDoubleClick={(e) => setEditableMode(true)}>{val}</h1>
      )}
    </Draggable>
  );
};
export default Test;
