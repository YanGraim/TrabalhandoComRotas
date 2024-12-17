import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <h1>Bem vindo à página sobre</h1>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to={"/contato"}>Contato</Link>
    </div>
  );
}

export default About;
