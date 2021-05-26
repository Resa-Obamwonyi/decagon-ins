import * as Yup from "yup";

const phoneRegExp = /(^[0]\d{10}$)|(^[+]?[234]\d{12}$)/;

export const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("First name is required.")
    .min(5, "First name is too short, must be at least 5 Characters long."),
  last_name: Yup.string()
      .required("Last name is required.")
      .min(5, "Last name is too short, must be at least 5 Characters long."),
  gender: Yup.string().required("Gender is required."),
  dob: Yup.string().required("Date of Birth is required."),
  phone_number: Yup.string().required("Phone Number is required.")
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(11, "Phone number is invalid"),
  email: Yup.string().email().required("Email is required."),
  state_of_origin: Yup.string().required("State of Origin is required."),
  current_location: Yup.string().required("Location is required."),
  highest_qualification: Yup.string().required("Qualification is required."),
  institution: Yup.string().required("Institution is required."),
  course_of_study: Yup.string().required("Course is required."),
  degree: Yup.string().required("Grade is required."),
  programming_experience: Yup.string().required("Experience is required."),
  nysc_status: Yup.string().required("NYSC is required."),
  payment_option: Yup.string().required("Payment Option is required."),
  guarantor: Yup.string().required("Guarantor is required."),
  hear_about_us: Yup.string().required(
    "Where did you hear about us section is required."
  ),
});
