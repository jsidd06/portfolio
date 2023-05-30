import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./socialLinks.css";
import SocialImg from "../../images/social.png";
import { Col, Row } from "reactstrap";
function SocialLinks() {
  const handleIconClick = (link: any) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <Row
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
          <div className="cards-container">
            <img src={SocialImg} />
          </div>
        </Col>
        <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
          <div
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <div className="social-links-container">
              <div className="icon-row">
                <div
                  className="icon-wrapper"
                  onClick={() => handleIconClick("https://github.com")}
                >
                  <GitHubIcon className="icon" />
                </div>
                <div
                  className="icon-wrapper"
                  onClick={() => handleIconClick("https://facebook.com")}
                >
                  <FacebookIcon className="icon" />
                </div>
                <div
                  className="icon-wrapper"
                  onClick={() => handleIconClick("https://twitter.com")}
                >
                  <TwitterIcon className="icon" />
                </div>
                <div
                  className="icon-wrapper"
                  onClick={() => handleIconClick("https://youtube.com")}
                >
                  <YouTubeIcon className="icon" />
                </div>
                <div
                  className="icon-wrapper"
                  onClick={() => handleIconClick("https://linkedin.com")}
                >
                  <LinkedInIcon className="icon" />
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default SocialLinks;
