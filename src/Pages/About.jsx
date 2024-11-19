import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faArrowUpRightDots,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="hero about">
      <div className="about-modal">
        <div>
          <h1
            style={{
              color: "darkblue",
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            About Us
          </h1>
        </div>
        <h2>Why Meraken?</h2>
        <p>
          Meraken is a trusted IT consulting and solutions provider dedicated to
          helping businesses navigate the complexities of the digital age. With
          a focus on delivering customized strategies, we work closely with our
          clients to understand their unique challenges and goals. Our
          experienced team offers expert guidance, proactive support, and access
          to cutting-edge technologies, ensuring your IT environment is secure,
          efficient, and future-ready. At Meraken, we are committed to being a
          reliable partner, empowering businesses to optimize their operations,
          stay competitive, and achieve sustainable growth in an ever-evolving
          technological landscape.
        </p>

        <div className="modal-heading">
          <FontAwesomeIcon icon={faBullseye} className="icon" />
          <h3 className="vision">Our Vision</h3>
        </div>
        <p>
          To be the trusted IT partner enabling businesses to thrive through
          innovation, expertise, and reliable support in a rapidly evolving
          technological landscape.
        </p>

        <div className="modal-heading">
          <FontAwesomeIcon icon={faArrowUpRightDots} className="icon" />
          <h3 className="mission">Our Mission</h3>
        </div>
        <p>
          To provide customized IT strategies and cutting-edge solutions that
          drive business growth, enhance productivity, and secure operational
          efficiency.
        </p>
      </div>
    </div>
  );
};

export default About;
