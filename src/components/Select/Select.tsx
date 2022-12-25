import React, { KeyboardEvent, useEffect, useState } from "react";
import classes from "./Select.module.css";

type ItemType = {
  title: string;
  value: any;
};

type SelectpropsType = {
  value?: any;
  onChange: (value: any) => void;
  items: Array<ItemType>;
};

export function Select(props: SelectpropsType) {
  const [active, setActive] = useState(false);
  const [hoveredElementValue, setHoveredElementValue] = useState(props.value);

  const selectedItem = props.items.find((el) => el.value === props.value);
  const hoveredItem = props.items.find(
    (el) => el.value === hoveredElementValue
  );

  useEffect(() => {
    setHoveredElementValue(props.value);
  }, [props.value]);

  const toggleItems = () => setActive(!active);

  const onItemClick = (value: ItemType) => {
    props.onChange(value);
    toggleItems();
  };

  const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      for (let i = 0; i < props.items.length; i++) {
        if (props.items[i].value === hoveredElementValue) {
          const pretendentElement =
            event.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1];
          if (pretendentElement) {
            props.onChange(pretendentElement.value);
            return;
          }
        }
      }
      if (!selectedItem) {
        props.onChange(props.items[0].value);
      }
    }

    if (event.key === "Enter" || event.key === "Escape") {
      props.onChange(selectedItem);
      setActive(false);
      console.log(selectedItem);
    }
  };

  return (
    <>
      <div tabIndex={0} className={classes.select} onKeyDown={onKeyDownHandler}>
        <span className={classes.main} onClick={toggleItems}>
          {selectedItem && selectedItem.title}
        </span>
        {active && (
          <div className={classes.items}>
            {props.items.map((i, index) => (
              <div
                onMouseEnter={() => {
                  setHoveredElementValue(i.value);
                }}
                className={
                  classes.item +
                  " " +
                  (hoveredItem === i ? classes.selected : "")
                }
                onClick={() => onItemClick(i.value)}
                key={index}
              >
                {i.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
