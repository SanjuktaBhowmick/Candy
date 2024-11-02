import React from "react";
import { professors, advisoryBoard, students } from "../../data/peopleData";
import MainHeading from "../MainHeading/MainHeading";
import "./People.css";

const People = () => {
  return (
    <>
      <MainHeading headingText="People" />
      <div className="people-container">
        <section className="professors">
          <h2 className="section-heading">Professors</h2>
          <div className="people-list">
            {professors.map((professor, index) => (
              <div key={index} className="person-card">
                {professor.photo && (
                  <img
                    src={require(`../../asserts/People/${professor.photo}`)}
                    alt={professor.name}
                    className="person-photo"
                  />
                )}

                <h3 className="person-name">{professor.name}</h3>
                <p className="person-university">{professor.university}</p>
                <a
                  href={professor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="person-link"
                >
                  Website
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="advisory-board">
          <h2 className="section-heading">Advisory Board</h2>
          <div className="people-list">
            {advisoryBoard.map((member, index) => (
              <div key={index} className="person-card">
                <h3 className="person-name">{member.name}</h3>
                <p className="person-university">{member.university}</p>
                {member.info && (
                  <p className="person-info">{member.info}</p> // Added education
                )}
                <a
                  href={member.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="person-link"
                >
                  Website
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="students">
          <h2 className="section-heading">Students</h2>
          <div className="people-list">
            {students.map((student, index) => (
              <div key={index} className="person-card">
                <h3 className="person-name">{student.name}</h3>
                <p className="person-university">{student.university}</p>
                <a
                  href={student.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="person-link"
                >
                  Website
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default People;
