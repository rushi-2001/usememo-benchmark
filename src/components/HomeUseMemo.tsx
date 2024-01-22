import { useEffect, useMemo, useState } from "react";
import { User } from "./User";

export const HomeUseMemo = () => {
  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount(count + 1);
  };

  const userStatus = useMemo(() => {
    return {
      ACTIVE: 1,
      INACTIVE: 0,
    };
  }, []);

  const message = useMemo(() => {
    let message: string = "";
    console.log("App -> inside useMemo");

    if (count % 5 === 0) {
      message = `Number is divisible by 5 | Number -> ${count}`;
    } else if (count % 3 === 0) {
      message = `Number is divisible by 3 | Number -> ${count}`;
    } else if (count % 2 === 0) {
      message = `Number is divisible by 2 | Number -> ${count}`;
    } else {
      message = `Number -> ${count}`;
    }
    return message;
  }, [count]);

  useEffect(() => {
    console.log("userStatus changed");

    if (userStatus.ACTIVE) {
      // User is active
    }
  }, [userStatus]);

  console.log("\n*****************\n");
  console.log("count : ", count);
  console.log("message : ", message);

  return (
    <>
      <div
        style={{
          margin: "10px",
          padding: "40px",
        }}
      >
        <h1>useMemo</h1>

        <button
          style={{
            padding: "10px",
            border: "1px solid",
            borderRadius: "10px",
            boxShadow: "0 1px",
            paddingBlock: "15px",
            paddingInline: "30px",
            backgroundColor: "#eda6c1",
            fontSize: "20px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={increment}
        >
          Increment
        </button>
        <h2>{count}</h2>
        <h3>{message}</h3>
      </div>
      {/* <User /> */}
    </>
  );
};
