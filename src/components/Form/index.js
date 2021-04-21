import React, { useState } from "react";
import { FormStyle } from "./style";
import Button from "../Button";
import { Formik, Form, ErrorMessage } from "formik";
import {
  gender,
  state,
  qualification,
  info,
  grade,
  experience,
  nysc,
} from "./data";
import { validationSchema } from "./validationSchema";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormDiv() {
  const [active, setActive] = useState(false);
  const handleButtonActive = (state) => {
    setActive(state);
  };

  return (
    <FormStyle>
      <div className="form-header">
        <h1>
          Become a <span className="colorcode">Decadev</span>
        </h1>
        <p>
          Provide your details below and we will follow up in less than 24Hrs.
        </p>
      </div>
      <Formik
        initialValues={{
          bootcamp_location: null,
          bootcamp_name: null,
          course_of_study: "",
          current_location: "",
          degree: "",
          dob: "",
          email: "",
          name: "",
          gender: "",
          hear_about_us: "",
          highest_qualification: "",
          institution: "",
          // last_name: "",
          nysc_status: "",
          phone_number: "",
          programming_experience: "",
          state_of_origin: "",
        }}
        validationSchema={validationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleButtonActive(true);
          axios
            .post(
              "https://dhq-recruitment-staging.herokuapp.com/api/v1/applicant/register",
              {
                bootcamp_location: null,
                bootcamp_name: null,
                ex_bootcamper: null,
                course_of_study: values.course_of_study,
                current_location: values.current_location,
                degree: values.degree,
                dob: values.dob,
                email: values.email,
                first_name: values.name,
                gender: values.gender,
                hear_about_us: values.hear_about_us,
                highest_qualification: values.highest_qualification,
                institution: values.institution,
                last_name: values.name,
                nysc_status: values.nysc_status,
                phone_number: values.phone_number,
                programming_experience: values.programming_experience,
                state_of_origin: values.state_of_origin,
              }
            )
            .then(
              (response) => {
                handleButtonActive(false);
                toast.success(response.data.data.application_message);
                resetForm();
              },
              (error) => {
                handleButtonActive(false);
                toast.error(error);
                resetForm();
              }
            );
        }}
      >
        {(props) => {
          const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
          return (
            <Form className="form-area" onSubmit={handleSubmit} id="form-data">
              <ErrorMessage
                name="name"
                component="p"
                style={{ color: "red", fontSize: "12px" }}
              />

              <ToastContainer autoClose={10000} limit={1} />
              <div className="wrapper">
                <div className="label">
                  <span>Your name is</span>
                </div>

                <input
                  name="name"
                  type="text"
                  placeholder="Enter full name here"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.name && touched.name && "error"}
                />
              </div>
              <div className="error-div">
                <div className="single-error-div">
                  <ErrorMessage
                    name="gender"
                    component="p"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </div>
                <div className="single-error-div">
                  <ErrorMessage
                    name="dob"
                    component="p"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </div>
              </div>

              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>Your gender is</span>
                  </div>

                  <select
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.gender && touched.gender && "error"}
                  >
                    <option>Select a gender</option>
                    {gender.map((gender) => (
                      <option value={gender.value} key={gender.value}>
                        {gender.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>Your date of birth is</span>
                  </div>

                  <input
                    name="dob"
                    type="date"
                    placeholder="Select a date"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.dob && touched.dob && "error"}
                  />
                </div>
              </div>
              <ErrorMessage
                name="phone_number"
                component="p"
                style={{ color: "red", fontSize: "12px" }}
              />
              <div className="wrapper">
                <div className="label">
                  <span>Phone number</span>
                </div>

                <input
                  name="phone_number"
                  type="text"
                  placeholder="Start with +234 or 0"
                  value={values.phone_number}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.phone_number && touched.phone_number && "error"
                  }
                />
              </div>
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: "red", fontSize: "12px" }}
              />
              <div className="wrapper">
                <div className="label">
                  <span>Email address</span>
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Enter email address here"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.email && touched.email && "error"}
                />
              </div>
              <div className="error-div">
                <div className="single-error-div">
                  <ErrorMessage
                    name="state_of_origin"
                    component="p"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </div>
                <div className="single-error-div">
                  <ErrorMessage
                    name="current_location"
                    component="p"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </div>
              </div>
              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>Your state of origin</span>
                  </div>

                  <select
                    name="state_of_origin"
                    value={values.state_of_origin}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.state_of_origin &&
                      touched.state_of_origin &&
                      "error"
                    }
                  >
                    <option>Select state</option>
                    {state.map((state) => (
                      <option value={state.value} key={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>Your current location </span>
                  </div>

                  <select
                    name="current_location"
                    value={values.current_location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.current_location &&
                      touched.current_location &&
                      "error"
                    }
                  >
                    <option>Select location</option>
                    {state.map((state) => (
                      <option value={state.value} key={state.value}>
                        {state.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="error-div">
                <div className="single-error-div">
                  <ErrorMessage
                    name="highest_qualification"
                    component="p"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </div>
                <div className="single-error-div">
                  <ErrorMessage
                    name="institution"
                    component="p"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </div>
              </div>

              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>Highest Qualification </span>
                  </div>

                  <select
                    name="highest_qualification"
                    value={values.highest_qualification}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.highest_qualification &&
                      touched.highest_qualification &&
                      "error"
                    }
                  >
                    <option>Select Qualification</option>
                    {qualification.map((qualification) => (
                      <option
                        value={qualification.value}
                        key={qualification.value}
                      >
                        {qualification.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>Institute</span>
                  </div>

                  <input
                    name="institution"
                    type="text"
                    placeholder="Institute"
                    value={values.institution}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.institution && touched.institution && "error"
                    }
                  />
                </div>
              </div>
              <div className="error-div">
                <div className="single-error-div">
                  <ErrorMessage
                    name="course_of_study"
                    component="p"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </div>
                <div className="single-error-div">
                  <ErrorMessage
                    name="degree"
                    component="p"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </div>
              </div>

              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>Your course of study </span>
                  </div>

                  <input
                    name="course_of_study"
                    type="text"
                    placeholder="Course"
                    value={values.course_of_study}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.course_of_study &&
                      touched.course_of_study &&
                      "error"
                    }
                  />
                </div>
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>Grade achieved</span>
                  </div>

                  <select
                    name="degree"
                    value={values.degree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.degree && touched.degree && "error"}
                  >
                    <option>Select grade</option>
                    {grade.map((grade) => (
                      <option value={grade.value} key={grade.value}>
                        {grade.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="error-div">
                <div className="single-error-div">
                  <ErrorMessage
                    name="programming_experience"
                    component="p"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </div>
                <div className="single-error-div">
                  <ErrorMessage
                    name="nysc_status"
                    component="p"
                    style={{ color: "red", fontSize: "12px" }}
                  />
                </div>
              </div>
              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>Programming experience</span>
                  </div>

                  <select
                    name="programming_experience"
                    value={values.programming_experience}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.programming_experience &&
                      touched.programming_experience &&
                      "error"
                    }
                  >
                    <option>Select option</option>
                    {experience.map((experience) => (
                      <option value={experience.value} key={experience.value}>
                        {experience.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>NYSC status</span>
                  </div>

                  <select
                    name="nysc_status"
                    value={values.nysc_status}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.nysc_status && touched.nysc_status && "error"
                    }
                  >
                    <option>Select status</option>
                    {nysc.map((nysc) => (
                      <option value={nysc.value} key={nysc.value}>
                        {nysc.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <ErrorMessage
                name="hear_about_us"
                component="p"
                style={{ color: "red", fontSize: "12px" }}
              />
              <div className="wrapper">
                <div className="label">
                  <span>Where did you hear about us? </span>
                </div>

                <select
                  name="hear_about_us"
                  value={values.hear_about_us}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.hear_about_us && touched.hear_about_us && "error"
                  }
                >
                  <option>Select option</option>
                  {info.map((info) => (
                    <option value={info.value} key={info.value}>
                      {info.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="btn">
                <Button width="100%" disabled={active}>
                  {active ? "loading..." : "Submit"}
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </FormStyle>
  );
}

export default FormDiv;
