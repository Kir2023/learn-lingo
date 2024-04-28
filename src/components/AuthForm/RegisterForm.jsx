import { Formik } from "formik";
import {
  Description,
  ErrorMessage,
  Form,
  FormWrapper,
  Input,
  Title,
  Button,
  InputWrapper,
  PasswordVisibility,
  PasswordWrapper,
} from "./AuthForm.styled";

export const Register = () => {
  return (
    <FormWrapper>
      <Title>Registration</Title>
      <Description>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Description>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          handleBlur,
          handleChange,
          values,
        }) => (
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              {errors.name && touched.name ? (
                <ErrorMessage>* {errors.name}</ErrorMessage>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email ? (
                <ErrorMessage>* {errors.email}</ErrorMessage>
              ) : null}
            </InputWrapper>
            <InputWrapper>
              <PasswordWrapper>
                <Input
                  name="password"
                  placeholder="Password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                />
                <PasswordVisibility type="button"></PasswordVisibility>
              </PasswordWrapper>
              {errors.password && touched.password ? (
                <ErrorMessage>* {errors.password}</ErrorMessage>
              ) : null}
            </InputWrapper>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
