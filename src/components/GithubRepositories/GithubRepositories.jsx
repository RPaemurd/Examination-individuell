import React, { useState, useEffect } from "react";
import "./GithubRepositoriesStyles.css";
import { Octokit } from "https://esm.sh/@octokit/core";

// Skapar en instans av Octokit med autentisering och användaragent
const octokit = new Octokit({
  auth: "", //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
  userAgent: "MyCV",
});

// Funktionell komponent GitHubRepositories
const GitHubRepositories = () => {
  // State hooks för repositories och popup-visning
  const [repositories, setRepositories] = useState([]); // State för repositories
  const [showPopup, setShowPopup] = useState(false); // State för att visa/dölja pop-up

  // Funktion för att hämta repositories från GitHub API
  useEffect(() => {
    const fetchRepositories = async () => {
      try {

        // Gör en GET-request till GitHub API för att hämta användarens repositories
        const response = await octokit.request("GET /users/{username}/repos", {
          username: "RPaemurd", // Användarens användarnamn
          headers: {
            "X-GitHub-Api-Version": "2022-11-28", // GitHub API-version
          },
        });

        // Kasta ett fel om responsens status inte är 200 (OK)
        if (response.status !== 200) {
          throw new Error("Failed to fetch repositories");
        }

        // Uppdatera state med repositories från API-responsen
        setRepositories(response.data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    // Kör fetchRepositories vid mount (en gång)
    fetchRepositories();
  }, []); // Använd '[]' som dependencies för useEffect för att köra endast en gång vid mount

  // Funktion för att dölja pop-up
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Funktion för att visa pop-up
  const handleShowPopup = () => {
    setShowPopup(true);
  };

  return (
    <div className="container">
      <h2>GitHub Repositories for RPaemurd</h2>

      {/* Knapp för att visa pop-up med repositories */}
      <button onClick={handleShowPopup}>Visa Repositories</button>

      {/* Visa pop-up om showPopup är true */}
      {showPopup && (
        <div className="popup">
          <div className="popupContent">
            <button className="closeButton" onClick={handleClosePopup}>
              &times;
            </button>
            {/* Lista med användarens repositories */}
            <ul>
              {repositories.map((repo) => (
                <li key={repo.id}>
                  {/* Länk till GitHub-repot */}
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {repo.name}
                  </a>
                  {/* Beskrivning av repot */}
                  <p>{repo.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubRepositories;
