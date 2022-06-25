import React from "react";
import "./BillingDetails.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";

const BillingDetails = () => {
  return (
    <div className="billing-details-container">
      <h2 className="biling-details-heading">Billing Details</h2>
      <Form>
      <Form.Group className="mb-3">
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Last Name:</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Address:</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>City:</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Phone:</Form.Label>
          <Form.Control type="number"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="info" type="submit">
          Order
        </Button>
      </Form>
    </div>
  );
};

export default BillingDetails;
