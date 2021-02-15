export const errorHandler = (status: number, type: string) => {
  let error;
  let message;

  switch (type) {
    case "Cycle closed":
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

    default:
      error = "error server"
      break;
  }

  return error
}
