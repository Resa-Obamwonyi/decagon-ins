import React from "react";
import { FormStyle } from "./style";
import Button from "../Button";

function Form() {
  return (
    <FormStyle>
      <h1>
        Become a <span className="colorcode">Decadev.</span>
      </h1>
      <p>
        Provide your details below and we will follow up in less than 24Hrs.
      </p>
      <form>
        <input
          type="firstname"
          name="firstname"
          placeholder="First name"
          id="right"
        />
        <div className="break-input">
          <input
            type="firstname"
            name="firstname"
            placeholder="First name"
            id="right"
          />
          <input
            type="lastname"
            name="lastname"
            placeholder="Last name"
            id="left"
          />
        </div>
        <input
          type="firstname"
          name="firstname"
          placeholder="First name"
          id="right"
        />
        <input
          type="firstname"
          name="firstname"
          placeholder="First name"
          id="right"
        />
        <div className="break-input">
          <input
            type="firstname"
            name="firstname"
            placeholder="First name"
            id="right"
          />
          <input
            type="lastname"
            name="lastname"
            placeholder="Last name"
            id="left"
          />
        </div>
        <div className="break-input">
          <input
            type="firstname"
            name="firstname"
            placeholder="First name"
            id="right"
          />
          <input
            type="lastname"
            name="lastname"
            placeholder="Last name"
            id="left"
          />
        </div>
        <div className="break-input">
          <input
            type="firstname"
            name="firstname"
            placeholder="First name"
            id="right"
          />
          <input
            type="lastname"
            name="lastname"
            placeholder="Last name"
            id="left"
          />
        </div>
        <div className="break-input">
          <input
            type="firstname"
            name="firstname"
            placeholder="First name"
            id="right"
          />
          <input
            type="lastname"
            name="lastname"
            placeholder="Last name"
            id="left"
          />
        </div>
        <input
          type="firstname"
          name="firstname"
          placeholder="First name"
          id="right"
        />

        <Button>Submit</Button>
      </form>
    </FormStyle>
  );
}

export default Form;
