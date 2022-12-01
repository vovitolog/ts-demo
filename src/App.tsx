import React, { useState } from "react";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  return (
    <div>
      {/*<PageTitle title={"This is App component"} />*/}
      {/*<PageTitle title={"My Friends"} />*/}
      {/*<UncontrolledRating value={5} />*/}
      <Rating value={ratingValue} onClick={setRatingValue} />
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
