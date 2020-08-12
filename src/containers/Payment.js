import React, { useState } from 'react';
import Navbar from './../components/Navbar'
import PaymentTable from './../components/PaymentTable';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function Payment({history}) {
  const [usernameState, setUsername] = useState("");
  const [emailState, setEmail] = useState("");
  const [addressState, setAddress]= useState("");

  const handleUserProfile = (type, event) => {
    if(type === "username") {
      setUsername(event.target.value)
    } else if(type === "email") {
      setEmail(event.target.value)
    } else if(type === "address") {
      setAddress(event.target.value)
    }
  };

  const handlePayNow = () => {
    console.log(usernameState, emailState, addressState)
    alert("Payment success")
    window.localStorage.removeItem("productsCart")
    history.push("/")
  };

  return (
    <>
      <Navbar
        history={history}
      />
      <PaymentTable/>
      <p>User Profile</p>

      <TextField
        placeholder="Name"
        onChange={handleUserProfile.bind(this, "username")}
      /><br/>
      <TextField
        placeholder="Email"
        onChange={handleUserProfile.bind(this, "email")}
      /><br/>
      <TextField
        placeholder="Address"
        onChange={handleUserProfile.bind(this, "address")}
      />
      <br/>
      <Button
        onClick={handlePayNow}
      >
        Pay Now
      </Button>
    </>
  )
}