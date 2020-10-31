import React from "react";
import {connect} from "react-redux";
import {Formik} from "formik";
import * as yup from "yup";
import AppNavbar from "./Navbar";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {userActions} from "../actions/userActions";

const AdminLogin = (props) => {
  return (
    <>
      <AppNavbar />
      <Container>
        <LoginForm adminLogin={props.adminLogin} />
      </Container>
    </>
  );
};

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const LoginForm = (props) => {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={props.adminLogin}
      initialValues={{
        email: "",
      }}>
      {({handleSubmit, handleChange, handleBlur, values, touched, isValid, errors}) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="8" controlId="validationFormik01">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                isValid={touched.email && !errors.email}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="8" controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.description}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Button type="submit">Login</Button>
        </Form>
      )}
    </Formik>
  );
};

const actionCreators = {
  adminLogin: userActions.login
};
export default connect(null, actionCreators)(AdminLogin);

