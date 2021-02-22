export const errorHandler = (status: number, type: string) => {
  let error;
  let message;

  switch (type) {
    case "update":
      message = "Dear Applicant, The cycle has closed and information update requests cannot be made at this time till another cycle begins."
      break;

    default:
      message = ""
      break;
  }

  switch (status) {
    case 400:
      error = message
      break;

    case 404:
      error = "Applicant not found"
      break;  

    default:
      error = "Server error"
      break;
  }

  return error
}
