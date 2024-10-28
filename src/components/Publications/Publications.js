import React from "react";
import publications from "../../data/publicationsData";
import "./Publications.css";

const Publications = () => {
  return (
    <div className="publications-container">
      <div className="publications-main-heading-container">
        <div className="header-background"></div>
        <h1 className="publications-heading">Publications</h1>
      </div>
      <ul className="publications-list">
        {publications.map((publication, index) => (
          <li key={index} className="publication-item">
            <p>
              <strong>{publication.authors}</strong>, {publication.title},{" "}
              <em>{publication.journal}</em>, {publication.volume}, pp.{" "}
              {publication.pages}, {publication.date}, doi:{" "}
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {publication.doi}
              </a>
            </p>
            <hr className="publication-divider" /> {/* Line division */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
