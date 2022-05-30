import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  //component did mount
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-wrapper">
      <div className="sign-in-container">
        <h3 className="sign-in-title">Already have an account</h3>
        <h4 className="sign-in-subtitle">
          Sign in with your email and password
        </h4>
        <div className="sign-in-credentials-wrapper">
          <div>
            <input className="sign-in-input" placeholder="username" />
          </div>
          <div>
            <input className="sign-in-input" placeholder="password" />
          </div>
        </div>
        <div className="sign-in-buttons">
          <button>Sign in</button>
          <button>Sign in with Google</button>
        </div>
      </div>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
