import React, { useState } from "react";
import Layout from "../../layout";
import "./index.scss";
import serializeRequest from "../../utils/serializeRequest";
import { mailBody } from "../../pages/apply/mailbody";
import validateApplication from "../../utils/validateApplication";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Application() {
  const defaultState = {
    firstName: "",
    lastName: "",
    gender: "",
    DOB: "",
    phoneNumber: "",
    emailAddress: "",
    stateOfOrigin: "",
    currentLocation: "",
    qualification: "",
    institution: "",
    gradeAchieved: "",
    graduationPercentile: "",
    courseStudied: "",
    NYSCStatus: "",
    programmingExperience: "",
    paymentOption: "",
    heardAboutUs: "",
    loading: false,
  };

  const notify = () =>
    toast.success(
      "Thank you for applying. kindly check your email for confirmation"
    );

  const [state, setState] = useState(defaultState);
  const [errors, setErrors] = useState(defaultState);

  const handleChange = ({ target }: any) => {
    const { name, value } = target;
    setState({ ...state, [name]: value });

    //@ts-ignore
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const errorsFields = validateApplication(state);

    if (errorsFields) {
      return setErrors({ ...errors, ...errorsFields });
    }

    $.ajax({
      url: process.env.REACT_APP_GOOGLE_SHEET_BASE_URI,
      method: "GET",
      dataType: "json",
      data: serializeRequest(Object.entries(state)),
      beforeSend: () => {
        setState({ ...state, loading: true });
      },

      complete: async function ({ status }) {
        if (status !== 200) return;

        // @ts-ignore
        await fetch(process.env.REACT_APP_MAIL_HOST, {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            to: [state.emailAddress],
            from: process.env.REACT_APP_MAIL_FROM,
            subject: "Application successfully sent",
            mailTemplate: mailBody,
          }),
        });

        setState({ ...state, ...defaultState });
        notify();
      },
    }).catch(() => {
      setState({ ...state, ...defaultState });
    });
  };
  return (
    <Layout name="apply">
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
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={state.firstName}
                  onChange={handleChange}
                  style={{ border: errors.firstName && "1px solid #d07d7d" }}
                />
                {errors.firstName && (
                  <p className="form-error">{errors.firstName}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={state.lastName}
                  onChange={handleChange}
                  style={{ border: errors.lastName && "1px solid #d07d7d" }}
                />
                {errors.lastName && (
                  <p className="form-error">{errors.lastName}</p>
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
                <label htmlFor="DOB">Date of birth</label>
                <input
                  type="date"
                  name="DOB"
                  max="2003-07-01"
                  placeholder="04 - 01 - 1992"
                  value={state.DOB}
                  onChange={handleChange}
                  style={{ border: errors.DOB && "1px solid #d07d7d" }}
                />
                {errors.DOB && <p className="form-error">{errors.DOB}</p>}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  value={state.phoneNumber}
                  onChange={handleChange}
                  style={{ border: errors.phoneNumber && "1px solid #d07d7d" }}
                />
                {errors.phoneNumber && (
                  <p className="form-error">{errors.phoneNumber}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="emailAddress">Email Address</label>
                <input
                  type="text"
                  name="emailAddress"
                  value={state.emailAddress}
                  onChange={handleChange}
                  style={{ border: errors.emailAddress && "1px solid #d07d7d" }}
                />

                {errors.emailAddress && (
                  <p className="form-error">{errors.emailAddress}</p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="stateOfOrigin">State of Origin</label>
                <select
                  name="stateOfOrigin"
                  value={state.stateOfOrigin}
                  onChange={handleChange}
                  style={{
                    border: errors.stateOfOrigin && "1px solid #d07d7d",
                  }}
                >
                  {NIGERIAN_STATE.map((state) => (
                    <option key={state} value={state.toLowerCase()}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.stateOfOrigin && (
                  <p className="form-error">{errors.stateOfOrigin}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="currentLocation">Current Location</label>
                <select
                  name="currentLocation"
                  value={state.currentLocation}
                  onChange={handleChange}
                  style={{
                    border: errors.currentLocation && "1px solid #d07d7d",
                  }}
                >
                  {NIGERIAN_STATE.map((state) => (
                    <option key={state} value={state.toLowerCase()}>
                      {state}
                    </option>
                  ))}
                </select>
                {errors.currentLocation && (
                  <p className="form-error">{errors.currentLocation}</p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="qualification">Highest Qualification</label>
                <select
                  name="qualification"
                  value={state.qualification}
                  onChange={handleChange}
                  style={{
                    border: errors.qualification && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="Phd">Phd</option>
                  <option value="Masters">Masters</option>
                  <option value="HND/Bachelors">HND/Bachelors</option>
                </select>

                {errors.qualification && (
                  <p className="form-error">{errors.qualification}</p>
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
                <label htmlFor="gradeAchieved">Class of Degree</label>
                <select
                  name="gradeAchieved"
                  value={state.gradeAchieved}
                  onChange={handleChange}
                  style={{
                    border: errors.gradeAchieved && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select one</option>
                  <option value="Distinction/First class">
                  4.50 - 5.00 - first class honours
                  </option>
                  <option value="Second class upper division">
                  3.50 - 4.49 - second class honours (upper division)
                  </option>
                  <option value="Second Class lower division ">
                  2.40 - 3.49 - second class honours (lower division)
                  </option>
                  <option value="Third Class">1.50 - 2.39 - third class honour</option>
                  <option value="Pass">1.0 - 1.49 - pass</option>
                </select>

                {errors.gradeAchieved && (
                  <p className="form-error">{errors.gradeAchieved}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="graduationPercentile">What was your percentile at graduation?</label>
                <select
                  name="graduationPercentile"
                  value={state.graduationPercentile}
                  onChange={handleChange}
                  style={{
                    border: errors.graduationPercentile && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select one</option>
                  <option value="70 and above">
                  70 and above
                  </option>
                  <option value="60 - 69%">
                  60 - 69%
                  </option>
                  <option value="50 - 59%">
                  50 - 59%
                  </option>
                  <option value="40 - 49%">
                  40 - 49%
                  </option>
                  <option value="Below 40">Below 40</option>
                </select>

                {errors.graduationPercentile && (
                  <p className="form-error">{errors.graduationPercentile}</p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="courseStudied">Course of study</label>
                <input
                  type="text"
                  name="courseStudied"
                  value={state.courseStudied}
                  onChange={handleChange}
                  style={{
                    border: errors.courseStudied && "1px solid #d07d7d",
                  }}
                />

                {errors.courseStudied && (
                  <p className="form-error">{errors.courseStudied}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="NYSCStatus">NYSC status</label>
                <select
                  name="NYSCStatus"
                  value={state.NYSCStatus}
                  onChange={handleChange}
                  style={{
                    border: errors.NYSCStatus && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="completed">completed</option>
                  <option value="exemption">exemption</option>
                </select>

                {errors.NYSCStatus && (
                  <p className="form-error">{errors.NYSCStatus}</p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="programmingExperience">
                  Programming Experience
                </label>
                <select
                  name="programmingExperience"
                  value={state.programmingExperience}
                  onChange={handleChange}
                  style={{
                    border: errors.programmingExperience && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="No Skill">No Skill</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                </select>

                {errors.programmingExperience && (
                  <p className="form-error">{errors.programmingExperience}</p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="paymentOption">Preferred Payment Option</label>
                <select
                  name="paymentOption"
                  value={state.paymentOption}
                  onChange={handleChange}
                  style={{
                    border: errors.paymentOption && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select an option</option>
                  <option value="Learn-Then-Earn">Learn-Then-Earn</option>
                  <option value="Self sponsorship">Self sponsorship</option>
                </select>

                {errors.paymentOption && (
                  <p className="form-error">{errors.paymentOption}</p>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="headAboutUs">Where did you hear about us</label>
                <select
                  name="heardAboutUs"
                  value={state.heardAboutUs}
                  onChange={handleChange}
                  style={{
                    border: errors.heardAboutUs && "1px solid #d07d7d",
                  }}
                >
                  <option value="">Select one</option>
                  <option value="facebook">facebook</option>
                  <option value="instagram">instagram</option>
                  <option value="twitter">twitter</option>
                  <option value="linkedin">linkedin</option>
                  <option value="other">other</option>
                </select>

                {errors.heardAboutUs && (
                  <p className="form-error">{errors.heardAboutUs}</p>
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
                {state.loading ? (
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
