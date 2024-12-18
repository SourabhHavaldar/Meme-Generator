import React from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { useState, createRef } from "react";
import Test from "./Text";

import { exportComponentAsJPEG } from "react-component-export-image";

const Edit = () => {
  const memeref = createRef();
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  };
  return (
    <div className="meme mt-5 mb-5">
      <div ref={memeref} style={{ width: "700px", border: "1px solid" }}>
        <img src={params.get(`url`)} width="300px" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Test />
          ))}
      </div>
      <Button onClick={addText}>Add Text</Button>
      <Button
        variant="success"
        onClick={(e) => {
          exportComponentAsJPEG(memeref);
        }}
      >
        Save
      </Button>
    </div>
  );
};
export default Edit;
