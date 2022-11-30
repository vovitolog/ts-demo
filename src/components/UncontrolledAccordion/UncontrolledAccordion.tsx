import React, { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
};

function UncontrolledAccordion(props: AccordionPropsType) {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      <button onClick={() => setCollapsed(!collapsed)}>TOGGLE</button>;
      {collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitleType = {
  title: string;
};

function AccordionTitle(props: AccordionTitleType) {
  return <h3>{props.title}</h3>;
}

function AccordionBody() {
  console.log("AccordionBody Rendering");
  return (
    <>
      {" "}
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}

export default UncontrolledAccordion;
