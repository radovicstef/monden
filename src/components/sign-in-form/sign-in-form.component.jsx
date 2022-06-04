import { useState, useContext } from "react";

import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await signInAuthWithEmailAndPassword(email, password);
      setCurrentUser(response.user);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password!");
          break;
        case "auth/user-not-found":
          alert("No user found with this email!");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h3 className="sign-in-title">Already have an account</h3>
      <h4 className="sign-in-subtitle">Sign in with your email and password</h4>
      <form onSubmit={handleSubmit}>
        <div className="sign-in-credentials-wrapper">
          <div>
            <input
              type="email"
              required
              className="sign-in-input"
              placeholder="username"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              required
              className="sign-in-input"
              placeholder="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="sign-in-buttons">
          <button type="submit">Sign in</button>
          <button type="button" onClick={signInWithGoogle}>
            Sign in with Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
