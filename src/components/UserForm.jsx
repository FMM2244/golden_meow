import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Card } from 'react-bootstrap';

function UserForm({ show, handleClose, onSave, initialData }) {
  const [form, setForm] = useState({ id: '', name: '', role: '' });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    onSave(form);
    setForm({ id: '', name: '', role: '' });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-warning">
        <Modal.Title className="text-dark">{initialData ? 'Edit User' : 'Add User'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="card-custom p-3">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>User ID</Form.Label>
              <Form.Control type="text" name="id" value={form.id} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={form.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control type="text" name="role" value={form.role} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="custom" onClick={handleSubmit}>{initialData ? 'Update' : 'Add'}</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UserForm;