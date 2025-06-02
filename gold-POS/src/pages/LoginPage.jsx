import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'owner@gold.com' && password === 'ownerpass') {
      navigate('/owner/reports');
    } else if (email === 'employee@gold.com' && password === 'employeepass') {
      navigate('/employee/inventory');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Card style={{ width: '24rem' }} className="p-4 shadow">
        <Card.Body>
          <Card.Title className="text-center mb-4">Login</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button  className="w-100" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
