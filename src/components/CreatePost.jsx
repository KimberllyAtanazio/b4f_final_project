import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from '@/styles/CreatePost.module.css'
import { BackIcon } from '@/../public/icons/BackIcon';


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
    <div>
      <form className={styles.newPostCard} onSubmit={handlePost}>
        <div className={styles.headerPage}>
          <button
            className={styles.backButton}
            onClick={() => router.back()}
          >
            <BackIcon />
          </button>
          <h1 className={styles.titlePage}>New Post</h1>
        </div>
        <div className={styles.formCard}>
        <input
          type="text"
          placeholder="Post title"
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
          className={styles.textInput}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>

        <button type="submit" className={styles.submitButton}>
          Submit
        </button>

        {error && <p className={styles.error}>{error}</p>}
        </div>
      </form>
    </div>
  );
}
