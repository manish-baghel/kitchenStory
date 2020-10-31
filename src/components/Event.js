import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Event = (props) => {
  const handleDelete = (e) => {
    props.deleteEvent(props.id);
  }
  return (
    <>
      <Card style={{width: "18rem"}}>
        <Card.Img variant="top" src={props.imgUrl} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>Qty.: {props.capacity}</Card.Text>
          <Card.Text>{props.region}</Card.Text>
          {props.deleteButton && (
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default Event;
