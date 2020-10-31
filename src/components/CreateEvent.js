import React from "react";
import {connect} from "react-redux";
import {Formik} from "formik";
import * as yup from "yup";
import AppNavbar from "./Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {eventActions} from "../actions/eventActions";

const CreateEvent = (props) => {
  return (
    <>
      <AppNavbar />
      <Container>
        <EventForm createEvent={props.createEvent} />
      </Container>
    </>
  );
};

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  capacity: yup.number().required(),
  region: yup.string().required(),
  imgUrl: yup.string().required(),
});

const EventForm = (props) => {
  const rn = Math.floor(Math.random() * 1000);
  return (
    <Formik
      validationSchema={schema}
      onSubmit={props.createEvent}
      initialValues={{
        title: "",
        description: "",
        capacity: 0,
        region: "",
        imgUrl: `https://picsum.photos/id/${rn}/200/200`,
      }}>
      {({handleSubmit, handleChange, handleBlur, values, touched, isValid, errors}) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="8" controlId="validationFormik01">
              <Form.Label>Food Item Name</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={handleChange}
                value={values.title}
                isValid={touched.title && !errors.title}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="validationFormik02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="validationFormikCapacity">
              <Form.Label>Qty. Availaible</Form.Label>
              <Form.Control
                type="number"
                placeholder="1000"
                name="capacity"
                value={values.capacity}
                onChange={handleChange}
                isInvalid={!!errors.capacity}
              />
              <Form.Control.Feedback type="invalid">{errors.capacity}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="8" controlId="validationFormik03">
              <Form.Label>Availaibility Zone/region</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="region"
                value={values.region}
                onChange={handleChange}
                isInvalid={!!errors.region}
              />

              <Form.Control.Feedback type="invalid">{errors.region}</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="validationFormik04">
              <Form.Label>Display Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image Url.."
                name="imgUrl"
                value={values.imgUrl}
                onChange={handleChange}
                isInvalid={!!errors.imgUrl}
              />
              <Form.Control.Feedback type="invalid">{errors.imgUrl}</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Create</Button>
        </Form>
      )}
    </Formik>
  );
};

const actionCreators = {
  createEvent: eventActions.createEvent,
};
export default connect(null, actionCreators)(CreateEvent);
