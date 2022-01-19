import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import './Login.css';
import {auth} from "../firebase";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const signIn = (event) => {
    event.preventDefault();

    // firebase login
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          navigate('/');
        }
      }).catch((error) => {
      alert(error.message);
    });
  };

  const register = (event) => {
    event.preventDefault();

    // firebase register
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          navigate('/');
        }
      }).catch((error) => {
      alert(error.message);
    });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
          alt=""
          className="login__logo"
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>Email</h5>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>

          <button type="submit" className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Amazon Fake Clone's Conditions of Use & Sale. Please see our Privacy Notice,
          our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
