import React, { useState } from 'react';
//import { Button } from 'react-bootstrap';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';

import { Card, Button } from 'react-bootstrap';

function UserPage({ users, setUsers }) {
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleSave = (user) => {
    const exists = users.some((u) => u.id === user.id);
    if (exists) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, user]);
    }
    setShowForm(false);
  };

  const handleEdit = (user) => {
    setEditData(user);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <>
      <div className="page-header">
        <h3>User Management</h3>
      </div>
      <Card className="card-custom p-3">
        <Button variant="custom" className="mb-3" onClick={() => { setEditData(null); setShowForm(true); }}>
          Add User
        </Button>
        <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      </Card>
      <UserForm show={showForm} handleClose={() => setShowForm(false)} onSave={handleSave} initialData={editData} />
    </>
  );
}

export default UserPage;
