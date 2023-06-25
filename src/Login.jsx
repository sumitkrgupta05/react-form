import React, { useState } from "react";

const Login = () => {
  // hook useState
  // current_state , update_state = initilization_state
  const [fullName, setfullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone:"",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    
    // const value = event.target.value;
    // const name = event.target.name;

    const { value , name } = event.target; //object destruction

    setfullName((preValue)=>{ 
    // console.log(preValue);
    if(name === "fName"){
      return {
        fname: value,
        lname: preValue.lname,
        email: preValue.email,
        phone: preValue.phone,
      };
    }
    else if (name === "lName"){
      return {
        fname: preValue.fname,
        lname: value,
        email: preValue.email,
        phone: preValue.phone,
      };
    }
    else if (name === "email"){
      return {
        fname: preValue.fname,
        lname: preValue.lname,
        email: value,
        phone: preValue.phone,
      };
    }
    else if (name === "phone"){
      return {
        fname: preValue.fname,
        lname: preValue.lname,
        email: preValue.email,
        phone: value,
      };
    }
    });
  };


  const onSubmit = (event) => {
    event.preventDefault(); //stop default behaviour of form
    alert("Form Submited")
  };

  return (
    <>
      <div className="main_div">
        <form action="" onSubmit={onSubmit}>
          <div>
            <h1>
              Hello {fullName.fname} {fullName.lname}
            </h1>
            <p>{fullName.email}</p>
            <p>{fullName.phone}</p>
            <input
              type="text"
              placeholder="Enter your name"
              name="fName"
              onChange={inputEvent}
              value={fullName.fname}
            />
            <input
              type="text"
              placeholder="Enter your last name"
              name="lName"
              onChange={inputEvent}
              value={fullName.lname}
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={inputEvent}
              value={fullName.email}
              autoComplete="off" //hidding the prev. entered emails
            />
            <input
              type="number"
              placeholder="Enter your mobile number"
              name="phone"
              onChange={inputEvent}
              value={fullName.phone}
            />
            <button type="submit">Click Me </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
