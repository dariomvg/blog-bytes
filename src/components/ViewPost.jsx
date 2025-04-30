import { useEffect, useState } from "react";
import iconBack from "../assets/icons/icon-back.svg";
import { marked } from "marked";
import "../styles/view-post.css";

export default function ViewPost({ post }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const getPost = async () => {
      const newHtml = marked.parse(post.content);
      if (html) setHtml(newHtml);
    };
    getPost();
  }, [post]);

  return (
    <>
      <div className="container-header-post">
        <div className="container-link-return">
          <img src={iconBack.src} alt="icon back" width={20} height={20} />
          <a href="/posts" className="return-page">
            Regresar a posts
          </a>
        </div>
        <strong>{post.created_at}</strong>
      </div>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
