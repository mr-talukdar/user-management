import React from "react";

function InvalidInput(props) {

    const onClickHandler=(event)=>{
        event.preventDefault();
        props.validToggle();
    }
  return (
    <div
      className={
        props.active
          ? "flex  backdrop-blur-md  bg-gray/70 fixed inset-0"
          : "hidden"
      }
    >
      <div className="w-3/6 h-2/6 bg-white ml-60 self-center rounded-lg ">
        <form className="w-full  h-full">
          <div className="bg-secondary w-full h-fit rounded-t-lg text-white p-3">
            Invalid Input
          </div>
          <div className=" text-xs px-3 py-10">
            Please Enter a valid name and age(non-empty values).{" "}
          </div>
          <div className=" ml-96 pl-32 w-fit h-fit">
          <button className="bg-secondary rounded self-center text-white py-1 px-2" type="submit" onClick={onClickHandler}>Okay</button>
          </div>
        
        </form>
      </div>
    </div>
  );
}

export default InvalidInput;
