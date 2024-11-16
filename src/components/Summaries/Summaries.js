import React from "react";
import GraphPropertyUpdate from "../../asserts/Summaries/GraphPropertyUpdate.png";
import MainHeading from "../MainHeading/MainHeading";
import "./Summaries.css";
const Summaries = () => {
  return (
    <div className="home-container">
      <MainHeading headingText="Project Summaries" />
      <div className="sections">
        <h2 className="section-heading">
          A Framework for Graph Property Update
        </h2>
        <p>
          How can graph properties be updated without complete re-computation?
        </p>
        &nbsp;
        <section className="section-main">
          <div className="section-content">
            <img
              src={GraphPropertyUpdate}
              alt="Graph Property Update Image"
              className="section-content-image"
            />
            <div className="section-content-text">
              <ul class="GraphPropertyUpdateUl">
                <li>
                  Our framework updates graph properties using the information
                  from last time step.
                </li>
                <li>
                  Step 1: Process the Changed Edges. Find affected subgraphs
                </li>
                <li>
                  Step 2: Update Properties of affected subgraphs. Iteratively
                  update affected nodes
                </li>
                <li>
                  The framework provides a generic, compute architecture
                  agnostic approach.
                </li>
                <li>It avoids total recomputation.</li>
                <li>
                  It limits its computation only inside the affected subgraphs.
                </li>
                <li>
                  It decreases execution time, avoids the wastage of compute
                  resources.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <section>
          <h2 className="section-heading">Broader Impacts</h2>
          <ul>
            <li>
              Collaborate with multidisciplinary national/international research
              groups to evaluate the effectiveness of the developed platform,
              algorithms, and software tools.
            </li>
            <li>
              Host workshops, webinars, and tutorials to educate the research
              and broader community about CANDY.
            </li>
            <li>
              Disseminate project outcomes via a dedicated website, invited
              talks, demos, and high-quality publications.
            </li>
            <li>
              Train the next generation of data scientists to develop the CANDY
              platform; engage underrepresented minorities, women, and K-12
              students.
            </li>
          </ul>
        </section> */}
      </div>
    </div>
  );
};

export default Summaries;
