import React from "react";
import {connect} from "react-redux";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import {searchActions} from "../actions/searchActions";
import Container from "react-bootstrap/Container";

const SearchBar = (props) => {
  const handleChange = (e) => {
    props.changeSearchKeyword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Container className="my-2 mb-4">
        <Form onSubmit={handleSubmit}>
          <FormControl
            type="text"
            value={props.searchKeyword}
            placeholder="Search by Availaibility Zone/Region eg: Delhi"
            onChange={handleChange}></FormControl>
        </Form>
      </Container>
    </>
  );
};

function mapStateToProps(state) {
  return {
    searchKeyword: state.searchKeyword,
  };
}

const actionCreators = {
  changeSearchKeyword: searchActions.changeSearchKeyword,
};

export default connect(mapStateToProps, actionCreators)(SearchBar);
