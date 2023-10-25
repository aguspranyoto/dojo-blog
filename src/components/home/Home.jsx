import useFetch from "../../useFetch";
import BlogList from "../blogList/BlogList";
import "./Home.scss";

function Home() {
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} name="All Blogs" />}
    </div>
  );
}

export default Home;
