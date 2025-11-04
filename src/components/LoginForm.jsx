import { useState } from "react";
import axios from "axios";

const projectID = "a9c57f1d-73c9-4f3a-bf67-b7f25e3bdda4";

const Modal = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

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
    } catch (err) {
      setError("Login failed. Please check your username and password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="messenger-auth-container">
      <div className="messenger-auth-card">
        <div className="messenger-auth-content">
          <div className="messenger-auth-header">
            <div className="messenger-auth-icon">
              <svg className="messenger-auth-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h1 className="messenger-auth-title">Welcome to Messenger</h1>
            <p className="messenger-auth-subtitle">Sign in to start chatting with your friends</p>
          </div>

          <form onSubmit={handleSubmit} className="messenger-auth-form">
            <div className="messenger-form-group">
              <label htmlFor="username" className="messenger-form-label">
                Username
              </label>
              <div className="messenger-input-wrapper">
                <input
                  id="username"
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="messenger-form-input"
                  placeholder="Enter your username"
                />
                <div className="messenger-input-icon">
                  <svg className="messenger-input-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="messenger-form-group">
              <label htmlFor="password" className="messenger-form-label">
                Password
              </label>
              <div className="messenger-input-wrapper">
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="messenger-form-input"
                  placeholder="Enter your password"
                />
                <div className="messenger-input-icon">
                  <svg className="messenger-input-icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
              </div>
            </div>

            {error && (
              <div className="messenger-error-message">
                <svg className="messenger-error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="messenger-submit-button"
            >
              {isLoading ? (
                <>
                  <svg className="messenger-spinner" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="messenger-spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="messenger-spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign In to Messenger"
              )}
            </button>
          </form>

          <div className="messenger-auth-footer">
            <p className="messenger-footer-text">
              Don't have an account? <span className="messenger-footer-highlight">Your username will be created automatically</span>
            </p>
          </div>
        </div>
        
        <div className="messenger-legal-footer">
          <p className="messenger-legal-text">
            By signing in, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>

      <style jsx>{`
        .messenger-auth-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }

        .messenger-auth-card {
          max-width: 28rem;
          width: 100%;
          background: white;
          border-radius: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }

        .messenger-auth-content {
          padding: 2rem;
        }

        .messenger-auth-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .messenger-auth-icon {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .messenger-auth-icon-svg {
          width: 2rem;
          height: 2rem;
          color: white;
        }

        .messenger-auth-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .messenger-auth-subtitle {
          color: #6b7280;
        }

        .messenger-auth-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .messenger-form-group {
          display: flex;
          flex-direction: column;
        }

        .messenger-form-label {
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .messenger-input-wrapper {
          position: relative;
        }

        .messenger-form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          transition: all 0.2s;
        }

        .messenger-form-input:focus {
          outline: none;
          ring: 2px;
          ring-color: #3b82f6;
          border-color: #3b82f6;
        }

        .messenger-input-icon {
          position: absolute;
          right: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .messenger-input-icon-svg {
          width: 1.25rem;
          height: 1.25rem;
          color: #9ca3af;
        }

        .messenger-error-message {
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          color: #dc2626;
          padding: 0.75rem 1rem;
          border-radius: 0.5rem;
          display: flex;
          align-items: center;
          font-size: 0.875rem;
        }

        .messenger-error-icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.5rem;
        }

        .messenger-submit-button {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 0.75rem 1rem;
          border: none;
          border-radius: 0.5rem;
          font-weight: 500;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .messenger-submit-button:hover:not(:disabled) {
          background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
        }

        .messenger-submit-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .messenger-spinner {
          animation: spin 1s linear infinite;
          width: 1.25rem;
          height: 1.25rem;
          margin-right: 0.75rem;
        }

        .messenger-spinner-circle {
          opacity: 0.25;
        }

        .messenger-spinner-path {
          opacity: 0.75;
        }

        .messenger-auth-footer {
          margin-top: 2rem;
          text-align: center;
        }

        .messenger-footer-text {
          font-size: 0.875rem;
          color: #6b7280;
        }

        .messenger-footer-highlight {
          color: #2563eb;
          font-weight: 500;
        }

        .messenger-legal-footer {
          background-color: #f9fafb;
          padding: 1rem 2rem;
          border-top: 1px solid #e5e7eb;
        }

        .messenger-legal-text {
          font-size: 0.75rem;
          color: #6b7280;
          text-align: center;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 640px) {
          .messenger-auth-content {
            padding: 1.5rem;
          }
          
          .messenger-auth-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Modal;