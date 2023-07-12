import React, { useEffect, useState } from "react";
import styles from "./GeneratedPassword.module.css";
import Button from "../UI/Button";

const PasswordValidator = ({ PasswordValue, rereshbtn, strengthMess, copyBtn, copyState }) => {
  const [password, setPassword] = useState();

  useEffect(() => {
    setPassword(PasswordValue);
  }, [PasswordValue]);

  return (
    <div className={styles.inputField}>
      <div className={styles.inputField_input}>
        <i onClick={() => rereshbtn()} className="fa-solid fa-rotate-right"></i>
        <input type="text" placeholder="Your Password" value={password} />
        <Button onClick={() => copyBtn()} child={copyState} />
      </div>
      <b style={strengthMess==="Strong"?{color:"Green"}:strengthMess==="Medium"?{color:"Orange"}:{color:"Red"}}>{strengthMess}</b>
    </div>
  );
};

export default PasswordValidator;
