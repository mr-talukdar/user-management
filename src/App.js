import { useState } from "react";
import "./App.css";
import InputUser from "./Input-User/InputUser";
import UserDisplay from "./User-Display/UserDisplay";

const DUMMY_DATA = [
  { user: "test1", age: "22" },
  { user: "test2", age: "23" },
];

function App() {
  const [userData, setUserData] = useState([]);

  const addUSerHandler = (addedUser) => {
    setUserData((prefUser) => {
      return [addedUser, ...prefUser];
    });
    console.log(userData);
  };

  console.log(userData.length);

  return (
    <div className="bg-primary w-full h-screen flex flex-col p-10 gap-4">
      <InputUser addUser={addUSerHandler} />
      
      <UserDisplay data={userData} />
    </div>
  );
}

export default App;
