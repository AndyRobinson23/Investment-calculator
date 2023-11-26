const InputForm = ({ onInputChange, userInput }) => {
  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onInputChange('initialInvestment', e.target.value)}
          ></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(e) => onInputChange('annualInvestment', e.target.value)}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(e) => onInputChange('expectedReturn', e.target.value)}
          ></input>
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(e) => onInputChange('duration', e.target.value)}
          ></input>
        </p>
      </div>
    </form>
  );
};

export default InputForm;
