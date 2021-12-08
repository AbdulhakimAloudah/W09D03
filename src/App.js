import React, { useState, useEffect } from "react";
import Tasks from "./components/tasks";
import axios from "axios";
import { login } from "./reducers/login";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const state = useSelector((state) => {
    return state;
  });

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");


  const register = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/signUp`,
        {
          email,
          password,
          role: "61a48733e2e0b47775d129eb",
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const log = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        {
          email: logEmail,
          password: logPassword,
        }
      );

      const data = {
        user: result.data.result,
        token: result.data.token,
      };

      dispatch(login(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {!state.signIn.token ? (
        <>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={register}>Register</button>
          <br />
          <hr />
          <input
            type="email"
            placeholder="logEmail"
            name="logEmail"
            onChange={(e) => setLogEmail(e.target.value)}
          />
          <input
            type="password"
            name="logPassword"
            placeholder="logPassword"
            onChange={(e) => setLogPassword(e.target.value)}
          />
          <button onClick={log}>Login</button>
        </>
      ) : (
        <Tasks />
      )}
    </>
  );
};

export default App;
