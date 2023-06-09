import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import NewUser from "./Components/NewUser.jsx";
import Users from "./Components/Users";

function App() {
  return (
    <>
      <Container className="home__cont">
        <Row>
          <Col md="4">
            <h2>Register Student</h2>
            <NewUser />
          </Col>

          <Col>
            <Users />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
