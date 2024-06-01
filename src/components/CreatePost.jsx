import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from '@/styles/SignUpForm.module.css'

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handlePost = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/newPosts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, country, content }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Post criado com sucesso');
        router.push("/profile");
      } else {
        setError(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className={styles.signupCard}>
      <form className={styles.form} onSubmit={handlePost}>
        <h1 className={styles.text}>New Post</h1>
        <input
          type="text"
          placeholder="Title"
          className={styles.formInput}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Country"
          className={styles.formInput}
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <textarea
          type="text"
          placeholder="Content"
          className={styles.formInput}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit" className={styles.signupSubmitButton}>
          Submit
        </button>
      {error && <p>{error}</p>}
      </form>
    </div>
  );
}
