import { Col, Row, CardImg } from "reactstrap";
import Image1 from "../../images/s-1.png";

function Cards() {
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
              Siddharth Jain is a skilled Software Engineer with 1.8 years of
              experience.
            </span>
            <span
              style={{
                fontSize: "1.5rem",
                color: "black",
                fontWeight: "normal",
                textAlign: "center",
              }}
            >
              Proficient in Javascript and React Native, React.js, Node.js, and
              Rest API, Siddharth Jain designs and develops innovative software
              solutions. Collaborative and adaptable, Siddharth Jain thrives in
              cross-functional teams, delivering high-quality code. Committed to
              continuous learning, Siddharth Jain stays updated with the latest
              industry trends.
            </span>
          </div>
        </Col>
        <Col md={6} lg={6} xl={6} className="d-flex justify-content-center">
          <div>
            <CardImg src={Image1} style={{ width: "80%", maxWidth: "700px" }} />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default Cards;
