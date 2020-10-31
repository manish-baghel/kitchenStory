import React from "react";
import {connect} from "react-redux";
import Event from "./Event";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EventCatalog = (props) => {
  const searchKeyword = props.searchKeyword;
  const events = props.allEvents;
  return (
    <>
      <Container>
        <Row>
      {events &&
        events
          .filter((e) => e.region.toLowerCase().includes(searchKeyword))
          .map((event, idx) => {
            return (
              <Col md="4" key={idx} className="my-2">
              <Event
                key={idx}
                title={event.title}
                id={event.id}
                description={event.description}
                capacity={event.capacity}
                region={event.region}
                imgUrl={event.imgUrl}
              />
            </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

function mapStateToProps(state) {
  return {
    searchKeyword: state.searchReducer.searchKeyword,
    allEvents: state.eventReducer.allEvents,
  };
}


export default connect(mapStateToProps, null)(EventCatalog);
