import React, { useState } from 'react';
import Buttons from '../components/ButtonsFP';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';

function FirstPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <div>
      <Buttons
        onLoginClick={handleLoginClick}
        onSignupClick={handleSignupClick}
      />
      {showLogin && <LoginForm />}
      {showSignup && <SignUpForm />}
    </div>
  );
}

export default FirstPage;
