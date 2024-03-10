
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css";


const RegistrationForm = ({ onSubmit }) => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error } = useContext(AuthContext);


  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if(!credentials.username & !credentials.password){
      alert('Please fill in the field');
      return;
    }else{
      onSubmit(credentials);

    }
   
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
          required
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="email"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="city"
          placeholder="city"
          id="city"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="text"
          placeholder="country"
          id="country"
          onChange={handleChange}
          className="lInput"
        />

        <input
          type="tel"
          placeholder="mobile no"
          id="phone"
          onChange={handleChange}
          className="lInput"
          onKeyDown={(e) => e.key === "Enter" && handleClick(e)}
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Register
        </button>
        <Link to="/login">
        <button className="lButton">
          Already registered? Log in
        </button>
        </Link>
        
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default RegistrationForm;