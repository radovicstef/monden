import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFromFields] = useState(defaultFormFields);
  const { name, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFromFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Confirm password doesn't match password!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocumentFromAuth({
        ...user,
        displayName: name,
      });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email aready in use");
      } else {
        console.log("User creation error: " + error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h3 className="sign-up-title">Do not have an account</h3>
      <h4 className="sign-up-subtitle">Sign up with your email and password</h4>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-credentials-wrapper">
          <div>
            <input
              type="text"
              required
              className="sign-up-input"
              placeholder="name"
              name="name"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div>
            <input
              type="email"
              required
              className="sign-up-input"
              placeholder="email"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div>
            <input
              type="password"
              required
              className="sign-up-input"
              placeholder="password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>
          <div>
            <input
              type="password"
              required
              className="sign-up-input"
              placeholder="confirm password"
              name="confirmPassword"
              onChange={handleChange}
              value={confirmPassword}
            />
          </div>
        </div>
        <div className="sign-up-button">
          <button type="submit">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
