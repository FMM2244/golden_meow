import React from 'react';
import { Table, Button } from 'react-bootstrap';

function InventoryList({ inventory, onEdit, onDelete }) {
  return (
    <Table striped bordered hover className="table-responsive">
      <thead className="table-warning">
        <tr>
          <th>Item ID</th>
          <th>Name</th>
          <th>Type</th>
          <th>Weight</th>
          <th>Karat</th>
          <th>Vendor</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {inventory.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.weight}</td>
            <td>{item.karat}</td>
            <td>{item.vendor}</td>
            <td>
              <Button variant="outline-warning" size="sm" onClick={() => onEdit(item)}>Edit</Button>{' '}
              <Button variant="outline-danger" size="sm" onClick={() => onDelete(item.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default InventoryList;