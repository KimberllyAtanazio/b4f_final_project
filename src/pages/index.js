import React, { useState } from 'react';
import Buttons from '../components/ButtonsFP';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

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
      {showSignup && <SignupForm />}
    </div>
  );
}

export default FirstPage;
