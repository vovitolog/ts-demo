import React, { useState } from "react";
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
  const [active, setActive] = useState(true);

  const selectedItem = props.items.find((el) => el.value === props.value);

  const toggleItems = () => setActive(!active);
  const onItemClick = (value: ItemType) => {
    props.onChange(value);
    toggleItems();
  };

  return (
    <>
      <select>
        <option value="">Moscow</option>
        <option value="">Khimki</option>
        <option value="">Piter</option>
      </select>
      <div className={classes.select}>
        <span className={classes.main} onClick={toggleItems}>
          {selectedItem && selectedItem.title}
        </span>
        {active && (
          <div className={classes.items}>
            {props.items.map((i, index) => (
              <div onClick={() => onItemClick(i.value)} key={index}>
                {i.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
