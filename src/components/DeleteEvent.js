import React from "react";
import {connect} from "react-redux";
import Event from "./Event";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {eventActions} from "../actions/eventActions";
import AppNavbar from "./Navbar";
import SearchBar from "./SearchBar";

const DeleteEvent = (props) => {
  const searchKeyword = props.searchKeyword;
  const events = props.allEvents;
  return (
    <>
      <AppNavbar />
      <SearchBar />
      <Container>
        <Row>
      {events &&
        events
          .filter((e) => e.region.toLowerCase().includes(searchKeyword))
          .map((event, idx) => {
            return (
              <Col md="4" className="my-2" key={idx}>
              <Event
                key={event.id}
                title={event.title}
                id={event.id}
                description={event.description}
                capacity={event.capacity}
                region={event.region}
                imgUrl={event.imgUrl}
                deleteButton="true"
                deleteEvent={props.deleteEvent}
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

const actionCreators = {
  deleteEvent: eventActions.deleteEvent
}
export default connect(mapStateToProps, actionCreators)(DeleteEvent);
