type ApplicationType = { [key: string]: string };

export default function validateApplication(data: any) {
  const payload = {} as ApplicationType;

  Object.entries(data).forEach(([key, value]) => {
    // VALIDATE ALL FORM FIELDS ON FORM SUBMIT
    let field = "";
    if (!value) {
      switch (key) {
        case "firstName":
          field = "First name is required";
          break;
        case "lastName":
          field = "Last name is required";
          break;
        case "DOB":
          field = "Date of birth is required";
          break;
        case "phoneNumber":
          field = "Phone number is required";
          break;
        case "emailAddress":
          field = "Email is required";
          break;
        case "institution":
          field = "Institution is required";
          break;
        case "courseStudied":
          field = "Course of study is required";
          break;
        case "NYSCStatus":
          field = "NYSC status is required";
          break;
        case "currentLocation":
          field = "Current location is required";
          break;
        case "stateOfOrigin":
          field = "State of origin is  required";
          break;
        case "gradeAchieved":
          field = "Grade is required";
          break;
        case "paymentOption":
          field = "Select an option";
          break;
        case "programmingExperience":
          field = "Select an option";
          break;
        case "qualification":
          field = "Select an option";
          break;
        case "heardAboutUs":
          field = "Select an option";
          break;

        default:
          break;
      }

      payload[key] = field;
    }

    // REMOVE LOADING AS ERROR FIELD
    delete payload["loading"];

    // VALIDATE EMAIL INPUT ON THE FORM
    if (key === "emailAddress" && value) {
      const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const correctEmailAddress = EMAIL_PATTERN.test(
        String(value).toLowerCase()
      );
      field = "Email address is invalid";
      if (!correctEmailAddress) payload[key] = field;
    }

    if (key === "phoneNumber" && value) {
      const PHONE_PATTERN = /^(\+234|0)\d{10}$/;
      const correctPhoneNumber = PHONE_PATTERN.test(String(value));

      field = "Phone number is invalid";
      if (!correctPhoneNumber) payload[key] = field;
    }

    if (key === "DOB" && value) {
      const DOB_PATTERN = /^\d{4}[-/]\d{2}[-/]\d{2}$/;
      const correctDOB = DOB_PATTERN.test(String(value));

      field = "Date of birth is invalid";
      if (!correctDOB) return (payload[key] = field);
    }
  });

  return Object.keys(payload).length ? payload : false;
}
