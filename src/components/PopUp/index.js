import React from "react";
import { PopUpStyle } from "./style";

function PopUp({
  showModal,
  setShowModal,
  stack,
  curr1,
  curr1data,
  curr2,
  curr2data,
  curr3,
  curr3data,
  curr4,
  curr4data,
}) {
  return showModal ? (
      <PopUpStyle>
        <h4 onClick={() => setShowModal(prev => !prev )}>x</h4>
      <h1>{stack} Stack Curriculum</h1>
      <table>
        <thead>
          <tr>
            <th className="time-row">WEEKS</th>
            <th className="activity-row">COURSES</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">0 - 1 WEEK </td>
            <td>
              <h3>Orientation - Welcome to Decagon Institute!</h3>
              <p>Orientation - Welcome to Decagon Institute!</p>
            </td>
          </tr>
          <tr>
            <td className="time">1 - 4 WEEK </td>
            <td>
              <h3>{curr1}</h3>
              <p>{curr1data}</p>
            </td>
          </tr>
          <tr>
            <td className="time">5 - 8 WEEKS</td>
            <td>
              <h3>{curr2}</h3>
              <p>{curr2data}</p>
            </td>
          </tr>
          <tr>
            <td className="time">9 - 12 WEEKS</td>
            <td>
              <td>
                <h3>{curr3}</h3>
                <p>{curr3data}</p>
              </td>
            </td>
          </tr>
          <tr>
            <td className="time">13 - 16 WEEKS</td>
            <td>
              <h3>{curr4}</h3>
              <p>{curr4data}</p>
            </td>
          </tr>
        </tbody>
      </table>
    </PopUpStyle>
  ) : null;
}

export default PopUp;
