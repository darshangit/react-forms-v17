import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: fnHasError,
    valueChangeHandler: fnValueChangeHandler,
    inputBlurHandler: fnInputBlurHandler,
    reset: fnReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lnHasError,
    valueChangeHandler: lnValueChangeHandler,
    inputBlurHandler: lnInputBlurHandler,
    reset: lnReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailValueChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!lastNameIsValid || !firstNameIsValid || !emailIsValid) {
      return;
    }
    lnReset();
    fnReset();
    emailReset();
  };

  const fNameInputClasses = fnHasError
    ? "form-control invalid"
    : "form-control";

  const lNameInputClasses = lnHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={fNameInputClasses}>
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            onChange={fnValueChangeHandler}
            onBlur={fnInputBlurHandler}
            value={firstName}
          />
          {fnHasError && <p>F name is Invalid</p>}
        </div>
        <div className={lNameInputClasses}>
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            onChange={lnValueChangeHandler}
            onBlur={lnInputBlurHandler}
            value={lastName}
          />
          {lnHasError && <p>L name is Invalid</p>}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={emailValueChangeHandler}
          onBlur={emailInputBlurHandler}
          value={email}
        />
        {emailHasError && <p>Email is Invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
