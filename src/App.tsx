import React, { useState } from "react";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);

  return (
    <div>
      <Accordion
        titleValue={"Callback"}
        collapsed={accordionCollapsed}
        onChange={() => setAccordionCollapsed(!accordionCollapsed)}
      />
      {/*<UncontrolledRating />*/}
      {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
      {/*<UncontrolledAccordion titleValue={"Menu"} />*/}
      {/*<UncontrolledAccordion titleValue={"Users"} />*/}
      {/*<OnOff />*/}
      {/*<OnOff />*/}
      {/*<OnOff />*/}
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
