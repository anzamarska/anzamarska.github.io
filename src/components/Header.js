import React from "react";
import "../styles/layouts/Header.scss";
import Roll from "react-reveal/Roll";
import Bounce from "react-reveal/Bounce";

const Header = (props) => (
  <>
    <div className="header">
      <button
        className="hamburger"
        onClick={() => props.changeHamburgerClass()}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className="navigation">
        <Bounce left>
          <button className="button" onClick={props.scrollingViewContact}>
            contact
          </button>
        </Bounce>

        <Roll left>
          <button className="button" onClick={props.scrollingViewProjects}>
            projects
          </button>
        </Roll>
        <Bounce bottom>
          <button className="button" onClick={props.scrollingViewCourses}>
            courses/events
          </button>
        </Bounce>
        <Bounce right>
          <button className="button" onClick={props.scrollingViewSkills}>
            skills
          </button>
        </Bounce>
        <Roll bottom>
          <button className="button" onClick={props.scrollingViewAbout}>
            about
          </button>
        </Roll>
      </div>
    </div>
  </>
);

export default Header;
