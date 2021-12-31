import React from "react";
import { useFormik } from "formik";
import {
  Form,
  Button,
  Grid,
  Header,
  Segment,
  Message,
} from "semantic-ui-react";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log("Form data", values);
};

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};
function FormPage() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  console.log(formik.values);
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large" onSubmit={formik.handleSubmit}>
          <Segment stacked inline>
            <Form.Input
              fluid
              icon="user"
              name="name"
              iconPosition="left"
              placeholder="Username"
              onChange={formik.handleChange}
              onBlur={formik.values.name}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}

            <Form.Input
              fluid
              icon="envelope"
              name="email"
              iconPosition="left"
              placeholder="E-mail address"
              onChange={formik.handleChange}
              onBlur={formik.values.email}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}

            <Form.Input
              fluid
              icon="lock"
              name="password"
              iconPosition="left"
              placeholder="Password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.values.password}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}

            <Button color="teal" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="#">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}

export default FormPage;
