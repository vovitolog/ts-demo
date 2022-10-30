import React from "react";
import Accordion from "./components/Accordion/Accordion";
import { Rating } from "./components/Rating/Rating";

function App() {
  return (
    <div>
      <PageTitle title={"This is App component"} />
      <PageTitle title={"My Friends"} />
      <Rating />
      <Accordion title={"Menu"} />
      <Accordion title={"Users"} />
      <Rating />
    </div>
  );
}

function PageTitle(props: any) {
  console.log("PageTitle rendering");
  return <h1>{props.title}</h1>;
}

export default App;
