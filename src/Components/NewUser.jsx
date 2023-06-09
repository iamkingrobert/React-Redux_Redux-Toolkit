import {v4 as uuidv4} from "uuid"
import { createUser } from '../Slice/userSlice';
import {useDispatch} from 'react-redux'
import { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function NewUser() {
    const dispatch = useDispatch()
  

     const [data, setData] = useState({
     name: "",
     email: "",
     gen: "",
     id: uuidv4() ,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(createUser(data));
    e.target.reset()
  }
  return (
    <>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Student Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Your Email"
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="text"
            placeholder="What Gen Are You"
            name="gen"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit Form
        </Button>
      </Form>
    </>
  )
}
