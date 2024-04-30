/* eslint-disable react/prop-types */

import * as Yup from "yup";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { emailRegexp } from "../../helpers/emailRegexp";
import { MaskCustom } from "../../helpers/maskCustom";
import { Formik } from "formik";
import {
  FormTitle,
  Form,
  Button,
  WrapperInput,
  ErrorMessage,
} from "./BookLesson.styled";
import { ERROR_MESSAGES } from "../../helpers/error-messages";
import { useSelector } from "react-redux";

const options = [
  { name: "Career and business", id: "1" },
  { name: "Lesson for kids", id: "2" },
  { name: "Living abroad", id: "3" },
  { name: "Exams and coursework", id: "4" },
  { name: "Culture, travel or hobby", id: "5" },
];

const SignupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, ERROR_MESSAGES.MIN_NAME)
    .max(50, ERROR_MESSAGES.MAX_NAME)
    .required(ERROR_MESSAGES.REQUIRED_NAME),
  email: Yup.string()
    .matches(emailRegexp, ERROR_MESSAGES.INVALID_EMAIL)
    .required(ERROR_MESSAGES.REQUIRED_EMAIL),
  number: Yup.string()
    .min(17, ERROR_MESSAGES.MIN_PHONE)
    .required(ERROR_MESSAGES.REQUIRED_PHONE),
});

export const FormComponent = ({ languages }) => {
  const language = useSelector((state) => state.filter.name);

  const learning = language === "" ? languages.join(", ") : language;

  const handelSubmit = (values) => {
    console.log(values);
  };

  return (
    <FormControl>
      <FormTitle>What is your main reason for learning {learning}?</FormTitle>
      <Formik
        initialValues={{
          email: "",
          fullName: "",
          number: "",
          lesson: options[0].name,
        }}
        validationSchema={SignupSchema}
        onSubmit={handelSubmit}
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
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={values.lesson}
              onChange={handleChange}
              name="radio-buttons-group"
              className="radio_group"
            >
              {options.map(({ name, id }) => (
                <FormControlLabel
                  key={id}
                  value={name}
                  name="lesson"
                  control={
                    <Radio
                      sx={{
                        color: "#12141733",
                        "&.Mui-checked": {
                          color: "var(--button-background-color)",
                        },
                      }}
                    />
                  }
                  label={name}
                />
              ))}
            </RadioGroup>
            <div>
              <WrapperInput>
                <input
                  type="text"
                  name="fullName"
                  onBlur={handleBlur}
                  placeholder="Full Name"
                  value={values.fullName}
                  onChange={handleChange}
                />
                {errors.fullName && touched.fullName ? (
                  <ErrorMessage>* {errors.fullName}</ErrorMessage>
                ) : null}
              </WrapperInput>
              <WrapperInput>
                <input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && touched.email ? (
                  <ErrorMessage>* {errors.email}</ErrorMessage>
                ) : null}
              </WrapperInput>
              <WrapperInput>
                <MaskCustom
                  type="tel"
                  name="number"
                  onBlur={handleBlur}
                  placeholder="Phone number"
                  onChange={handleChange}
                  value={values.number}
                />
                {errors.number && touched.number ? (
                  <ErrorMessage>* {errors.number}</ErrorMessage>
                ) : null}
              </WrapperInput>
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Book
            </Button>
          </Form>
        )}
      </Formik>
    </FormControl>
  );
};
