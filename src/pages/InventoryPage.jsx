import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import InventoryList from '../components/InventoryList';
import InventoryForm from '../components/InventoryForm';

function InventoryPage({ inventory, setInventory }) {
  const [showForm, setShowForm] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleSave = (item) => {
    const exists = inventory.some((i) => i.id === item.id);
    if (exists) {
      setInventory(inventory.map((i) => (i.id === item.id ? item : i)));
    } else {
      setInventory([...inventory, item]);
    }
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setEditData(item);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    setInventory(inventory.filter((i) => i.id !== id));
  };

  return (
    <>
      <div className="page-header">
        <h3>Inventory Management</h3>
      </div>
      <Card className="card-custom p-3">
        <Button variant="custom" className="mb-3" onClick={() => { setEditData(null); setShowForm(true); }}>
          Add Item
        </Button>
        <InventoryList inventory={inventory} onEdit={handleEdit} onDelete={handleDelete} />
      </Card>
      <InventoryForm show={showForm} handleClose={() => setShowForm(false)} onSave={handleSave} initialData={editData} />
    </>
  );
}

export default InventoryPage;