import styles from "./PasswordInputLogic.module.css";

const PasswordInputLogic = ({
  setPassLength,
  setUpperCase,
  setLowerCase,
  setNumberCheck,
  setSpecialCheck,
  passLength,
  upperCase,
  lowerCase,
  numberCheck,
  specialCheck,
}) => {
  return (
    <div>
      <div className={styles.rangeInput}>
        <p>Password Length: {passLength}</p>
        <input
          type="range"
          min={5}
          max={30}
          value={passLength}
          onChange={(e) => setPassLength(e.target.value)}
        />
      </div>
      <div className={styles.checkInput_Box}>
        <div>
          <p>Uppercase</p>
          <input
            type="checkbox"
            checked={upperCase}
            onChange={(e) => setUpperCase(e.target.checked)}
          />
        </div>
        <div>
          <p>Lowercase</p>
          <input
            type="checkbox"
            checked={lowerCase}
            onChange={(e) => setLowerCase(e.target.checked)}
          />
        </div>
        <div>
          <p>Numbers</p>
          <input
            type="checkbox"
            checked={numberCheck}
            onChange={(e) => setNumberCheck(e.target.checked)}
          />
        </div>
        <div>
          <p>Special Characters</p>
          <input
            type="checkbox"
            checked={specialCheck}
            onChange={(e) => setSpecialCheck(e.target.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordInputLogic;
