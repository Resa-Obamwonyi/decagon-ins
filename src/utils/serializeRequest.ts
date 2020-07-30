export default function serializeRequest(data: any) {
  const payload = {} as { [key: string]: string };

  data.forEach(([key, value]: string[]) => {
    switch (key) {
      case "firstName":
        payload["First name"] = value;
        break;

      case "lastName":
        payload["Last name"] = value;
        break;

      case "gender":
        payload["Gender"] = value;
        break;

      case "DOB":
        payload["Date of birth"] = value;
        break;

      case "phoneNumber":
        payload["Phone number"] = value;
        break;

      case "emailAddress":
        payload["Email address"] = value;
        break;

      case "stateOfOrigin":
        payload["State of origin"] = value;
        break;

      case "currentLocation":
        payload["Current location"] = value;
        break;

      case "qualification":
        payload["Qualification"] = value;
        break;

      case "institution":
        payload["Institution"] = value;
        break;

      case "gradeAchieved":
        payload["Grade achieved"] = value;
        break;
        
      case "graduationPercentile":
        payload["Graduation Percentile"] = value;
        break;

      case "courseStudied":
        payload["Course of study"] = value;
        break;

      case "NYSCStatus":
        payload["NYSC status"] = value;
        break;

      case "programmingExperience":
        payload["Programming experience"] = value;
        break;

      case "paymentOption":
        payload["Payment option"] = value;
        break;

      case "heardAboutUs":
        payload["Heard about us"] = value;
        break;

      default:
        break;
    }
  });

  const currentDate = new Date();

  const applicationDate = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(currentDate);

  const applicationTime = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  }).format(currentDate);

  return {
    ...payload,
    "Application Date": applicationDate,
    "Application Time": applicationTime,
  };
}
