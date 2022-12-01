import React, { useState } from "react";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

function App() {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  const [switchOn, setSwitchOn] = useState<boolean>(true);

  return (
    <div>
      <OnOff on={switchOn} onChange={setSwitchOn} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
