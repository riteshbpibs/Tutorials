import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useHistory, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addUsers, getUser, updateUser } from "../redux/action";
import { useSelector } from "react-redux";

function EditUser() {
  const [state, setState] = useState({
    name: "",
    email: "",
    contact: "",
    Address: "",
  });

  const [error, setError] = useState();

  const { id } = useParams();
  const { name, email, contact, Address } = state;
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  useEffect(() => {
    if (user) {
      setState(user);
    }
  }, [user]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !Address || !email || !contact) {
      setError("Please enter all the input");
    } else {
      dispatch(updateUser(id, state));
      history.push("/");
      setError("");
      setState("");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <h2>Edit User</h2>
        {error && <h3 style={{ color: "red" }}>{error}</h3>}
        <Button
          variant="contained"
          style={{ width: "100px" }}
          color="primary"
          onClick={() => history.push("/")}
        >
          Go Back
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          autoComplete="off"
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            width: "500px",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <TextField
            id="standard-basic"
            variant="standard"
            name="name"
            onChange={handleChange}
            label="name"
            type="text"
            value={name}
          />
          <TextField
            id="standard-basic"
            label="email"
            type="email"
            name="email"
            variant="standard"
            onChange={handleChange}
            value={email}
          />
          <TextField
            id="standard-basic"
            label="contact"
            name="contact"
            variant="standard"
            onChange={handleChange}
            type="number"
            value={contact}
          />
          <TextField
            id="standard-basic"
            label="address"
            name="Address"
            variant="standard"
            type="text"
            onChange={handleChange}
            value={Address}
          />
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <Button
              variant="contained"
              style={{ width: "100px" }}
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "50ch" },
          }}
          noValidate
          autoComplete="off"
          style={{ display: "flex", flexDirection: "column" }}
        ></Box>
      </div>
    </div>
  );
}

export default EditUser;
