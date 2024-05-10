import { Link } from "react-router-dom";
import Button from "../components/Button/Button";
import Header from "../components/Header/Header";
import GitHubRepositories from "../components/GithubRepositories/GithubRepositories";
import "../index.css";

const GithubPage = () => {
  return (
    <div className="github-container">
      <Header />
      <div>
        <GitHubRepositories /> {/* Rendera GitHubRepositories-komponenten */}
      </div>
      <Link to="/"> {/* Rendera en navigeringslänk till startsidan */}
        <Button text={"Gå tillbaka till hem"}></Button>
      </Link>
    </div>
  );
};

export default GithubPage;
