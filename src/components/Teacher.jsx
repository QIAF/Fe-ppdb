import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ImgTeacher from "../assets/images/img-teacher.png";

function Teacher() {
  return (
    <div>
      <div className="tenaga-pendidik text-center">
        <h4>Tenaga Pendidik</h4>
      </div>
      <div className="container">
        <Row xs={2} md={4} className="card-teacher g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Img variant="top-center" src={ImgTeacher} />
                <Card.Body style={{ backgroundColor: "#E6F0FB" }}>
                  <Card.Title
                    className="text-center"
                    style={{ color: "#816503" }}
                  >
                    Suherman
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
export default Teacher;
