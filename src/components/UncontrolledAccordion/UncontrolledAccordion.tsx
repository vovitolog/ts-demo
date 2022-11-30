import React from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};

function Accordion(props: AccordionPropsType) {
  return props.collapsed ? (
    <div>
      <AccordionTitle title={props.titleValue} />
      <AccordionBody />
    </div>
  ) : (
    <div>
      <AccordionTitle title={props.titleValue} />
    </div>
  );
}
type AccordionTitleType = {
  title: string;
};
function AccordionTitle(props: AccordionTitleType) {
  console.log("AccordionTitle Rendering");
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

export default Accordion;
