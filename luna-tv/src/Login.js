import React, { useState } from 'react';
import { Alert } from 'react-bootstrap'; // Import Alert from react-bootstrap
import './styles/Login.css';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t, i18n } = useTranslation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!login || !password) {
      setError('Please fill in all fields.');
    } else if (!validateEmail(login)) {
      setError('Invalid email address.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters.');
    } else {
      setError('');
      // Continue with form submission
    }
  }

  return (
    <div className="wrapper fadeInDown mt-5">
      <div id="formContent">
        {/* Tabs Titles */}
        <h2 className="active">{t('navbar.loginButton')}</h2>
        <h2 className="inactive underlineHover">{t('other.signup')}</h2>

        {/* Icon */}
        <div className="fadeIn first">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
          </svg>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={t('navbar.loginButton')} onChange={(e) => setLogin(e.target.value)} />
          <input type="text" id="password" className="fadeIn third" name="password" placeholder="password" value={t('other.password')} onChange={(e) => setPassword(e.target.value)} />
          {error && <Alert variant="danger">{error}</Alert>} {/* Use Alert to display error */}
          <input type="submit" className="fadeIn fourth" value={t('navbar.loginButton')} />
        </form>

        {/* Remind Password */}
        <div id="formFooter">
          <a className="underlineHover" href="#">{t('other.forgot')}</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
