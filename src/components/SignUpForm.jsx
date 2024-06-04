import React, { useState } from 'react';
import styles from '../styles/SignUpForm.module.css';
import LoginForm from './LoginForm';
import { useRouter } from 'next/router';

export default function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Novo estado para mensagem de sucesso
  const [showLogin, setShowLogin] = useState(false);
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(''); // Reseta a mensagem de sucesso

    // Validação no frontend
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }

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
        // Se o usuário for criado com sucesso, define a mensagem de sucesso
        setSuccess(
          'Signup successful! You will be redirected to your profile.'
        );
        // Limpa os campos do formulário
        setUsername('');
        setEmail('');
        setPassword('');

        // Redireciona para a página de perfil após um curto atraso
        setTimeout(() => router.push('/profile'), 2000); // 2 segundos de atraso
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
    // Aqui você pode adicionar a lógica para lidar com o clique em "Login"
    setShowLogin(true); // Define showLogin como true para exibir o componente de login
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
          required
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.formInput}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.formInput}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className={styles.signupSubmitButton}>
          Sign Up
        </button>
        {error && <p className={styles.error}>{error}</p>}
        {success && <p className={styles.success}>{success}</p>}{' '}
        {/* Exibe a mensagem de sucesso */}
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
