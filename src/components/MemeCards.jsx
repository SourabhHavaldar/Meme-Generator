import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MemeCards = (props) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(18rem, 1fr))",
        gap: "1rem",
      }}
    >
      <Card style={{ width: "18rem", textAlign: "center" }}>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>

          <Button
            onClick={(e) => navigate(`/edit/?url=${props.img}`)}
            variant="primary"
          >
            Edit
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MemeCards;
