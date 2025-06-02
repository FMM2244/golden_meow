import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Card } from 'react-bootstrap';

function InventoryForm({ show, handleClose, onSave, initialData }) {
  const [form, setForm] = useState({
    id: '',
    name: '',
    type: '',
    weight: '',
    karat: '24K',
    vendor: ''
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if ((name === 'id' || name === 'weight') && parseFloat(value) < 0) {
      return;
    }
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    onSave(form);
    setForm({ id: '', name: '', type: '', weight: '', karat: '24K', vendor: '' });
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton className="bg-warning">
        <Modal.Title className="text-dark">{initialData ? 'Edit Item' : 'Add Item'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Card className="card-custom p-3">
          <Form>
            <Form.Group className="mb-3">
            <Form.Label>Item ID</Form.Label>
              <Form.Control
                type="number"
                name="id"
                value={form.id}
                onChange={handleChange}
                step="1"
                min="0"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Item Name</Form.Label>
              <Form.Control type="text" name="name" value={form.name} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Item Type</Form.Label>
              <Form.Control type="text" name="type" value={form.type} onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Weight (grams)</Form.Label>
            <Form.Control
              type="number"
              name="weight"
              value={form.weight}
              onChange={handleChange}
              step="0.01"
              min="0"
            />
          </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Karat</Form.Label>
              <Form.Select name="karat" value={form.karat} onChange={handleChange}>
                <option>24K</option>
                <option>21K</option>
                <option>18K</option>
                <option>14K</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Vendor</Form.Label>
              <Form.Control type="text" name="vendor" value={form.vendor} onChange={handleChange} />
            </Form.Group>
          </Form>
        </Card>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="custom" onClick={handleSubmit}> {initialData ? 'Update' : 'Add'} </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InventoryForm;