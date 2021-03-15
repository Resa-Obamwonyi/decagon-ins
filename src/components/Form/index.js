import React from "react";
import { FormStyle } from "./style";
import Button from "../Button";

function Form() {
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

      <form className="form-area">
        <div className="wrapper">
          <div className="label">
            <span>Your name is</span>
          </div>

          <input name="name" type="text" placeholder="Enter full name here" />
        </div>

        <div className="double-input">
          <div className="wrapper double-wrapper-left">
            <div className="label">
              <span>Your gender is</span>
            </div>

            {/* <input name="gender" type="text" placeholder="Select a gender" /> */}
            <select name="gender">
              <option>Select a gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="wrapper double-wrapper-right">
            <div className="label">
              <span>Your date of birth is</span>
            </div>

            <input name="dateofbirth" type="date" placeholder="Select a date" />
          </div>
        </div>
        <div className="wrapper">
          <div className="label">
            <span>Phone number</span>
          </div>

          <input
            name="phone_number"
            type="text"
            placeholder="Start with +234 or 0"
          />
        </div>
        <div className="wrapper">
          <div className="label">
            <span>Email address</span>
          </div>

          <input
            name="email"
            type="email"
            placeholder="Enter email address here"
          />
        </div>
        <div className="double-input">
          <div className="wrapper double-wrapper-left">
            <div className="label">
              <span>Your state of origin</span>
            </div>

            {/* <input name="state" type="text" placeholder="Select state" /> */}
            <select name="state">
              <option>Select state</option>
            </select>
          </div>
          <div className="wrapper double-wrapper-right">
            <div className="label">
              <span>Your current location </span>
            </div>

            {/* <input name="location" type="text" placeholder="Select location" /> */}
            <select name="location">
              <option>Select location</option>
            </select>
          </div>
        </div>
        <div className="double-input">
          <div className="wrapper double-wrapper-left">
            <div className="label">
              <span>Highest Qualification </span>
            </div>

            {/* <input name="qualification" type="text" placeholder="Select" /> */}
            <select name="qualification">
              <option>Select</option>
            </select>
          </div>
          <div className="wrapper double-wrapper-right">
            <div className="label">
              <span>Institute</span>
            </div>

            <input name="institute" type="text" placeholder="Institute" />
          </div>
        </div>
        <div className="double-input">
          <div className="wrapper double-wrapper-left">
            <div className="label">
              <span>Your course of study </span>
            </div>

            <input name="course" type="text" placeholder="Course of study" />
          </div>
          <div className="wrapper double-wrapper-right">
            <div className="label">
              <span>Grade achieved</span>
            </div>

            {/* <input name="grade" type="text" placeholder="Select grade" /> */}
            <select name="grade">
              <option>Select grade</option>
            </select>
          </div>
        </div>
        <div className="double-input">
          <div className="wrapper double-wrapper-left">
            <div className="label">
              <span>Programming experience</span>
            </div>

            {/* <input name="experience" type="text" placeholder="Select option" /> */}
            <select name="experience">
              <option>Select option</option>
            </select>
          </div>
          <div className="wrapper double-wrapper-right">
            <div className="label">
              <span>NYSC status</span>
            </div>

            {/* <input name="nysc" type="text" placeholder="Select status" /> */}
            <select name="nysc">
              <option>Select status</option>
            </select>
          </div>
        </div>
        <div className="wrapper">
          <div className="label">
            <span>Where did you hear about us? </span>
          </div>

          <select name="info">
            <option>Select option</option>
          </select>
        </div>

        <div className="btn">
          <Button width="100%">Submit</Button>
        </div>
      </form>
    </FormStyle>
  );
}

export default Form;
