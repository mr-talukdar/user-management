import React from "react";
import UserItem from "./User Item";

function UserDisplay(props) {
  if (props.data.length === 0) {
    return (
      <div className="self-center p-2 bg-white w-full flex flex-col gap-2 rounded-md">
        No User Data! Please add some.
      </div>
    );
  }
  return (
    <div className="self-center p-2 bg-white w-full flex flex-col gap-2 rounded-md">
      {props.data.map((user) => (
        <UserItem key={props.id} uname={user.user} age={user.age} />
      ))}
    </div>
  );
}

export default UserDisplay;
