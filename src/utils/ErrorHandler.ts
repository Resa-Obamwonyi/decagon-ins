export const errorHandler = (status: number, type: string) => {
  let error;
  let message;

  switch (type) {
    case "update":
      message = "Cycle is closed"
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
