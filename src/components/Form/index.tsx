import React, {useState} from "react";
import {FormStyle} from "./style";
import Button from "../Button";
import {ErrorMessage, Form, Formik} from "formik";
import {experience, gender, grade, info, nysc, qualification, state, guarantor, paymentOption} from "./data";
import {validationSchema} from "./validationSchema";
import axios from "axios";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FormDiv() {
  const [active, setActive] = useState(false);
  const handleButtonActive = (state: boolean) => {
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
              first_name: "",
              gender: "",
              hear_about_us: "",
              highest_qualification: "",
              institution: "",
              last_name: "",
              nysc_status: "",
              phone_number: "",
              programming_experience: "",
              state_of_origin: "",
              guarantor: "",
              payment_option: ""
            }}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, {setSubmitting, resetForm}) => {
              handleButtonActive(true);
              axios
                  .post(
                      `${process.env.REACT_APP_PROD_BASE_URL}/applicant/register`,
                      {
                        bootcamp_location: null,
                        bootcamp_name: null,
                        ex_bootcamper: null,
                        course_of_study: values.course_of_study,
                        current_location: values.current_location,
                        degree: values.degree,
                        dob: values.dob,
                        email: values.email,
                        first_name: values.first_name,
                        gender: values.gender,
                        hear_about_us: values.hear_about_us,
                        highest_qualification: values.highest_qualification,
                        institution: values.institution,
                        last_name: values.last_name,
                        nysc_status: values.nysc_status,
                        phone_number: values.phone_number,
                        programming_experience: values.programming_experience,
                        state_of_origin: values.state_of_origin,
                        guarantor: values.guarantor,
                        payment_option: values.payment_option
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
                  <div className="error-div">
                    <div className="single-error-div">
                      <ErrorMessage
                          name="first_name"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
                      />
                    </div>
                    <div className="single-error-div">
                      <ErrorMessage
                          name="last_name"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
                      />
                    </div>
                  </div>

                  <ToastContainer autoClose={10000} limit={1}/>
                  <div className="double-input">
                    <div className="wrapper double-wrapper-left">
                      <div className="label">
                        <span>First Name</span>
                      </div>
                      <input
                          name="first_name"
                          type="text"
                          placeholder="Enter first name here"
                          value={values.first_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={(errors.first_name && touched.first_name) ? "error" : ''}
                      />
                    </div>
                    <div className="wrapper double-wrapper-right">
                      <div className="label">
                        <span>Last Name</span>
                      </div>
                      <input
                          name="last_name"
                          type="text"
                          placeholder="Enter last name here"
                          value={values.last_name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={(errors.last_name && touched.last_name) ? "error" : ''}
                      />
                    </div>
                  </div>
                  <div className="error-div">
                    <div className="single-error-div">
                      <ErrorMessage
                          name="gender"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
                      />
                    </div>
                    <div className="single-error-div">
                      <ErrorMessage
                          name="dob"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
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
                          className={(errors.gender && touched.gender) ? "error" : ''}
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
                          className={(errors.dob && touched.dob) ? "error" : ''}
                      />
                    </div>
                  </div>
                  <ErrorMessage
                      name="phone_number"
                      render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
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
                        className={(errors.phone_number && touched.phone_number) ? "error" : ''}
                    />
                  </div>
                  <ErrorMessage
                      name="email"
                      render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
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
                        className={(errors.email && touched.email) ? "error" : ''}
                    />
                  </div>
                  <div className="error-div">
                    <div className="single-error-div">
                      <ErrorMessage
                          name="state_of_origin"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
                      />
                    </div>
                    <div className="single-error-div">
                      <ErrorMessage
                          name="current_location"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}

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
                          className={(errors.state_of_origin && touched.state_of_origin) ? "error" : ''}
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
                          className={(errors.current_location && touched.current_location) ? "error" : ''}
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
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
                      />
                    </div>
                    <div className="single-error-div">
                      <ErrorMessage
                          name="institution"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
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
                          className={(errors.highest_qualification && touched.highest_qualification) ? "error" : ''}
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
                        <span>Institution</span>
                      </div>

                      <input
                          name="institution"
                          type="text"
                          placeholder="Institution"
                          value={values.institution}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={(errors.institution && touched.institution) ? "error" : ''}
                      />
                    </div>
                  </div>
                  <div className="error-div">
                    <div className="single-error-div">
                      <ErrorMessage
                          name="course_of_study"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
                      />
                    </div>
                    <div className="single-error-div">
                      <ErrorMessage
                          name="degree"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
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
                          className={(errors.course_of_study && touched.course_of_study) ? "error" : ''}
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
                          className={(errors.degree && touched.degree) ? "error" : ''}
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
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
                      />
                    </div>
                    <div className="single-error-div">
                      <ErrorMessage
                          name="nysc_status"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
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
                          className={(errors.programming_experience && touched.programming_experience) ? "error" : ''}
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
                          className={(errors.nysc_status && touched.nysc_status) ? "error" : ''}
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
                  <div className="error-div">
                    <div className="single-error-div">
                      <ErrorMessage
                          name="payment_option"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
                      />
                    </div>
                    <div className="single-error-div">
                      <ErrorMessage
                          name="guarantor"
                          render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
                      />
                    </div>
                  </div>
                  <div className="double-input">
                    <div className="wrapper double-wrapper-left">
                      <div className="label">
                        <span>Payment Option</span>
                      </div>
                      <select
                          name="payment_option"
                          value={values.payment_option}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={(errors.payment_option && touched.payment_option) ? "error" : ''}
                      >
                        <option>Select option</option>
                        {paymentOption.map((info) => (
                            <option value={info.value} key={info.value}>
                              {info.label}
                            </option>
                        ))}
                      </select>
                    </div>
                    <div className="wrapper double-wrapper-right">
                      <div className="label">
                        <span>Do you have a guarantor</span>
                      </div>
                      <select
                          name="guarantor"
                          value={values.guarantor}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={(errors.guarantor && touched.guarantor) ? "error" : ''}
                      >
                        <option>Select option</option>
                        {guarantor.map((info) => (
                            <option value={info.value} key={info.value}>
                              {info.label}
                            </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <ErrorMessage
                      name="hear_about_us"
                      render={(msg) => <p style={{color: "red", fontSize: "12px"}}>{msg}</p>}
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
                        className={(errors.hear_about_us && touched.hear_about_us) ? "error" : ''}
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
