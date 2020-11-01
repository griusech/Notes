import React from "react";
import "../Login/Login.css";

import { auth, provider } from "../../firebase";
import { actionTypes } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <img
          src="https://www.savvysme.com.au/themes/savvy_bootstrap/img/upload/images/daily_tasks.jpg"
          alt="todotasks"
        />
        <div className="login__text">
          <h1>Taller AutoCity</h1>
        </div>

        <button onClick={signIn} className="btn" type="submit">
          Inciar Session
        </button>
      </div>
    </div>
  );
};

export default Login;
