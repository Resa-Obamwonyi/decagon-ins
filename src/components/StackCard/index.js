import React, { useState } from "react";
import { StackCardStyle } from "./style";
import PopUp from "../PopUp";
import { Python, Ios, Java, Csharp, Node, Andriod } from "./data";

function StackCard({ stack, img, cardkey }) {
  const [showModal, setShowModal] = useState({
    status: false,
    stack: undefined,
  });

  const openModal = (stack) => {
    setShowModal((prev) => ({ ...prev, status: !prev.status, stack }));
  };
  return (
    <StackCardStyle>
      {Python.map((python) => (
        <PopUp
          showModal={showModal.status && showModal.stack === "Python"}
          setShowModal={setShowModal}
          stack={python.name}
          curr1={python.curr1}
          curr1data={python.curr1data}
          curr2={python.curr2}
          curr2data={python.curr2data}
          curr3={python.curr3}
          curr3data={python.curr3data}
          curr4={python.curr4}
          curr4data={python.curr4data}
        />
      ))}
      {Ios.map((ios) => (
        <PopUp
          showModal={showModal.status && showModal.stack === "IOS Dev"}
          setShowModal={setShowModal}
          stack={ios.name}
          curr1={ios.curr1}
          curr1data={ios.curr1data}
          curr2={ios.curr2}
          curr2data={ios.curr2data}
          curr3={ios.curr3}
          curr3data={ios.curr3data}
          curr4={ios.curr4}
          curr4data={ios.curr4data}
        />
      ))}
      {Java.map((java) => (
        <PopUp
          showModal={showModal.status && showModal.stack === "Java"}
          setShowModal={setShowModal}
          stack={java.name}
          curr1={java.curr1}
          curr1data={java.curr1data}
          curr2={java.curr2}
          curr2data={java.curr2data}
          curr3={java.curr3}
          curr3data={java.curr3data}
          curr4={java.curr4}
          curr4data={java.curr4data}
        />
      ))}
      {Csharp.map((c) => (
        <div>
          <PopUp
            showModal={showModal.status && showModal.stack === ".NET"}
            setShowModal={setShowModal}
            stack={c.name}
            curr1={c.curr1}
            curr1data={c.curr1data}
            curr2={c.curr2}
            curr2data={c.curr2data}
            curr3={c.curr3}
            curr3data={c.curr3data}
            curr4={c.curr4}
            curr4data={c.curr4data}
          />
        </div>
      ))}
      {Node.map((node) => (
        <PopUp
          showModal={showModal.status && showModal.stack === "Node"}
          setShowModal={setShowModal}
          stack={node.name}
          curr1={node.curr1}
          curr1data={node.curr1data}
          curr2={node.curr2}
          curr2data={node.curr2data}
          curr3={node.curr3}
          curr3data={node.curr3data}
          curr4={node.curr4}
          curr4data={node.curr4data}
        />
      ))}
      {Andriod.map((and) => (
        <PopUp
          showModal={showModal.status && showModal.stack === "Andriod Dev"}
          setShowModal={setShowModal}
          stack={and.name}
          curr1={and.curr1}
          curr1data={and.curr1data}
          curr2={and.curr2}
          curr2data={and.curr2data}
          curr3={and.curr3}
          curr3data={and.curr3data}
          curr4={and.curr4}
          curr4data={and.curr4data}
        />
      ))}
      <div className="img">
        <img src={img} alt="stack-logo" />
      </div>
      <div className="content">
        <h4>{stack} Stack</h4>
        <p onClick={() => openModal(stack)}>View Curriculum</p>
      </div>
    </StackCardStyle>
  );
}

export default StackCard;
