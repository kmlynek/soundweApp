import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

const LoginForm = () => {
  const { users, setCurrentUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email && u.haslo === password);
    if (user) {
      setCurrentUser(user);
      navigate("/ustawienia-konta");
    } else {
      setError("Nieprawidłowy e-mail lub hasło");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="mb-3">
        <span className="input-group-text">
          <i className="bx bxs-user-circle fs-2" style={{ maxWidth: "30px", marginRight: "10px" }} />
          <input
            type="text"
            className="form-control form-control w-100"
            placeholder="e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
      </div>
      <div className="mb-3">
        <span className="input-group-text">
          <i className="bx bxs-lock-alt fs-2" style={{ maxWidth: "30px", marginRight: "10px" }} />
          <input
            type="password"
            className="form-control form-control w-100"
            placeholder="hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="input-group mb-3 d-flex justify-content-between">
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="formCheck" />
          <label htmlFor="formCheck" className="form-check-label text-secondary">
            <small>Zapamiętaj mnie</small>
          </label>
        </div>
        <div>
          <small>
            <a className="text-light">
              Utwórz nowe hasło
            </a>
          </small>
        </div>
      </div>
      <div className="loginBtn">
        <button type="submit" className="btn btn-primary w-100" id="saveBtn">
          Zaloguj
        </button>
      </div>
      <div className="text-center">
        <small>
          Nie masz konta?{" "}
          <Link to="/rejestracja" className="link">
            <span style={{ color: "#f8b296" }}>Zarejestruj się</span>
          </Link>
        </small>
      </div>
    </form>
  );
};

export default LoginForm;
