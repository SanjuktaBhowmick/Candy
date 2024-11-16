import React from "react";
import Goal_1 from "../../asserts/Contributions/Goal-1.png";
import Goal_2_1 from "../../asserts/Contributions/Goal-2.1.png";
import Goal_2_2 from "../../asserts/Contributions/Goal-2.2.png";
import MainHeading from "../MainHeading/MainHeading";
import "./Contributions.css";
const Contributions = () => {
  return (
    <div className="home-container">
      <MainHeading headingText="Contributions" />
      <div className="sections">
        <h2 className="section-heading">Goal 1: </h2>
        <div>
          <img
            src={Goal_1}
            alt="Goal 2 image"
            className="section-content-image_Goal1"
          />
          <div className="section-content-text">
            <ul class="ul-list">
              <li>Vertex Color Update</li>
              <li>
                Our algorithm maintains proper coloring with (𝑑_max + 1) upper
                bound.
              </li>
              <li>
                Our algorithm maintains proper coloring with (𝑑_max + 1) upper
                bound.
              </li>
            </ul>
          </div>
        </div>
        <h2 className="section-heading">
          Goal 2: Use of Local Information to Improve Efficiency
        </h2>
        &nbsp;
        <section className="section-main">
          <div className="section-content">
            <img
              src={Goal_2_1}
              alt="Goal 2 image"
              className="section-content-image_Goal2"
            />
            <div className="section-content-text">
              <ul class="ul-list">
                <li>
                  We proposed a unique priority assignment for distributed
                  coloring that reduces inter-partition communication
                </li>
                <li>
                  Our approach to reduce communication:
                  <ul>
                    <li>Storing 2-hop ghost</li>
                    <li>Deterministic coloring for priority 2 vertices</li>
                    <li>Minimized color update for priority 3 vertices</li>
                    <li>
                      Use minimum information (Global ID and priority) to select
                      vertices for recoloring
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </section>
        &nbsp;
        <section className="section-main">
          <div className="section-content">
            <div className="section-content-text">
              <ul class="GraphPropertyUpdateUl">
                <li>
                  Structural Hole Spanner (SHS) serves as a bridge between two
                  or more otherwise disconnected community.
                </li>
                <li>
                  SHS detection algorithms depend on [10]:
                  <ul>
                    <li>
                      Impact on the information flow due to removal of a vertex.
                    </li>
                    <li>Centrality metrices.</li>
                  </ul>
                </li>
                <li>
                  We propose mSpan, a Structural Hole Spanner (SHS) detection
                  technique based on only local neighborhood information [11].
                </li>
                <li>We exploit the concept of strong and weak social ties.</li>
              </ul>
            </div>
            <img
              src={Goal_2_2}
              alt="Goal 2 image"
              className="section-content-image_Goal2"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contributions;
