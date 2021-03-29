import React from "react";
import { ScheduleStyle } from "./style";

function Schedule() {
  return (
    <ScheduleStyle>
      <table>
        <thead>
          <tr>
            <th className="time-row">TIME</th>
            <th className="activity-row">ACTIVITY</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">9am - 11am </td>
            <td>
              <h3>Instructor Led Class</h3>
              <p>
                Get guidance, feedback, and more from experts who are dedicated
                to supporting your learning and career goals.
              </p>
            </td>
          </tr>
          <tr>
            <td className="time">11am - 12 pm</td>
            <td>
              <h3>Break</h3>
            </td>
          </tr>
          <tr>
            <td className="time">12pm - 2pm</td>
            <td>
              <h3>Algorithms</h3>
              <p>
                Student should be proficient in algorithms, to help them solve
                real life problems.
              </p>
            </td>
          </tr>
          <tr>
            <td className="time">2pm - 3pm</td>
            <td>
              <h3>Break</h3>
            </td>
          </tr>
          <tr>
            <td className="time">3pm - 6pm</td>
            <td>
              <h3>Project/Task Deliverables</h3>
              <p>
                you build will create an amazing portfolio that showcases your
                skills and experience.
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </ScheduleStyle>
  );
}

export default Schedule;
