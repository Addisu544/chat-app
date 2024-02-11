import { useState } from "react";
import axios from "axios";

const projectID = "a9c57f1d-73c9-4f3a-bf67-b7f25e3bdda4";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
      setError("");
    } catch (err) {
      setError("login failed. Double check that your username and password.");
    }
  };

  return (
    <div className="App">
      <h2>Sign in/up Form</h2>
      <div className="container " id="container">
        <div className="form-container sign-in-container">
          <form class="login-form" onSubmit={handleSubmit}>
            <h1 className="appname">messenger</h1>

            <input
              class="login-input"
              type="text"
              placeholder="user name"
              name="f"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onSubmit={handleSubmit}
            />

            <input
              class="login-input"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" class="login-button">
              Sign In
            </button>
            <p className="error">{error}</p>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start chatting with us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
