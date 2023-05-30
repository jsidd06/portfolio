import * as React from "react";
import { CardImg, Col, Row } from "reactstrap";
import { BODY_STYLE } from "./bodyContainer.style";

type BodyProps = {
  image?: any;
  heading?: any;
  description?: any;
  action?: any;
  link?: any;
};

function BodyContainer({
  image,
  heading,
  description,
  action,
  link,
}: BodyProps) {
  return (
    <React.Fragment>
      {!action ? (
        <Row style={BODY_STYLE.container}>
          <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
            <div>
              <span style={BODY_STYLE.heading}>{heading}</span>
              <span style={BODY_STYLE.description}>{description}</span>
            </div>
          </Col>
          <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
            <div>
              <CardImg
                src={image}
                alt="Image"
                style={{ width: "80%", maxWidth: "700px" }}
              />
            </div>
          </Col>
        </Row>
      ) : (
        <Row
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
            <div className="cards-container">
              <a href={link} target="_blank">
                <img src={image} />
              </a>
            </div>
          </Col>
          <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
            <div>
              <span
                style={{
                  fontSize: "2rem",
                  color: "red",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  textAlign: "center",
                }}
              >
                {heading}
              </span>
              <span
                style={{
                  fontSize: "1.5rem",
                  color: "black",
                  fontWeight: "normal",
                  textAlign: "center",
                }}
              >
                {description}
              </span>
            </div>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
}

export default BodyContainer;
