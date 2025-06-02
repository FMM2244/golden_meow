import React from 'react';
import { Table, Button, Card } from 'react-bootstrap';

function UserList({ users, onEdit, onDelete }) {
  return (
    <Card className="card-custom p-3">
      <Table striped bordered hover className="mb-0">
        <thead className="table-warning">
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="align-middle">{user.id}</td>
              <td className="align-middle">{user.name}</td>
              <td className="align-middle">{user.role}</td>
              <td>
                <Button variant="outline-warning" size="sm" onClick={() => onEdit(user)}>Edit</Button>{' '}
                <Button variant="outline-danger" size="sm" onClick={() => onDelete(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
}

export default UserList;