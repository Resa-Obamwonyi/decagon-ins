import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.scss";
import validateApplication from "../../utils/new-validateApplication";
import { publicFetch } from '../../utils/fetch'
import { errorHandler } from "../../utils/ErrorHandler";

export default function ApplicationUpdate() {
  const defaultState = {
  applicant_id: "",
  first_name: "",
  last_name: "",
  gender: "",
  institution: "",
  bootcamp_location: "null",
  bootcamp_name: "null",
  course_of_study: "",
  current_location: "",
  degree: "",
  dob: "",
  email: "",
  ex_bootcamper: "null",
  hear_about_us: "",
  highest_qualification: "",
  nysc_status: "",
  phone_number: "",
  programming_experience: "",
  state_of_origin: ""
  };

  const notify = () =>
    toast.success(
      "Thank you for updating your application."
    );

  const [state, setState] = useState(defaultState);
  const [errors, setErrors] = useState(defaultState);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cycleError, setCycleError] = useState(false);
  const [isOther, setIsOther] = useState(false);

  const handleSelect = (event: any) => {
    const { name, value } = event.target;
    if (value === 'other') {
      setState({ ...state, [name]: ''});
      setIsOther(true)
    }else if (name === 'highest_qualification') {
      setIsOther(false)
    }
  }

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });

    //@ts-ignore
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  let history = useHistory();

  const applicant_details = async () => {
    const url = new URL(window.location.href).search
    const param_applicant_id = new URLSearchParams(url).get('applicant_id')
    await publicFetch.get(
      `/applicant?applicant_id=${param_applicant_id}`
     ).then(({data}: any) => {
       setState({
         applicant_id: data.data.applicant_id,
         first_name: data.data.first_name,
         last_name: data.data.last_name,
         gender: data.data.gender,
         institution: data.data.institution,
         bootcamp_location: data.data.bootcamp_location,
         bootcamp_name: data.data.bootcamp_name,
         course_of_study: data.data.course_of_study,
         current_location: data.data.current_location,
         degree: data.data.degree,
         dob: data.data.dob,
         email: data.data.email,
         ex_bootcamper: data.data.ex_bootcamper,
         hear_about_us: data.data.hear_about_us,
         highest_qualification: data.data.highest_qualification,
         nysc_status: data.data.nysc_status,
         phone_number: data.data.phone_number,
         programming_experience: data.data.programming_experience,
         state_of_origin: data.data.state_of_origin
       })
     }).catch((error) => {
      const err = errorHandler(error?.response?.status, "update")
      setCycleError(true)
      setErrorMessage(err)
    });
  }

  useEffect(() => {
    applicant_details()
  }, [])

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    try {
      const errorsFields = validateApplication(state);

      if (errorsFields) {
        return setErrors({ ...errors, ...errorsFields });
      }
      setLoading(true)
       await publicFetch.post(
        `applicant/update?applicant_id=${state.applicant_id}`,
        {
          nysc_status: state.nysc_status,
          highest_qualification: state.highest_qualification
        }
       );

      setState({ ...state, ...defaultState });
      notify();
      history.push("/success",{
        message:"You have Successfully updated your application."
      })
    } catch (error) {
      setState({ ...state, ...defaultState });
      setErrors({ ...errors, ...error })
      setLoading(false);
    }

  };
  return (
    <div>
      {cycleError ?
        (
          <main>
            <div className="wrapper">
              <div className="container">
                <h1 className="font-muli font-bold">{errorMessage}</h1>
                <div className="back-button">
                  <a href={`https://applications.decagonhq.com/`}>
                    <button className="btn-back">Back to Home</button>
                  </a>
                </div>
              </div>
            </div>
          </main>)
        :
        (<main className="update-main">
          <div className="hero"></div>
          <div className="content update-form">
            <div className="update-header">
              <h2 className="update-text">
                Become a <span style={{ color: "#58A75D" }}>Decadev</span>{" "}
              </h2>
            </div>

            <ToastContainer />
            <form onSubmit={handleSubmit}>
              <h1 className="form-title">Application update form</h1>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    value={state.first_name ?? ""}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    value={state.last_name ?? ""}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    name="gender"
                    value={state.gender ?? ""}
                    disabled={true}
                  >
                    <option value={state.gender}>{state.gender}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="dob">Date of birth</label>
                  <input
                    type="date"
                    name="dob"
                    max="2003-07-01"
                    placeholder="04 - 01 - 1992"
                    value={state.dob ?? ""}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone_number">Phone Number</label>
                  <input
                    type="text"
                    name="phone_number"
                    value={state.phone_number ?? ""}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    value={state.email ?? ""}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="state_of_origin">State of Origin</label>
                  <select
                    name="state_of_origin"
                    value={state.state_of_origin ??""}
                    disabled={true}
                  >
                    <option key={state.state_of_origin} value={state.state_of_origin.toLowerCase()}>
                      {state.state_of_origin ??""}
                    </option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="current_location">Current Location</label>
                  <select
                    name="current_location"
                    value={state.current_location ?? ""}
                    disabled={true}
                  >
                    <option key={state.current_location} value={state.current_location.toLowerCase()}>
                      {state.current_location ??""}
                    </option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="highest_qualification">Highest Qualification</label>
                  <select
                    name="highest_qualification"
                    value={state.highest_qualification?? ""}
                    onChange={handleSelect}
                    style={{
                      border: errors.highest_qualification && "1px solid #d07d7d",
                    }}
                  >
                    <option value="Phd">Phd</option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="HND">HND</option>
                    <option value="other">Other</option>
                  </select>
                  {isOther &&(
                    <div className="mt-2">
                      <input
                        type="text"
                        name="highest_qualification"
                        onChange={handleChange}
                        placeholder="Highest Qualification"
                        style={{
                          border: errors.highest_qualification && "1px solid #d07d7d",
                        }}
                      />
                    </div>
                  )}
                  {errors.highest_qualification && (
                    <p className="form-error">{errors.highest_qualification}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="institution">Institution</label>
                  <input
                    type="text"
                    name="institution"
                    value={state.institution ??""}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="course_of_study">Course of study</label>
                  <input
                    type="text"
                    name="course_of_study"
                    value={state.course_of_study ??""}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nysc_status">NYSC status</label>
                  <select
                    name="nysc_status"
                    value={state.nysc_status ?? ""}
                    onChange={handleChange}
                    style={{
                      border: errors.nysc_status && "1px solid #d07d7d",
                    }}
                  >
                    <option value="completed">I have completed service</option>
                    <option value="exemption">I have got an exemption</option>
                    <option value="awaiting service">I am awaiting service</option>
                    <option value="serving currently">I am currently serving</option>
                  </select>

                  {errors.nysc_status && (
                    <p className="form-error">{errors.nysc_status}</p>
                  )}
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="programming_experience">
                    Programming Experience
                  </label>
                  <input
                    type="text"
                    name="programming_experience"
                    value={state.programming_experience ??""}
                    disabled={true}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="degree">Grade Achieved</label>
                  <select
                    name="degree"
                    value={state.degree ?? ""}
                    disabled={true}
                  >
                    <option value={state.degree}>{state.degree}</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="hear_about_us">Where did you hear about us</label>
                  <input
                    type="text"
                    name="hear_about_us"
                    value={state.hear_about_us ??""}
                    disabled={true}
                  />
                </div>
              </div>

              <div className="form-group form-submit-actions">
                <button
                  type="submit"
                  className="submit-button"
                  style={{
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {loading ? (
                    <div className="lds-roller">
                      {[...Array(6)].map((_, index) => (
                        <div
                          key={index.toString()}
                          className="lds-roller-dot"
                        ></div>
                      ))}
                    </div>
                  ) : (
                      <p>Submit</p>
                    )}
                </button>
                <p className="terms-c">
                  by clicking submit, you agree to Decagon's
                  <span>
                    <a
                      href="https://decagonhq.com/terms.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      terms and conditions
                    </a>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </main>
      )}
    </div>
  );
}
