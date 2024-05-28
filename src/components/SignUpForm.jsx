import React, { useState } from 'react';
import styles from '../styles/SignUpForm.module.css';
import LoginForm from './LoginForm';

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLogin, setShowLogin] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Se o usuário for criado com sucesso, você pode redirecionar o usuário
        // ou fazer qualquer outra ação necessária

        console.log('Signup successful');
      } else {
        // Se ocorrer algum erro durante a criação do usuário, defina a mensagem de erro
        setError(data.message || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para lidar com o clique em "Sign up"
    setShowLogin(true); // Define showSignup como true para exibir o componente de signup
  };

  return (
    <div className={styles.signupCard}>
      <form className={styles.form} onSubmit={handleSignup}>
        <h1 className={styles.text}>Create your account</h1>
        <input
          type="text"
          placeholder="Username"
          className={styles.formInput}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.formInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.formInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={styles.signupSubmitButton}>
          Sign Up
        </button>
        {error && <p className={styles.error}>{error}</p>}
        <p className={styles.loginToggle}>
          Already have an account?{' '}
          <span onClick={handleLogin} className={styles.toggleLink}>
            Login
          </span>
        </p>
      </form>
      {showLogin && <LoginForm />}
    </div>
  );
}

export default SignupForm;
