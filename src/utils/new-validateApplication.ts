/* eslint-disable no-useless-escape */
type ApplicationType = { [key: string]: string };

export default function validateApplication(data: any) {
  const payload = {} as ApplicationType;

  Object.entries(data).forEach(([key, value]) => {
    // VALIDATE ALL FORM FIELDS ON FORM SUBMIT
    let field = "";
    if (!value) {
      switch (key) {
        case "first_name":
          field = "First name is required";
          break;
        case "last_name":
          field = "Last name is required";
          break;
        case "gender":
          field = "Gender is required";
          break;
        case "dob":
          field = "Date of birth is required";
          break;
        case "phone_number":
          field = "Phone number is required";
          break;
        case "email":
          field = "Email is required";
          break;
        case "institution":
          field = "Institution is required";
          break;
        case "course_of_study":
          field = "Course of study is required";
          break;
        case "nysc_status":
          field = "NYSC status is required";
          break;
        case "current_location":
          field = "Current location is required";
          break;
        case "state_of_origin":
          field = "State of origin is required";
          break;
        case "degree":
          field = "Grade is required";
          break;
        case "payment_option":
          field = "Select an option";
          break;
        case "programming_experience":
          field = "Select an option";
          break;
        case "highest_qualification":
          field = "Highest qualification is required";
          break;
        case "hear_about_us":
          field = "Hear about us is required";
          break;
        case "home_address":
          field = "Home Address is required";
          break;
        case "password":
          field = "Password is required";
          break;
        case "newPassword":
          field = "New password is required";
          break;
        case "confirmPassword":
          field = "Confirm password is required";
          break;
        case "token":
          field = "Token is required";
          break;

        default:
          break;
      }

      payload[key] = field;
    }

    // REMOVE LOADING AS ERROR FIELD
    delete payload["loading"];

    const checkIfNumberIsPresent = (value: any) => /\d/.test(value)

    if (key === "first_name" && value) {
      field = "First name is invalid";
      if (checkIfNumberIsPresent(value)) payload[key] = field;
    }

    if (key === "last_name" && value) {
      field = "Last name is invalid";
      if (checkIfNumberIsPresent(value)) payload[key] = field;
    }

    // VALIDATE EMAIL INPUT ON THE FORM
    if (key === "email" && value) {
      const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const correctEmailAddress = EMAIL_PATTERN.test(
        String(value).toLowerCase()
      );
      field = "Email address is invalid";
      if (!correctEmailAddress) payload[key] = field;
    }

    if (key === "phone_number" && value) {
      const PHONE_PATTERN = /^(\+234|0)\d{10}$/;
      const correctPhoneNumber = PHONE_PATTERN.test(String(value));

      field = "Phone number is invalid";
      if (!correctPhoneNumber) payload[key] = field;
    }

    if (key === "dob" && value) {
      const DOB_PATTERN = /^\d{4}[-/]\d{2}[-/]\d{2}$/;
      const correctDOB = DOB_PATTERN.test(String(value));

      field = "Date of birth is invalid";
      if (!correctDOB) return (payload[key] = field);
    }
  });

  return Object.keys(payload).length ? payload : false;
}
