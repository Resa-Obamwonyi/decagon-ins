import React, {useState} from 'react';
import { QuestionStyle } from './style';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { faqOne, faqTwo, faqThree } from './data';


const faq1 = () => {
    return (
      <div className="accordion-div">
        <Accordion allowZeroExpanded className="accordion">
          {faqOne.map((faqOne) => (
            <AccordionItem key={faqOne.question}>
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-title">
                          {faqOne.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <hr />
              <AccordionItemPanel className="accordion-content">
                {faqOne.answer}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
}

const faq2 = () => {
    return (
      <div className="accordion-div">
        <Accordion allowZeroExpanded className="accordion">
          {faqTwo.map((faqTwo) => (
            <AccordionItem key={faqTwo.question}>
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-title">
                  {faqTwo.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <hr />
              <AccordionItemPanel className="accordion-content">
                {faqTwo.answer}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
};

const faq3 = () => {
    return (
      <div className="accordion-div">
        <Accordion allowZeroExpanded className="accordion">
          {faqThree.map((faqThree) => (
            <AccordionItem key={faqThree.question}>
              <AccordionItemHeading>
                <AccordionItemButton className="accordion-title">
                  {faqThree.question}
                </AccordionItemButton>
              </AccordionItemHeading>
              <hr />
              <AccordionItemPanel className="accordion-content">
                {faqThree.answer}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    );
};
const Questions = () => {

    const [show, setShow] = useState({key:0})
    const handleClick = (key) => {
        setShow((prev)=>({...prev,key:key}))
    }

    return (
      <QuestionStyle show={show}>
        <div className="transition-buttons">
          <span
            className={`${show.key === 0 ? "active" : null}`}
            onClick={() => handleClick(0)}
          >
            About the Process
          </span>
          <span
            className={`${show.key === 1 ? "active" : null}`}
            onClick={() => handleClick(1)}
          >
            About the Program
          </span>
          <span
            className={`${show.key === 2 ? "active" : null}`}
            onClick={() => handleClick(2)}
          >
            About the Loan
          </span>
            </div>
            {show.key===0?faq1(): show.key===1?faq2(): show.key===2?faq3(): null}
      </QuestionStyle>
    );
}


export default Questions