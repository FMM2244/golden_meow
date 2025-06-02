import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Navbar from './components/Navbar';
import InventoryPage from './pages/InventoryPage';
import SalesPage from './pages/SalesPage';
import ReportPage from './pages/ReportPage';
import UserPage from './pages/UserPage';

function App() {
  const [inventory, setInventory] = useState([]);
  const [sales, setSales] = useState([]);
  const [users, setUsers] = useState([]);

  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<InventoryPage inventory={inventory} setInventory={setInventory} />} />
          <Route path="/sales" element={<SalesPage inventory={inventory} sales={sales} setSales={setSales} />} />
          <Route path="/reports" element={<ReportPage sales={sales} />} />
          <Route path="/users" element={<UserPage users={users} setUsers={setUsers} />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;