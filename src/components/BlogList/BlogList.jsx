import "./BlogList.scss";

function BlogList({ blogs, name }) {
  return (
    <div className="blog-list">
      <h2>{name}</h2>
      {blogs.map((item) => (
        <div className="blog-preview" key={item.id}>
          <h2>{item.title}</h2>
          <p>Written by {item.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
