import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

export default function PostPage() {
  const { id } = useParams();

  const [postInfo, setPostInfo] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    const getPostInfo = async (id) => {
      const json = await api.get("/posts/" + id, true);
      setPostInfo(json);
    };
    getPostInfo(id);
  }, [id]);

  useEffect(() => {
    const getComments = async (id) => {
      const json = await api.get("/posts/" + id + "/comments", true);
      setComments(json);
    };
    getComments(id);
  }, [id]);
console.log(comments.data)
  return (
    <div className="post-container">
      <div className="post">
        {postInfo.data && (
          <>
            <strong>{postInfo.data.title}</strong>
            <p>{postInfo.data.body}</p>
          </>
        )}
      </div>
      <h1>Comentários</h1>
      <div className="post">
        {comments.data && (
          <>
            <div>
              {comments.data.map((comment, k) => (
                <div className="comment" key={k.id}>
                  <p>{comment.name}</p>
                  <p>{comment.email}</p>
                  <p>{comment.body}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
