export default function serializeRequest(data: any) {
  const payload = {} as { [key: string]: string };

  data.forEach(([key, value]: string[]) => {
    switch (key) {
      case "firstName":
        payload["FIRST NAME"] = value;
        break;

      case "lastName":
        payload["LAST NAME"] = value;
        break;

      case "gender":
        payload["GENDER"] = value;
        break;

      case "DOB":
        payload["DATE OF BIRTH"] = value;
        break;

      case "phoneNumber":
        payload["PHONE NUMBER"] = value;
        break;

      case "emailAddress":
        payload["EMAIL ADDRESS"] = value;
        break;

      case "stateOfOrigin":
        payload["STATE OF ORIGIN"] = value;
        break;

      case "currentLocation":
        payload["LOCATION"] = value;
        break;

      case "qualification":
        payload["DEGREE"] = value;
        break;

      case "institution":
        payload["INSTITUTION"] = value;
        break;

      case "gradeAchieved":
        payload["GRADE ACHIEVED"] = value;
        break;
        
      case "graduationPercentile":
        payload["Graduation Percentile"] = value;
        break;

      case "courseStudied":
        payload["COURSE"] = value;
        break;

      case "NYSCStatus":
        payload["NYSC"] = value;
        break;

      case "programmingExperience":
        payload["PROGRAMMING SKILL"] = value;
        break;

      case "paymentOption":
        payload["PAYMENT OPTION"] = value;
        break;

      case "heardAboutUs":
        payload["HEARD ABOUT US"] = value;
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
    "APPLICATION DATE": applicationDate,
    "APPLICATION TIME": applicationTime,
  };
}
