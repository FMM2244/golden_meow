import React, { useState } from 'react';
import { Form, Button, Table, Modal, Card } from 'react-bootstrap';

function SalesForm({ inventory, onSave }) {
  const [show, setShow] = useState(false);
  const [invoiceItems, setInvoiceItems] = useState([]);
  const [itemSelection, setItemSelection] = useState({
    id: '',
    weight: '',
    price: '',
    karat: '24K'
  });

  const makeCharges = (price) => (parseFloat(price) * 0.1).toFixed(2);

  const handleAddItem = () => {
    const item = inventory.find(i => i.id === itemSelection.id);
    if (item) {
      setInvoiceItems([...invoiceItems, { ...item, ...itemSelection, makingCharges: makeCharges(itemSelection.price) }]);
      setItemSelection({ id: '', weight: '', price: '', karat: '24K' });
    }
  };

  const handleSave = () => {
    onSave({ items: invoiceItems, date: new Date().toLocaleString() });
    setInvoiceItems([]);
    setShow(false);
  };

  return (
    <>
      <Button variant="custom" onClick={() => setShow(true)}>New Sale</Button>
      <Modal fullscreen show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton className="bg-warning">
          <Modal.Title className="text-dark">New Sales Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card className="card-custom p-3">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Select Item</Form.Label>
                <Form.Select value={itemSelection.id} onChange={(e) => setItemSelection({ ...itemSelection, id: e.target.value })}>
                  <option value="">-- Select an Item --</option>
                  {inventory.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="number" value={itemSelection.weight} onChange={(e) => setItemSelection({ ...itemSelection, weight: e.target.value })} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Karat</Form.Label>
                <Form.Select value={itemSelection.karat} onChange={(e) => setItemSelection({ ...itemSelection, karat: e.target.value })}>
                  <option>24K</option>
                  <option>21K</option>
                  <option>18K</option>
                  <option>14K</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Selling Price</Form.Label>
                <Form.Control type="number" value={itemSelection.price} onChange={(e) => setItemSelection({ ...itemSelection, price: e.target.value })} />
              </Form.Group>
              <Button variant="custom" onClick={handleAddItem} disabled={!itemSelection.id}>Add to Invoice</Button>
            </Form>
          </Card>

          {invoiceItems.length > 0 && (
            <Table striped bordered hover className="mt-4">
              <thead className="table-warning">
                <tr>
                  <th>Name</th>
                  <th>Weight</th>
                  <th>Karat</th>
                  <th>Price</th>
                  <th>Making Charges</th>
                </tr>
              </thead>
              <tbody>
                {invoiceItems.map((it, idx) => (
                  <tr key={idx}>
                    <td>{it.name}</td>
                    <td>{it.weight}</td>
                    <td>{it.karat}</td>
                    <td>{it.price}</td>
                    <td>{it.makingCharges}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
          <Button variant="custom" onClick={handleSave} disabled={invoiceItems.length === 0}>Save Transaction</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SalesForm;