import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="post-container">
      <h1>Lista de Posts</h1>

      <ul>
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li key={post.id}>
              <strong>Título:</strong>
              <p>{post.title}</p>

              <strong>Descrição</strong>
              <p>{post.body}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
