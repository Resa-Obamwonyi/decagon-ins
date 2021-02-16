import React, { useState } from "react";
import { useHistory } from "react-router";
import Layout from "../../layout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.scss";
import validateApplication from "../../utils/new-validateApplication";
import { publicFetch } from '../../utils/fetch'

export default function Application() {
  const defaultState = {
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
      "Thank you for applying. kindly check your email for confirmation"
    );

  const [state, setState] = useState(defaultState);
  const [errors, setErrors] = useState(defaultState);
  const [loading, setLoading] = useState(false);
  const [isOther, setIsOther] = useState({other: false, 'other-us': false});
  const [isDecadev, setIsDecadev] = useState(false);

  const handleSelect = (event: any) => {
    const { name, value } = event.target;
    if (value === 'other') {
      setState({ ...state, [name]: ''});
      setIsOther({...isOther, other: true})
    }else if (name === 'highest_qualification') {
      setIsOther({...isOther, other: false})
      setState({ ...state, [name]: value});
    }
    if (value === 'other-us') {
      setState({ ...state, [name]: ''});
      setIsOther({...isOther, 'other-us': true})
      setIsDecadev(false)
    }else if (value === 'decadev') {
      setState({ ...state, [name]: ''});
      setIsDecadev(true)
      setIsOther({...isOther, 'other-us': false})
    }else if (name === 'hear_about_us') {
      setIsDecadev(false)
      setIsOther({...isOther, 'other-us': false})
      setState({ ...state, [name]: value});
    }

    //@ts-ignore
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  }

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setState({ ...state, [name]: value});

    //@ts-ignore
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  let history = useHistory();

  const handleSubmit = async(e: any) => {
    e.preventDefault();
    try {
      const errorsFields = validateApplication(state);

      if (errorsFields) {
        return setErrors({ ...errors, ...errorsFields });
      }
      setLoading(true)

      const { data } = await publicFetch.post(
      `applicant/register`,
      state
      );

      setState({ ...state, ...defaultState });
      notify();
      let message;
      if (data.data.application_in_cycle) {
        message = "message1"
      }else{
        message = "message2"
      }

      history.push(`/success?message=${message}`)
    } catch (error) {
      setState({ ...state, ...defaultState });
      setErrors({ ...errors, ...error })
      setLoading(false);
    }

  };
  return (
    <Layout name="new-apply">
      <main className="inner-main">
        <div className="hero"></div>
        <div className="content application-form">
          <div className="apply-header">
            <h2 className="apply-text">
              Become a <span style={{ color: "#58A75D" }}>Decadev</span>{" "}
            </h2>
          </div>

          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <h1 className="form-title">Application form</h1>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={state.first_name}
                  onChange={handleChange}
                  style={{ border: errors.first_name && "1px solid #d07d7d" }}
                />
                {errors.first_name && (
                  <p className="form-error">{errors.first_name}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={state.last_name}
                  onChange={handleChange}
                  style={{ border: errors.last_name && "1px solid #d07d7d" }}
                />
                {errors.last_name && (
                  <p className="form-error">{errors.last_name}</p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select
                  name="gender"
                  value={state.gender}
                  onChange={handleChange}
                  style={{ border: errors.gender && "1px solid #d07d7d" }}
                >
                  <option value="">Select a Gender</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                </select>
                {errors.gender && <p className="form-error">{errors.gender}</p>}
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of birth</label>
                <input
                  type="date"
                  name="dob"
                  max="2003-07-01"
                  placeholder="04 - 01 - 1992"
                  value={state.dob}
                  onChange={handleChange}
                  style={{ border: errors.dob && "1px solid #d07d7d" }}
                />
                {errors.dob && <p className="form-error">{errors.dob}</p>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone_number">Phone Number - must start with (+234 or 0)</label>
                <input
                  type="text"
                  name="phone_number"
                  value={state.phone_number}
                  placeholder="+2348123456789"
                  onChange={handleChange}
                  style={{ border: errors.phone_number && "1px solid #d07d7d" }}
                />
                {errors.phone_number && (
                  <p className="form-error">{errors.phone_number}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  style={{ border: errors.email && "1px solid #d07d7d" }}
                />

                {errors.email && (
                  <p className="form-error">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="state_of_origin">State of Origin</label>
                <select
                  name="state_of_origin"
                  value={state.state_of_origin}
                  onChange={handleChange}
                  style={{
                    border: errors.state_of_origin && "1px solid #d07d7d",
                  }}>
                  {NIGERIAN_STATE.map((state: any) => (
                    <option key={state} value={state.toLowerCase()}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.state_of_origin && (
                  <p className="form-error">{errors.state_of_origin}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="current_location">Current Location</label>
                <select
                  name="current_location"
                  value={state.current_location}
                  onChange={handleChange}
                  style={{
                    border: errors.current_location && "1px solid #d07d7d",
                  }}
                >
                  {NIGERIAN_STATE.map((state: any) => (
                    <option key={state} value={state.toLowerCase()}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.current_location && (
                  <p className="form-error">{errors.current_location}</p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="highest_qualification">Highest Qualification</label>
                <select
                  name="highest_qualification"
                  value={state.highest_qualification}
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
                {isOther['other'] &&(
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
              <div className="form-group">
                <label htmlFor="institution">Institution</label>
                <input
                  type="text"
                  name="institution"
                  value={state.institution}
                  onChange={handleChange}
                  style={{ border: errors.institution && "1px solid #d07d7d" }}
                />
                {errors.institution && (
                  <p className="form-error">{errors.institution}</p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="course_of_study">Course of study</label>
                <input
                  type="text"
                  name="course_of_study"
                  value={state.course_of_study}
                  onChange={handleChange}
                  style={{
                    border: errors.course_of_study && "1px solid #d07d7d",
                  }}
              />

                {errors.course_of_study && (
                  <p className="form-error">{errors.course_of_study}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="degree">Grade Achieved</label>
                <select
                  name="degree"
                  value={state.degree}
                  onChange={handleChange}
                  style={{
                    border: errors.degree && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="first class">First class</option>
                  <option value="second class upper">Second class upper</option>
                  <option value="second class lower">Second class lower</option>
                  <option value="third class">Third class</option>
                </select>

                {errors.degree && (
                  <p className="form-error">{errors.degree}</p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="programming_experience">
                  Programming Experience
                </label>
                <select
                  name="programming_experience"
                  value={state.programming_experience}
                  onChange={handleChange}
                  style={{
                    border: errors.programming_experience && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="No Skill">No Skill</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                </select>

                {errors.programming_experience && (
                  <p className="form-error">{errors.programming_experience}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="nysc_status">NYSC status</label>
                <select
                  name="nysc_status"
                  value={state.nysc_status}
                  onChange={handleChange}
                  style={{
                    border: errors.nysc_status && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select an option</option>
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
                <label htmlFor="hear_about_us">Where did you hear about us</label>
                <select
                  name="hear_about_us"
                  value={state.hear_about_us}
                  onChange={handleSelect}
                  style={{
                    border: errors.hear_about_us && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select one</option>
                  <option value="facebook">facebook</option>
                  <option value="instagram">instagram</option>
                  <option value="twitter">twitter</option>
                  <option value="linkedin">linkedin</option>
                  <option value="whatsapp">Whatsapp</option>
                  <option value="WAAW foundation">WAAW foundation</option>
                  <option value="faf">Friends/Family Referral</option>
                  <option value="decadev">Decadev</option>
                  <option value="other-us">other</option>
                </select>
                {isOther['other-us'] &&(
                  <div className="form-group">
                    <input
                      type="text"
                      name="hear_about_us"
                      onChange={handleChange}
                      placeholder="Hear about us"
                      style={{
                        border: errors.hear_about_us && "1px solid #d07d7d",
                      }}
                    />
                  </div>
                )}
                {isDecadev &&(
                  <div className="form-group">
                    <input
                      type="text"
                      name="hear_about_us"
                      onChange={handleChange}
                      placeholder="Decadev's name"
                      style={{
                        border: errors.hear_about_us && "1px solid #d07d7d",
                      }}
                    />
                  </div>
                )}
                {errors.hear_about_us && (
                  <p className="form-error">{errors.hear_about_us}</p>
                )}
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
    </Layout>  
  );
}

const NIGERIAN_STATE = [
  "Select a state",
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];
