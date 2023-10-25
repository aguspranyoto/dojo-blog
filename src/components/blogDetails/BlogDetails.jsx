import "./BlogDetails.scss";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";
import { useNavigate } from "react-router-dom";

function BlogDetail() {
  const { id } = useParams();
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch(`http://localhost:8000/blogs/` + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch(`http://localhost:8000/blogs/` + blogs.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>
            Written by <b>{blogs.author}</b>
          </p>
          <div>{blogs.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetail;
