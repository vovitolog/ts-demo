import React from "react";
import Accordion from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";

function App() {
  return (
    <div>
      {/*<PageTitle title={"This is App component"} />*/}
      {/*<PageTitle title={"My Friends"} />*/}
      {/*<UncontrolledRating value={5} />*/}
      <UncontrolledRating />
      <UncontrolledAccordion titleValue={"Menu"} />
      <UncontrolledAccordion titleValue={"Users"} />
      <OnOff />
      <OnOff />
      <OnOff />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  console.log("PageTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
