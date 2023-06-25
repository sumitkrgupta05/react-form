import React, { useState } from "react";

const App = () => {
  // hook useState
  // current_state , update_state = initilization_state
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();
  const [lastName, setLastName] = useState("");
  const [lastNamenew, setLastNamenew] = useState();

  const inputEvent = (event) => {
    setName(event.target.value);
  };

  const inputEventTwo = (event) => {
    setLastName(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault(); //stop default behaviour of form
    setFullName(name);
    setLastNamenew(lastName);
  };

  return (
    <>
      <div className="main_div">
        <form action="" onSubmit={onSubmit}>
          <div>
            <h1>
              Hello {fullName} {lastNamenew}
            </h1>
            <input
              type="text"
              placeholder="Enter your name"
              onChange={inputEvent}
              value={name}
            />
            <br />
            <input
              type="text"
              placeholder="Enter your last name"
              onChange={inputEventTwo}
              value={lastName}
            />
            <button type="submit">Click Me </button>
          </div>
        </form>
      </div>
    </>
  );
};

// export default App;
