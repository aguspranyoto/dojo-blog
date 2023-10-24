import { useState } from "react";
import "./Home.scss";

function Home() {
  const [fName, setfName] = useState("");
  const [message, setMessage] = useState("");
  const [siswa, setSiswa] = useState([]);

  const handleChange = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const submitForm = () => {
    event.preventDefault();
    setSiswa((arr) => [...arr, `${message}`]);
    setMessage("");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>

      {siswa.map((e, i) => (
        <p key={i}>{e}</p>
      ))}
      <div className="form">
        <form action="">
          <input type="text" onChange={handleChange} value={message} />
          <button type="submit" onClick={submitForm}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
