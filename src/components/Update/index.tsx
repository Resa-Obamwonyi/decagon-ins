import React, {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FormStyle} from "./style";
import validationSchema from "./validateUpdate";
import {errorHandler} from "../../utils/ErrorHandler";
import {Link} from "react-router-dom";
import Button from "../Button";
import axios from "axios";

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
  const [errorMessage, setErrorMessage] = useState('');
  const [cycleError, setCycleError] = useState(true);
  const [isOther, setIsOther] = useState(false);
  const [active, setActive] = useState(false);
  const handleButtonActive = (state: boolean) => {
    setActive(state);
  };

  const handleSelect = (event: any) => {
    const {name, value} = event.target;
    if (value === 'other') {
      setState({...state, [name]: ''});
      setIsOther(true)
    } else if (name === 'highest_qualification') {
      setIsOther(false)
      setState({...state, [name]: value});
    }
  }

  const handleChange = ({target}: any) => {
    const {name, value} = target;
    setState({...state, [name]: value});

    //@ts-ignore
    if (errors[name]) setErrors({...errors, [name]: ""});
  };

  let history = useHistory();

  const applicant_details = async () => {
    const url = new URL(window.location.href).search
    const param_applicant_id = new URLSearchParams(url).get('applicant_id')
    axios.get(
      `${process.env.REACT_APP_PROD_BASE_URL}/applicant?applicant_id=dadc4rdadc`
    ).then(({data}: any) => {
      setCycleError(false)
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
    }).catch((error: { response: { status: any; }; }) => {
      const err = errorHandler(error?.response?.status, "update")
      setCycleError(true)
      setErrorMessage(err)
    });
  }

  useEffect(() => {
    setCycleError(false)
    // applicant_details().then(res => res)
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const errorsFields = validationSchema(state);

      if (errorsFields) {
        return setErrors({...errors, ...errorsFields});
      }
      handleButtonActive(true);
      axios.post(
        `${process.env.REACT_APP_PROD_BASE_URL}/applicant/update?applicant_id=${state.applicant_id}`,
        {
          nysc_status: state.nysc_status,
          highest_qualification: state.highest_qualification
        }
      ).then(response => {
        setState({...state, ...defaultState});
        handleButtonActive(false);
        notify();
        const updateMessage = response.data.message
        history.push(`/success?message=${updateMessage}`)
      }).catch(error => {
        handleButtonActive(false);
        setState({...state, ...defaultState});
        setErrors({...errors, ...error})
      })
    } catch (error) {
      handleButtonActive(false);
      setState({...state, ...defaultState});
      setErrors({...errors, ...error})
    }
  };
  return (
    <FormStyle>
      {cycleError ?
        (
          <div className="error-container">
            <h2 className="error-message">{errorMessage}</h2>
            <div className="error-btn">
              <Link to="/">
                <Button>
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        )
        :
        (
          <div>
            <div className="form-header">
              <h1>
                Become a <span className="colorcode">Decadev</span>
              </h1>
            </div>
            <p>Application update form</p>
            <p className="update-info">* Update your Highest qualification and Nysc Status</p>

            <ToastContainer autoClose={10000} limit={1}/>
            <form className="form-area" onSubmit={handleSubmit} id="form-data">
              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>First Name</span>
                  </div>
                  <input
                    type="text"
                    name="first_name"
                    value={state.first_name ?? ""}
                    disabled={true}
                  />
                </div>
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>Last Name</span>
                  </div>
                  <input
                    type="text"
                    name="last_name"
                    value={state.last_name ?? ""}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>Gender</span>
                  </div>
                  <select
                    name="gender"
                    value={state.gender ?? ""}
                    disabled={true}
                  >
                    <option value={state.gender}>{state.gender}</option>
                  </select>
                </div>
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>Date of birth</span>
                  </div>
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
              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>Phone Number</span>
                  </div>
                  <input
                    type="text"
                    name="phone_number"
                    value={state.phone_number ?? ""}
                    disabled={true}
                  />
                </div>
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>Email Address</span>
                  </div>
                  <input
                    type="text"
                    name="email"
                    value={state.email ?? ""}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>State of Origin</span>
                  </div>
                  <select
                    name="state_of_origin"
                    value={state.state_of_origin ?? ""}
                    disabled={true}
                  >
                    <option key={state.state_of_origin} value={state.state_of_origin.toLowerCase()}>
                      {state.state_of_origin ?? ""}
                    </option>
                  </select>
                </div>
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>Current Location</span>
                  </div>
                  <select
                    name="current_location"
                    value={state.current_location ?? ""}
                    disabled={true}
                  >
                    <option key={state.current_location} value={state.current_location.toLowerCase()}>
                      {state.current_location ?? ""}
                    </option>
                  </select>
                </div>
              </div>
              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>Highest Qualification</span>
                  </div>
                  <select
                    name="highest_qualification"
                    value={state.highest_qualification ?? ""}
                    onChange={handleSelect}
                    style={{
                      border: errors.highest_qualification && "1px solid #d07d7d",
                    }}
                  >
                    <option value="">Select an option</option>
                    <option value="Phd">Phd</option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="HND">HND</option>
                    <option value="other">Other</option>
                  </select>
                  {isOther && (
                    <div className="form-group">
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
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>Institution</span>
                  </div>
                  <input
                    type="text"
                    name="institution"
                    value={state.institution ?? ""}
                    disabled={true}
                  />
                </div>
              </div>
              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>Course of study</span>
                  </div>
                  <input
                    type="text"
                    name="course_of_study"
                    value={state.course_of_study ?? ""}
                    disabled={true}
                  />
                </div>
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>NYSC status</span>
                  </div>
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
              <div className="double-input">
                <div className="wrapper double-wrapper-left">
                  <div className="label">
                    <span>Programming Experience</span>
                  </div>
                  <input
                    type="text"
                    name="programming_experience"
                    value={state.programming_experience ?? ""}
                    disabled={true}
                  />
                </div>
                <div className="wrapper double-wrapper-right">
                  <div className="label">
                    <span>Grade Achieved</span>
                  </div>
                  <select
                    name="degree"
                    value={state.degree ?? ""}
                    disabled={true}
                  >
                    <option value={state.degree}>{state.degree}</option>
                  </select>
                </div>
              </div>
              <div className="wrapper ">
                <div className="label">
                  <span>Where did you hear about us</span>
                </div>
                <input
                  type="text"
                  name="hear_about_us"
                  value={state.hear_about_us ?? ""}
                  disabled={true}
                />
              </div>

              <div className="btn">
                <Button width="100%" disabled={active}>
                  {active ? "loading..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        )}
    </FormStyle>
  );
}
