import React, { useState } from "react";

function InputForm(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const setNameHandler = (event) => {
    setName((prevName) => event.target.value);
  };

  const setAgeHandler = (event) => {
    setAge((prevAge) => event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (name === "" || age === "") {
      props.invalid();
    } else {
      const data = {
        user: name,
        age: age,
      };
      props.addUser(data);
      console.log(data.key);
      console.log(data.user);
      console.log(data.age);
      setAge("");
      setName("");
    }
  };

  return (
    <div className=" ">
      <form className="flex flex-col gap-2">
        <label>Username</label>
        <input className="border-2" value={name} onChange={setNameHandler} />
        <label>Age(Years)</label>
        <input className="border-2" value={age} onChange={setAgeHandler} type="number" />
        <button
          className=" bg-secondary w-full sm:w-1/4 text-white p-1"
          type="submit"
          onClick={onSubmitHandler}
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default InputForm;
