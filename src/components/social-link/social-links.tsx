import React from "react";
import { Col, Row } from "reactstrap";
import "./socialLinks.css";
import SocialImg from "../../images/social.png";
import { socialData } from "../../constants/ui-constants/ui-constants";

function SocialLinks() {
  const handleIconClick = (link: any) => {
    window.open(link, "_blank");
  };

  return (
    <Row
      style={{
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
      }}
    >
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
              {socialData.map((item: any, index: any) => (
                <div
                  className="icon-wrapper"
                  key={index}
                  onClick={() => handleIconClick(item.link)}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Col>
      <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
        <div className="cards-container">
          <img src={SocialImg} alt="Social" />
        </div>
      </Col>
    </Row>
  );
}

export default SocialLinks;
