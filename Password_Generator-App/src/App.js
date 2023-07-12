import { useEffect, useState } from "react";
import "./App.css";
import GeneratedPassword from "./Component/PasswordValidator/GeneratedPassword";
import PasswordInputLogic from "./Component/PasswordValidator/PasswordInputLogic";

function App() {
  const [passLength, setPassLength] = useState(10);
  const [upperCase, setUpperCase] = useState(true);
  const [lowerCase, setLowerCase] = useState(false);
  const [numberCheck, setNumberCheck] = useState(true);
  const [specialCheck, setSpecialCheck] = useState(false);
  const [PasswordValue, setPasswordValue] = useState(false);
  const [strengthMess, setStrengthMess] = useState("");
  const [copyState, setCopyState] = useState("Copy");

  const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
  const lower = "qwertyuiopasdfghjklzxcvbnm";
  const number = "1234567890";
  const special = "!@#$%^&*()?/";

  const rereshbtn = () => {
    passGenerator();
    passwordStrength();
  };
  const copyBtn = () => {
    navigator.clipboard.writeText(PasswordValue);
    setCopyState("Copied");
    setTimeout(() => {
      setCopyState("Copy");
    }, 600);
  };

  const randomNumber = (len) => {
    return Math.floor(Math.random() * len.length);
  };

  const passGenerator = (reRun = "") => {
    if (!upperCase && !lowerCase && !numberCheck && !specialCheck) {
      return setLowerCase(true);
    }
    let pass = "";
    pass += reRun;
    if (upperCase) {
      pass += upper[randomNumber(upper)];
    }
    if (lowerCase) {
      pass += lower[randomNumber(lower)];
    }
    if (numberCheck) {
      pass += number[randomNumber(number)];
    }
    if (specialCheck) {
      pass += special[randomNumber(number)];
    }
    if (pass.length < passLength) {
      return passGenerator(pass);
    }

    const password=pass.slice(0, passLength)
    const sufflePassword=password.split("").sort(()=>Math.random()-0.5).join("")
    console.log(sufflePassword);
    setPasswordValue(sufflePassword);
  };

  const passwordStrength = () => {
    let checkedCount = 0;
    if (upperCase) checkedCount += 1;
    if (lowerCase) checkedCount += 1;
    if (numberCheck) checkedCount += 1;
    if (specialCheck) checkedCount += 1;

    if (checkedCount === 3 || passLength < 12) {
      setStrengthMess("Medium");
    }
    if (checkedCount === 4 || passLength > 20) {
      setStrengthMess("Strong");
    }
    if (checkedCount === 2) {
      setStrengthMess("Weak");
    }
    if (passLength < 8) {
      setStrengthMess("Too short");
    }
  };

  useEffect(() => {
    passGenerator();
    passwordStrength();
  }, [strengthMess]);

  return (
    <div className="App">
      <div className="container">
        <img
          className="lockerIcon"
          src="https://reactjs-password-generator.vercel.app/static/media/password.41b50a01b4d0a0f2c9ba.gif"
          alt="Password Locker"
        />
        <h1 className="passGenText">PASSWORD GENERATOR</h1>
        <p className="passDes">
          Create strong and secure passwords to keep your account safe online.
        </p>
        <GeneratedPassword
          copyState={copyState}
          PasswordValue={PasswordValue}
          strengthMess={strengthMess}
          rereshbtn={rereshbtn}
          copyBtn={copyBtn}
        />
        <PasswordInputLogic
          setPassLength={setPassLength}
          setUpperCase={setUpperCase}
          setLowerCase={setLowerCase}
          setNumberCheck={setNumberCheck}
          setSpecialCheck={setSpecialCheck}
          passLength={passLength}
          upperCase={upperCase}
          lowerCase={lowerCase}
          numberCheck={numberCheck}
          specialCheck={specialCheck}
        />
      </div>
    </div>
  );
}

export default App;
