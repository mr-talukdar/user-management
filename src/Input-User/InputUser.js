import React from "react";
import InputForm from "./InputForm/InputForm";
import InvalidInput from "./InvalidInput/InvalidInput";
import { useState } from "react";

function InputUser(props) {

  const[valid, setValid]=useState(false);
  console.log(valid);

  const validToggleHandler=()=>{
      setValid(prevValue=>!valid);
  }

  const onNewUser=(NewUserData)=>{
    const UserData={
      ...NewUserData,
      id: Math.random().toString(),
    };

    props.addUser(UserData);
  }

  return (
    <div className="self-center bg-white rounded p-8 w-full font-bold">
      <InputForm addUser={onNewUser} invalid={validToggleHandler} />
      <InvalidInput active={valid} validToggle={validToggleHandler} />
    </div>
  );
}

export default InputUser;
