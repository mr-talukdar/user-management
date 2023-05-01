import React from "react";

function UserItem(props) {



  return (
    <div key={Math.random().toString()} className="border-2 w-full p-1 font-medium">
      {props.uname + "( " + props.age + " years old )"}
    </div>
    // {props.text}
  );
}

export default UserItem;
