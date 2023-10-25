import "./BlogList.scss";
import { Link } from "react-router-dom";

function BlogList({ blogs, name }) {
  return (
    <div className="blog-list">
      <h2>{name}</h2>
      {blogs.map((item) => (
        <div className="blog-preview" key={item.id}>
          <Link to={`/blogs/${item.id}`}>
            <h2>{item.title}</h2>
            <p>Written by {item.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
