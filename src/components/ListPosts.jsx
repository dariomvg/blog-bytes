import { useEffect, useState } from "react";
import { url_api, user_id } from "../utils/options";
import "../styles/pages/posts.css";

export default function ListPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const result = await fetch(`${url_api}/posts/${user_id}`);
      const json = await result.json();
      if (posts) setPosts(json);
    };
    getPosts();
  }, []);

  return (
    <section class="section-posts">
      <h1 class="title-posts">Posts sobre tecnología</h1>
      <section class="container-posts">
        {posts.map((post) => (
          <article class="post">
            <div class="post-header-title">
              <h2 class="title-post">{post.title}</h2>
              <p class="date-post">{post.created_at}</p>
            </div>
            <a href={`/posts/post/${post.id}`} class="link-post">
              Visitar
            </a>
          </article>
        ))}
      </section>
    </section>
  );
}
