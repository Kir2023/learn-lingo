import { Formik } from "formik";
import {
  Description,
  ErrorMessage,
  Form,
  FormWrapper,
  Input,
  Title,
  Button,
  PasswordVisibility,
  InputWrapper,
  PasswordWrapper,
} from "./AuthForm.styled";

export const Login = () => {
  return (
    <FormWrapper>
      <Title>Log In</Title>
      <Description>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a teacher.
      </Description>
      <Formik
        initialValues={{
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
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </FormWrapper>
  );
};
