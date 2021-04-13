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
      <div className="stack-body">
        <h4 className="close" onClick={() => setShowModal((prev) => !prev)}>
          close
        </h4>
        <h1>{stack} Stack Curriculum</h1>
        <table>
          <thead>
            <tr>
              <th className="time-row">WEEK</th>
              <th className="activity-row">TOPICS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="time"> 0</td>
              <td>
                <h3>Orientation - Welcome to Decagon Institute!</h3>
                <p>Orientation - Welcome to Decagon Institute!</p>
              </td>
            </tr>
            <tr>
              <td className="time"> 1 - 4 </td>
              <td>
                <h3>{curr1}</h3>
                <p>{curr1data}</p>
              </td>
            </tr>
            <tr>
              <td className="time"> 5 - 8 </td>
              <td>
                <h3>{curr2}</h3>
                <p>{curr2data}</p>
              </td>
            </tr>
            <tr>
              <td className="time"> 9 - 12</td>
              <td>
                <td>
                  <h3>{curr3}</h3>
                  <p>{curr3data}</p>
                </td>
              </td>
            </tr>
            <tr>
              <td className="time"> 13 - 16</td>
              <td>
                <h3>{curr4}</h3>
                <p>{curr4data}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </PopUpStyle>
  ) : null;
}

export default PopUp;
