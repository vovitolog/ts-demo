import React, { useReducer } from "react";
import { reducer, TOGGLE_CONSTANT } from "./reducer";

export type AccordionPropsType = {
  titleValue: string;
};

export function UncontrolledAccordion(props: AccordionPropsType) {
  const [state, dispatch] = useReducer(reducer, { collapsed: false });

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => {
          dispatch({ type: TOGGLE_CONSTANT });
        }}
      />
      {state.collapsed && <AccordionBody />}
    </div>
  );
}

type AccordionTitleType = {
  title: string;
  onClick: () => void;
};

function AccordionTitle(props: AccordionTitleType) {
  return (
    <h3
      onClick={() => {
        props.onClick();
      }}
    >
      {props.title}
    </h3>
  );
}

function AccordionBody() {
  return (
    <>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
}

export default UncontrolledAccordion;
