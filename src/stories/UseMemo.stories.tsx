import React, { useMemo, useState } from "react";

export default {
  title: "Usememo Demo",
};

export const DifficulultCountingExample = () => {
  const [a, setA] = useState(5);
  const [b, setB] = useState(5);

  let resultA = 1;
  let resultB = 1;

  resultA = useMemo(() => {
    let tempResultA = 1;

    for (let i = 1; i <= a; i++) {
      let fake = 0;
      while (fake < 10000) {
        fake++;
        let fakeValue = Math.random();
      }

      tempResultA *= i;
    }
    return tempResultA;
  }, [a]);

  for (let i = 1; i <= b; i++) {
    resultB *= i;
  }

  return (
    <>
      <input
        value={a}
        onChange={(e) => {
          setA(Number(e.currentTarget.value));
        }}
      />
      <input
        value={b}
        onChange={(e) => {
          setB(Number(e.currentTarget.value));
        }}
      />
      <hr />
      <div>Result for a: {resultA}</div>
      <div>Result for b: {resultB}</div>
    </>
  );
};

const UsersSecret = (props: { users: Array<string> }) => {
  console.log("Users");
  return (
    <div>
      {props.users.map((u, i) => (
        <div key={i}>{u}</div>
      ))}
    </div>
  );
};

const Users = React.memo(UsersSecret);

export const HelpsForReactMemo = () => {
  console.log("HelpsForReactMemo");
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(["Vladimir", "Viktor", "Igor"]);

  const addUser = () => {
    return setUsers([...users, "Sveta" + new Date().getTime()]);
  };

  const newArray = useMemo(()=>{
      return users.filter((u) => u.toLowerCase().indexOf("a") > -1);
  }, [users])

  return (
    <>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button onClick={addUser}>add user</button>
      {counter}
      <Users users={newArray} />
    </>
  );
};
