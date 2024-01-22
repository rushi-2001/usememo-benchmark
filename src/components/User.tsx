import { useEffect, useState } from "react";

export const User = () => {
  const [userCount, setUserCount] = useState<number>(0);

  console.log("user count", userCount);

  const userStatus = {
    ACTIVE: 1,
    INACTIVE: 0,
  };

  useEffect(() => {
    console.log("userStatus changed in CHILD Component");

    if (userStatus.ACTIVE) {
      // User is active
    }
  }, [userStatus]);

  useEffect(() => {
    const fetchUsers = async () => {
      console.log("users api");

      const res = await fetch("https://dummyjson.com/users");
      const users: any = await res.json();
      setUserCount(users.users.length);
    };
    fetchUsers();
  }, []);

  return (
    <div
      style={{
        padding: "40px",
        border: "1px solid",
      }}
    >
      <h1>User Count : {userCount}</h1>
    </div>
  );
};
