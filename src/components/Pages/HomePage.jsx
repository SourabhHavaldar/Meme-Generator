import { useEffect, useState } from "react";
import React from "react";
import MemeCards from "../MemeCards";

import { getAllMemes } from "../../api/meme";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) => setData(memes.data.memes));
  }, []);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {data.map((el) => (
        <MemeCards img={el.url} title={el.name} />
      ))}
    </div>
  );
};
export default HomePage;
