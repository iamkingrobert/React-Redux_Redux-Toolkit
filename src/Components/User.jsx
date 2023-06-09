import { Card, Col } from "react-bootstrap/Card";
import { useSelector } from "react-redux";
import "./User.css";

const User = (deleteData) => {
  const student = useSelector((store) => store.users.users);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteData(student.id);
  };

  return (
    <div>
      {student.map((item) => {
        return (
          <>
            <Col md="4" className="user__col">
              <Card key={item.id}>
                <Card.Body className="user__body">
                  <Card.Subtitle className="mb-2">
                    Name: {item.name}
                  </Card.Subtitle>
                  <p>Email: {item.email}</p>
                  <p>Gen: {item.gen}</p>
                  <Card.Link href="#" style={{ color: "blue" }}>
                    EDIT
                  </Card.Link>
                  <Card.Link
                    href="#"
                    style={{ color: "red" }}
                    onClick={handleDelete}
                  >
                    DELETE
                  </Card.Link>
                </Card.Body>
              </Card>
            </Col>
          </>
        );
      })}
    </div>
  );
};

export default User;
